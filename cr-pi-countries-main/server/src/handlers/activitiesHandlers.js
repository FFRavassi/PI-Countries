const {
  createActInDB,
  activitiesFromDB,
} = require("../controllers/activitiesControllers");

const createActivity = async (req, res) => {
  try {
    const { name, difficulty, duration, season, countries } = req.body;

    const newActivity = await createActInDB({
      name,
      difficulty,
      duration,
      season,
      countries,
    });
    res.status(201).json(newActivity);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//!-------------------------------------------------------------------------------------------------//

const getAllActivities = async (req, res) => {
  try {
    const activities = await activitiesFromDB();
    res.status(200).json(activities);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createActivity, getAllActivities };
