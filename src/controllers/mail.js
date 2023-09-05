const { User } = require("../db");
const transporter = require("../transporter/transporter");
//hola
const userCreated = async (req, res, next) => {
  try {
    let { email } = req.body;
    let user = await User.findOne({
      where: {
        email: email,
      },
    });

    if (!user) return res.status(400).send("Usuario no encontrado");

    await transporter.sendMail(
      {
        from: '"BookScape"<ebookscape01@gmail.com>',
        to: email,
        subject: `Gracias ${user.username} por registrarse a BookScape`,
        html: `<h4><b>Biemvenido!</b></h4>
            <p>El usuario ${user.username} ha sido creado exitosamente.`,
      },
      (err, info) => {
        if (err) {
          res.status(400).send(err.message);
        } else {
          res.status(200).json(info);
        }
      }
    );
  } catch (error) {
    next(error);
  }
};
module.exports = userCreated;