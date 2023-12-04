const { Activity } = require("../db");

const createActInDB = async ({
  name,
  dificulty,
  duration,
  season,
  countries,
}) => {
  const newlyCreated = await Activity.create({
    name,
    dificulty,
    duration,
    season,
  });

  newlyCreated.addCountries(countries);

  return newlyCreated;
};

const activitiesFromDB = async () => {
  const activitiesFound = await Activity.findAll();
  return activitiesFound;
};

module.exports = { createActInDB, activitiesFromDB };
