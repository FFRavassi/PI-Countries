const { Country, conn } = require("../../src/db.js");

describe("Country Model", () => {
  beforeAll(async () => {
    await conn.sync({ force: true });
  });

  // beforeEach(async () => {
  //     await conn.close();
  //     await conn.sync({ force: true });
  // });

  it("should not create the Country if the body is empty", async () => {
    expect.assertions(1);
    try {
      await Country.create({});
    } catch (error) {
      expect(error.message).toBeDefined();
    }
  });

  it("should not create the Country if the ID already exists", async () => {
    expect.assertions(1);
    const country = {
      id: "AAB",
      name: "NewArgentina",
      capital: "Buenos Aires",
      flag: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg",
      continent: "America",
      subregion: "South America",
      area: "9999",
      population: "1000000",
    };
    try {
      await Country.create(country);
      await Country.create(country);
    } catch (error) {
      expect(error.message).toBeDefined();
    }
  });

  it("should get all Countries from database", async () => {
    const country = {
      id: "ARG",
      name: "Argentina",
      flag: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg",
      continent: ["South America"],
      capital: ["Buenos Aires"],
      subregion: "South America",
      area: 2780400,
      population: 45376763,
    };

    const country2 = {
      id: "JPN",
      name: "Japan",
      flag: "https://flagcdn.com/jp.svg",
      continent: ["Asia"],
      capital: ["Tokio"],
      subregion: "Eastern Asia",
      area: 377930,
      population: 125836021,
    };

    const country3 = {
      id: "KEN",
      name: "Kenya",
      flag: "https://flagcdn.com/ke.svg",
      continent: ["Africa"],
      capital: ["Nairobi"],
      subregion: "Eastern Africa",
      area: 580367,
      population: 53771300,
    };

    try {
      await Country.create(country);
      await Country.create(country2);
      await Country.create(country3);
    } catch (error) {
      console.error(error);
    }

    const countries = await Country.findAll();
    expect(countries.length).toEqual(3);
  });

  it("should not create the Country if the id is wrong", async () => {
    expect.assertions(1);
    const country = {
      id: "AAAA",
      name: "NewArgentina",
      capital: "Buenos Aires",
      flag: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg",
      continent: "America",
    };
    try {
      await Country.create(country);
    } catch (error) {
      expect(error.message).toBeDefined();
    }
  });

  it("should not create the Country if the name, capital, flag or continent are empty", async () => {
    expect.assertions(3);
    const country = {
      id: "AAG",
      capital: "Buenos Aires",
      flag: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg",
      continent: "America",
    };
    const country2 = {
      id: "AAH",
      name: "newArgentina",
      capital: "Buenos Aires",
      flag: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg",
    };
    const country3 = {
      id: "AAI",
      name: "NewArgentina",
      flag: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg",
      continent: "America",
    };
    try {
      await Country.create(country);
    } catch (error) {
      expect(error.message).toBeDefined();
    }

    try {
      await Country.create(country2);
    } catch (error) {
      expect(error.message).toBeDefined();
    }

    try {
      await Country.create(country3);
    } catch (error) {
      expect(error.message).toBeDefined();
    }
  });

  afterAll(async () => {
    // await conn.sync({ force: true });
    conn.close();
  });
});
