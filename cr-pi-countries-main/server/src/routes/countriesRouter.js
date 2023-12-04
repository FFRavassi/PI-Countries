const { Router } = require("express");
const {
  getCountries,
  getCountriesdetail,
} = require("../handlers/countriesHandlers");

const countriesRouter = Router();

countriesRouter.get("/", getCountries);

countriesRouter.get("/:id", getCountriesdetail);

module.exports = countriesRouter;