const axios = require("axios");
const { Country, Activity } = require("../db");
const { Op } = require("sequelize");

const saveApiDataDB = async () => {
  const AllApiInfo = await axios.get("http://localhost:5000/countries");
  const filterApi = AllApiInfo.data.map((element) => {
    return {
      id: element.cca3,
      name: element.name.common,
      flag: element.flags.svg,
      continent: element.continents,
      capital: element.capital,
      subregion: element.subregion,
      area: element.area,
      population: element.population,
    };
  });

  const modelData = [];

  for (const element of filterApi) {
    const [created] = await Country.findOrCreate({
      where: { id: element.id },
      defaults: element,
    });
    modelData.push(created.toJSON());
  }
  return modelData;
};

//!-------------------------------------------------------------------------------------------------//

const findCountryById = async (id) => {
  const detail = await Country.findByPk(id, {
    include: {
      model: Activity,
      attributes: ["name", "difficulty", "duration", "season"],
      through: {
        attributes: [],
      },
    },
  });
  
  return detail;
};

//!-------------------------------------------------------------------------------------------------//

const findCountryByName = async (name) => {
  const countryFound = await Country.findAll({
    where: {
      name: { [Op.iLike]: `%${name}%` },
    },
  });

  if (!countryFound[0]) throw Error(`The country ${name} doesn't exist`);

  return countryFound;
};

module.exports = { saveApiDataDB, findCountryById, findCountryByName };
