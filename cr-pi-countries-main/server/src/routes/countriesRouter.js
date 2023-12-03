const { Router } = require("express");
const {
  getCountries,
  getCountriesdetail,
  /* getCountriesByName, */
} = require("../handlers/countriesHandlers");

const countriesRouter = Router();

countriesRouter.get("/", getCountries);

countriesRouter.get("/:id", getCountriesdetail);

/* countriesRouter.get("/", getCountriesByName); */

module.exports = countriesRouter;
