const db = require("../../database/models");
const sequelize = db.sequelize;
const Op = db.sequelize.Op;

const ApiProductController = {
  list: (req, res) => {
    db.Producto.findAll()
  },
  ejemplo: (req,res) =>{
  
  let   [{ 

  }]
  }
};

module.exports = ApiProductController;