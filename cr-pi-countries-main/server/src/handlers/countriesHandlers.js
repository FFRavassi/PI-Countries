const {
  saveApiDataDB,
  findCountryById,
  findCountryByName,
} = require("../controllers/countriesControllers");

const getCountries = async (req, res) => {
  try {
    const countries = await saveApiDataDB();
    res.status(200).json(countries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCountriesdetail = async (req, res) => {
  const { id } = req.params;
  try {
    const countryDetail = await findCountryById(id);
    res.status(200).json(countryDetail);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCountriesByName = async (req, res) => {
  const { name } = req.query;
  try {
    const countriesByName = await findCountryByName(name);
    res.status(200).json(countriesByName);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getCountries,
  getCountriesdetail,
  getCountriesByName,
};
