const express = require('express');
const router = express.Router();
const productosControllerApi = require('../../controllers/api/productsControllerApi');

// RUTAS

router.get("/", productosControllerApi.list)
router.get("/detalle", )

module.exports = router;