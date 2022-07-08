module.exports = (sequelize, Sequelize) => {
  const contacto = sequelize.define("contactos", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: Sequelize.STRING,
    },
    telefono: {
      type: Sequelize.INTEGER,
    },
    fecha_nacimiento: {
      type: Sequelize.DATE,
    },
    correo: {
      type: Sequelize.STRING,
    },
    direccion: {
      type: Sequelize.STRING,
    },
  });
  return contacto;
};
