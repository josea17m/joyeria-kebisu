const express = require('express');
const router = express.Router();

const indexController = require ("../controller/indexController");

router.get("/", indexController.home);

//Renderizado de Productos

router.get("/anillos", indexController.anillos);
router.get("/cadenas", indexController.cadenas);
router.get("/candongas", indexController.candongas);
router.get("/manillas", indexController.manillas);
router.get("/topitos", indexController.topitos);

router.get("/favoritos", indexController.favoritos);
router.get("/carrito", indexController.carrito);

module.exports = router;