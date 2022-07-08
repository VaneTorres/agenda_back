const db = require("../modelos");
const Contactos = db.contactos;
const Op = db.Sequelize.Op;
exports.crearContacto = (req, res) => {
  const contacto = {
    nombre: req.body.nombre,
    telefono: req.body.telefono,
    fecha_nacimiento: req.body.fecha_nacimiento,
    correo: req.body.correo,
    direccion: req.body.direccion,
  };
  Contactos.create(contacto)
    .then((contacto) => {
      res.send(contacto);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};
exports.obtenerContactos = (req, res) => {
  Contactos.findAll()
    .then((contactos) => {
      res.send(contactos);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};
exports.obtenerContacto = (req, res) => {
  Contactos.findByPk(req.params.id)
    .then((contacto) => {
      res.send(contacto);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};
exports.actualizarContacto = (req, res) => {
  const contacto = {
    nombre: req.body.nombre,
    telefono: req.body.telefono,
    fecha_nacimiento: req.body.fecha_nacimiento,
    correo: req.body.correo,
    direccion: req.body.direccion,
  };
  Contactos.update(contacto, {
    where: {
      id: req.params.id,
    },
  })
    .then((contacto) => {
      res.send(contacto);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};
exports.eliminarContacto = (req, res) => {
  Contactos.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Se elimino correctamente!",
        });
      } else {
        res.send({
          message: `No se logro eliminar el contacto con id=${req.params.id}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};
