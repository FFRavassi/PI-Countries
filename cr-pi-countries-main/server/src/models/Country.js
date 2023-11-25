const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  sequelize.define(
    "Country",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      flag: {
        type: DataTypes.STRING,
        isUrl: true,
        allowNull: false,
      },

      continent: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      capital: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      subregion: {
        type: DataTypes.STRING,
      },

      area: {
        type: DataTypes.INTEGER,
      },

      population: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
