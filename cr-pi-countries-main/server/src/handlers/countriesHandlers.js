const {
  saveApiDataDB,
  findCountryById,
  findCountryByName,
} = require("../controllers/countriesControllers");

const getCountries = async (req, res) => {
  try {
    const { name } = req.query;

    const response = name
      ? await findCountryByName(name)
      : await saveApiDataDB();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//!-------------------------------------------------------------------------------------------------//

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
