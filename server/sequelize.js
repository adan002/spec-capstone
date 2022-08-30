// import sequelize from "sequelize";

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "postgres://palpdttzdpjxpj:1808faef7cde6ff8afc9614ab05bd30ea16a725c7096fe044e80ffb09ade1355@ec2-34-227-135-211.compute-1.amazonaws.com:5432/d3gfuu6frshv9g",
  {
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);

module.exports = sequelize;
