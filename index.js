const express = require("express");
const cors = require("cors");
const app = express();

var corsOptions = {
  origin: "http://localhost:8080",
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./app/rutas/rutas.js")(app);
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Servidor corre en el puerto ${PORT}.`);
});

const db = require("./app/modelos");
db.sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Sincronizado.");
  })
  .catch((err) => {
    console.log("Se produjo un error: " + err.message);
  });
