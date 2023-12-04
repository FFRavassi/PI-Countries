const { Router } = require("express");
const {
  createActivity,
  getAllActivities,
} = require("../handlers/activitiesHandlers");

const activitiesRouter = Router();

activitiesRouter.post("/", createActivity);

activitiesRouter.get("/", getAllActivities);

module.exports = activitiesRouter;
