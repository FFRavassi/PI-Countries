const { Activity } = require("../db");

const createActInDB = async ({
  name,
  dificulty,
  duration,
  season,
  countries,
}) => {
  const [activity, created] = await Activity.findOrCreate({
    where: { name: name },
    defaults: {
      name: name,
      dificulty: dificulty,
      duration: duration,
      season: season,
    },
  });

  if (!created) throw Error("This activity was already created");

  activity.addCountries(countries);
  return activity;
};

//!-------------------------------------------------------------------------------------------------//

const activitiesFromDB = async () => {
  const activitiesFound = await Activity.findAll();
  return activitiesFound;
};

module.exports = { createActInDB, activitiesFromDB };
