const db = require("../../database/models");
const sequelize = db.sequelize;
const Op = db.sequelize.Op;

const ApiProductController = {
  list: (req, res) => {
    db.Producto.findAll({}
  )
    .then(productos =>{
      let json = {
        meta:{length: productos.length},
        datos:{productos}
      }
      res.json(json)
    })
}
  
};

module.exports = ApiProductController;
