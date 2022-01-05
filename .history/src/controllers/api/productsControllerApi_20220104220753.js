const { promiseImpl } = require("ejs");
const db = require("../../database/models");
const sequelize = db.sequelize;
const Op = db.sequelize.Op;

let array = [];

const ApiProductController = {
  list: (req, res) => {
    let promesaProducto = db.Producto.findAll({
      where: { deleted: 0 },
      attributes: {
        exclude: [
          "precio",
          "imagen",
          "fkMarca",
          "fkSubCategoria",
          "fkCategoria",
          "deleted",
          "stock",
          "enOferta",
        ],
      },
      include: [
        {
          model: db.Marca,
          as: "marca",
          attributes: {
            exclude: ["id"],
          },
        },
        {
          model: db.Categoria,
          as: "categoria",
          attributes: {
            exclude: ["id", "imagen"],
          },
        },
        {
          model: db.SubCategoria,
          as: "subcategoria",
          attributes: {
            exclude: ["id", "fkCategoria"],
          },
        },
      ],
    });
    let promesaCategoriaPr = db.Categoria.count({
      include: [
        {
          model: db.Producto,
          as: "producto",
        },
      ],
      group: ["nombre"],
    });

    Promise.all([promesaProducto, promesaCategoriaPr]).then(
      ([productos, categorias]) => {
        /*  categorias.forEach(objCat => {

        let cat = categorias.find(obj =>
            obj.nombre == objCat.nombre
        )
        array.push({
            [cat.nombre]: cat.count 
        })
    }) */

        productos.forEach((element) => {
          element.dataValues.detail =
            "http://localhost:4010/apis/productos/detail/" + element.id;
        });

        let json = {
          meta: { length: productos.length },
          datos: { productos, categorias },
        };
        res.json(json);
      }
    );
  },
  detail: (req, res) => {
    db.Producto.findOne({
      where: { id: req.params.id, deleted: 0 },
      attributes: {
        exclude: ["fkMarca", "fkSubCategoria", "fkCategoria", "deleted"],
      },
      include: [
        {
          model: db.Marca,
          as: "marca",
          attributes: {
            exclude: ["id"],
          },
        },
        {
          model: db.Categoria,
          as: "categoria",
          attributes: {
            exclude: ["id", "imagen"],
          },
        },
        {
          model: db.SubCategoria,
          as: "subcategoria",
          attributes: {
            exclude: ["id", "fkCategoria"],
          },
        },
      ],
    }).then(producto =>{
      producto.dataValues.imagen = "http://localhost:4010/img/products" + producto.imagen

      let json = {
        meta: "detalle",
        data: 
      }
    })
  },
};

module.exports = ApiProductController;
