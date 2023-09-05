const { Order, Detail, Pay } = require("../db");

const resiveOrder = async (req, res, next) => {
  try {
    const { orden, factura } = req.body;

    console.log({
        message: "Se resivio la orden!",
        status: true,
      });
    console.log("orden", orden);
    console.log("detalle", factura);
    res.send({
      message: "Se resivio la orden!",
      status: true,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = resiveOrder;
