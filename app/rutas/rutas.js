module.exports = (app) => {
  const contacto = require("../controladores/contactosControlador.js");
  var router = require("express").Router();
  // Crearer un contacto
  router.post("/", contacto.crearContacto);
  // Obtener todos los contactos
  router.get("/", contacto.obtenerContactos);
  // Obtener un contacto por id
  router.get("/:id", contacto.obtenerContacto);
  // Actualizar un contacto
  router.put("/:id", contacto.actualizarContacto);
  // Eliminar un contacto
  router.delete("/:id", contacto.eliminarContacto);
  app.use("/api/agenda", router);
};
