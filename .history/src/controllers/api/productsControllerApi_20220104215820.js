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
        ],
      },
      include: [
        {
          model: db.Marca,
          as: "marca",
          attributes: {
            exclude: [
             ""
            ]
          }
        },
        {
          model: db.Categoria,
          as: "categoria",
          attributes: {
            exclude: [
             
            ],
          }
        },
        {
          model: db.SubCategoria,
          as: "subcategoria",
          attributes: {
            exclude: [
             
            ]
          }
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
        let json = {
          meta: { length: productos.length },
          datos: { productos, categorias },
        };
        res.json(json);
      }
    );
  },
};

module.exports = ApiProductController;
