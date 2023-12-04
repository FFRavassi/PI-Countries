const {
  saveApiDataDB,
  findCountryById,
  findCountryByName,
} = require("../controllers/countriesControllers");

const getCountries = async (req, res) => {
  try {
    let { name } = req.query;

    if (name) {
      const countriesByName = await findCountryByName(name);
      res.status(200).json(countriesByName);
    } else {
      const countries = await saveApiDataDB();
      res.status(200).json(countries);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCountriesdetail = async (req, res) => {
  try {
    const { id } = req.params;

    const countryDetail = await findCountryById(id);
    res.status(200).json(countryDetail);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getCountries,
  getCountriesdetail,
};
