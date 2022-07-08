module.exports = {
  host: "localhost",
  user: "root",
  password: "",
  database: "agenda",
  dialect: "mysql",
  port: "3307",
  pool: {
    min: 0,
    max: 5,
    acquire: 30000,
    idle: 10000,
  },
};
