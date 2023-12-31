const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  sequelize.define(
    "Activity",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      difficulty: {
        type: DataTypes.INTEGER,
        validate: {
          min: 1,
          max: 5,
        },
        allowNull: false,
      },

      duration: {
        type: DataTypes.DECIMAL(3, 1),
        defaultValue: 1,
        validate: {
          min: 0.5,
          max: 12,
        },
      },

      season: {
        type: DataTypes.ARRAY(
          DataTypes.ENUM("Summer", "Autum", "Winter", "Spring")
        ),
        allowNull: false,
      },

      countries: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
