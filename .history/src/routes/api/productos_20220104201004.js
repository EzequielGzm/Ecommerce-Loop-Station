const express = require('express');
const ApiProductController = require('../../controllers/api/productsControllerApi');
const router = express.Router();
const productosAPIController = require('../../controllers/api/productsControllerApi');

// RUTAS

router.get("/api/productos", ApiProductController)