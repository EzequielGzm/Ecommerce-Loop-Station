const express = require('express');
const router = express.Router();
const productos = require('../../controllers/api/productsControllerApi');

// RUTAS

router.get("/api/productos", pr.list)