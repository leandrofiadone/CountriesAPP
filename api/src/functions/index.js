const axios = require('axios');
const { Country, Activities } = require('../db.js');

//todo PAISES DE LA API A DATABASE --- export to main index.js
//sin ACTIVITIES
const getFromApi = async () => {
  try {
    const { data } = await axios.get('https://restcountries.com/v3/all');

    const dataFromApi = await data.map(async (dataCountry) => {
      const country = {
        name: dataCountry.name.common,
        id: dataCountry.cca3,
        flag: dataCountry.flags[0],
        continent: dataCountry.region,
        capital: dataCountry.capital && dataCountry.capital[0],
        subregion: dataCountry.subregion,
        area: dataCountry.area,
      };
      // si el país no se encuentra se crea en la base de datos
      Country.findOrCreate({
        where: { id: dataCountry.cca3 },
        defaults: country,
      });

      return country;
    }); //! ¿ TODO JUNTO ?

    return dataFromApi;
  } catch (e) {
    (e) => console.error(e);
  }
};
//-------------------------------------------------------------------------------------------
//todo TRAE PAISES DE LA DATABASE --- export to countrycontroller.js (getAllCountries)
// con ACTIVITIES estos sirvén con las activities incluidas.
const getFromDb = async () => {
  const countriesinDb = await Country.findAll({
    include: {
      model: Activities,
      attributes: ['name', 'difficulty', 'duration', 'season'],
      through: { attributes: [] },
    },
  });
  return countriesinDb;
};
//----------------------------------------------------------------------------------------
module.exports = {
  getFromApi,
  getFromDb,
};
