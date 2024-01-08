const { Activity, conn } = require("../../src/db.js");

describe("Activity Model", () => {
  beforeAll(async () => {
    await conn.sync({ force: true });
  });

  // beforeEach(async () => {
  //     await conn.close();
  //     await conn.sync({ force: true });
  // });

  it("should not create the Ability if the body is empty", async () => {
    expect.assertions(1);
    try {
      await Activity.create({});
    } catch (error) {
      expect(error.message).toBeDefined();
    }
  });

  it("should not create the Ability if the name already exists", async () => {
    expect.assertions(1);
    const act = {
      name: "Sky2",
      difficulty: 2,
      duration: 2,
      season: "Winter",
      countries: ["ARG"],
    };
    try {
      await Activity.create(act);
      await Activity.create(act);
    } catch (error) {
      expect(error.message).toBeDefined();
    }
  });

  afterAll(async () => {
    // await conn.sync({ force: true });
    conn.close();
  });
});
