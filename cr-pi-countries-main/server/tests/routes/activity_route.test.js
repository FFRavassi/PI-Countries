const request = require("supertest");
const app = require("../../src/server.js");
const { Activity, conn } = require("../../src/db.js");

const activity1 = {
  name: "Ski",
  difficulty: 2,
  duration: 2,
  season: ["Winter", "Spring"],
  countries: ["ARG", "ITA"],
};

const activity2 = {
  name: "Trekking",
  difficulty: 2,
  duration: 3,
  season: ["Summer", "Spring"],
  countries: ["JPN", "KEN"],
};

const activity3 = {
  name: "Polo",
  difficulty: 5,
  duration: 2,
  season: ["Autum", "Spring"],
  countries: ["ARG", "SMR"],
};

const activity4 = {
  name: "Surfing",
  difficulty: 2,
  duration: 3,
  season: ["Summer"],
  countries: ["USA"],
};

describe("Activity Routes", () => {
  beforeAll(async () => {
    try {
      await conn.sync({ force: true });
    } catch (error) {
      console.error(error);
    }
  });

  // beforeEach(async () => {
  //     await conn.close();
  //     await conn.sync({ force: true });
  // })
  describe("GET /activities", () => {
    it("should return empty array if the database is empty", async () => {
      const res = await request(app).get("/activities/");
      expect(res.statusCode).toBe(200);
      expect(res.body.length).toBe(0);
      expect(Array.isArray(res.body)).toBeTruthy();
    });

    it("should return all activities if the database isn't empty", () => {
      Promise.all([
        Activity.create(activity1),
        Activity.create(activity2),
        Activity.create(activity3),
      ]).then(async (activities) => {
        const res = await request(app).get("/activities/");
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBe(3);
        expect(Array.isArray(res.body)).toBeTruthy();
        expect(activities[0].name).toBe("Ski");
      });
    });
  });

  describe("POST /activities", () => {
    it("should not create the activity if the body is empty", async () => {
      let res;
      try {
        res = await request(app).post("/activities/").send({});
      } catch (error) {
        expect(res.statusCode).toBe(400);
      }
    });

    it("should create the activity if the body is correct", async () => {
      try {
        const res = await request(app)
          .post("/activities/")
          .send({
            name: "Surfing",
            difficulty: 2,
            duration: 3,
            season: ["Summer"],
            countries: ["USA"],
          });
        expect(res.statusCode).toBe(201);
        expect(res.body.name).toBe("Surfing");
      } catch (error) {
        expect(res.statusCode).toBe(400);
      }
    });
  });

  afterAll(async () => {
    // await conn.sync({ force: true });
    conn.close();
  });
});
