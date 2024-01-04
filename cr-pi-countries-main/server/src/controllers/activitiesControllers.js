const { Activity } = require("../db");

const createActInDB = async ({
  name,
  difficulty,
  duration,
  season,
  countries,
}) => {
  if (!name || !difficulty || !season)
    throw Error("Please complete the required fields");

  const [activity, created] = await Activity.findOrCreate({
    where: { name: name },
    defaults: {
      name: name,
      difficulty: difficulty,
      duration: duration,
      season: season,
      countries: countries,
    },
  });

  if (!created) throw Error("This activity was already created");

  activity.addCountries(countries);
  return activity;
};

//!-------------------------------------------------------------------------------------------------//

const activitiesFromDB = async () => {
  const activitiesFound = await Activity.findAll();

  if (!activitiesFound[0]) console.error("No activity has been created yet");

  return activitiesFound;
};

module.exports = { createActInDB, activitiesFromDB };
