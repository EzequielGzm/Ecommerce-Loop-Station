const db = require("../../database/models");
const sequelize = db.sequelize;
const Op = db.sequelize.Op;

const ApiProductController = {
  list: (req, res) => {
    db.Producto.findAll();
  },
  ejemplo: (req, res) => {
    let array = [
    { 
       id: 1 
    },
    { 

    },
    { 

    }
  ];
  },
};

module.exports = ApiProductController;
