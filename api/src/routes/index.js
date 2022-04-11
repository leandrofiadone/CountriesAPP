const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
//----------------------
const router = Router();
//----------------------
const { getAllCountries, getCountryByParams } = require('../controllers/CountryController');
//-------------------------------------------------------------------------------------------
const { getActivity, postActivity } = require('../controllers/ActivityController');
//--------------------------------------------------------------------------------
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//----------------------------------------
router.get('/countries', getAllCountries);
router.get('/countries/:idPais', getCountryByParams);
//--------------------------------------------------------
router.post('/activity', postActivity);
router.get('/activity', getActivity);
 //----------------------------------

module.exports = router;
