const db = require("../../database/models");
const sequelize = db.sequelize;
const Op = db.sequelize.Op;

const ApiProductController = {
  list: (req, res) => {
    db.Producto.findAll().then((productos) => {
      let response = {
        meta: {
          status: 200,
          total: productos.length,
          url: "api/productos",
        },
      };
    });
  },
};

module.exports = ApiProductController