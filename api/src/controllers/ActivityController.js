const { Country, Activities } = require('../db.js');

//todo POST AGREGA ACTIVIDADES POR PAIS


const postActivity = async (req, res) => {
  try {
    const { name, difficulty, duration, season, inputCountries } = req.body;

    //crea objeto de nueva actividad por los parametros que llegán por el body
    const activityCreated = await Activities.create({
      name,
      difficulty,
      duration,
      season,
    });

    //objeto busca los paises que llegán por body en Base de Datos
    const dbCountries = await Country.findAll({
      where: {
        name: inputCountries,
      },
    });

    // METODO SEQUELIZE https://sequelize.org/v4/manual/tutorial/associations.html
    // a los paises que llegaron por body se les asigna la actividad creada
    const result = await activityCreated.addCountry(dbCountries); 

    return res.status(200).send({ result, message: 'Activity Created' });
  } catch (e) {
    return res.status(400).send({ message: 'Creation Failed' });
  }
};

const postActivityPromise = (req, res) => {
  const { name, difficulty, duration, season, inputCountries } = req.body;

  Activity.create({
    name,
      difficulty,
      duration,
      season,
    })

    .then( (activityCreated) => {
      return Country.findAll({
        where: {
          name: inputCountries,
        },
      })
      .then( (dbCountries) => {
        activityCreated.addCountry(dbCountries)
        res.status(200).send({ result: activityCreated, message: 'Activity Created' })
      })
      .catch( (e) => {
        res.status(400).send(e);
      });
    })
}

//------------------------------------------------------------------------------------------------------------------
//todo TRAE ACTIVIDADES AL LOCALHOST
const getActivity = async (req, res) => {
  try {
    //llama a la tabla de actividades
    const activities = await Activities.findAll();
    return res.status(200).send(activities);
  } catch (e) {
    return res.status(400).send(e);
  }
};

module.exports = {
  getActivity,
  postActivity,
};
