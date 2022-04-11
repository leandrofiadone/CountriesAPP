const { Country, Activities } = require('../db.js');
const { getFromDb } = require('../functions');

const { Op } = require('sequelize');

//todo  TRAE TODOS LOS PAISES AL LOCALHOST Y EL SEARCH POR NAME
const getAllCountries = async (req, res) => {
  const { name } = req.query; //CONSULTA POR QUERY REVISAR, ES POR EL ?name= en la URL

  try {
    const countriesDb = await getFromDb(); // traé paises de functions.js

    if (!name) {
      return res.status(200).send(countriesDb);// devuelve todos los paises de DATABASE si no llega nombre por Query
    } else {
      //objeto creado a partir de los paises en database por el name que llega por Query
      const nameMatch = await Country.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`, //! REVISAR POR QUE [] Y BACKSTICKS EN NAME https://sequelize.org/docs/v6/core-concepts/model-querying-basics/
          },
        },
        // el findAll debe INCLUIR: //! y si no que pasa?
        include: {
          model: Activities,
          attributes: ['name', 'difficulty', 'duration', 'season'],
          through: { attributes: [] },
        },
      });
      //! NO SE SI LO SIGUIENTE HACE FALTA
      nameMatch.length === 0
        ? res.status(200).json()
        : res.status(200).send(nameMatch);
    }
  } catch (e) {
    return res.status(400).json({ message: e });
  }
};


//todo TRAE PAISES POR PARAMETRO ID
const getCountryByParams = async (req, res) => {
  const countryIdToUp = req.params.idPais.toUpperCase(); //llamado a parameteros codigo de de 3 id

  try {
    const countryFound = await Country.findOne({
      where: {
        id: countryIdToUp,
      },
      include: {
        model: Activities,
        attributes: ['name', 'difficulty', 'duration', 'season'],
        through: { attributes: [] },
      },
    });

    //el Object.values devuelve un booleano true o false si el pais existe o no
    Object.values(countryFound) && res.status(200).send(countryFound); //!REVISAR 
  } catch (e) {
    return res.status(400).json({ message: e }); //! message es algo automatico?
  }
};

module.exports = {
  getAllCountries,
  getCountryByParams,
};
