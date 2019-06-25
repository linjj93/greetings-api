const request = require("supertest");
const app = require("./index");

describe("testing", () => {
  it("GET / should return greeting text", async () => {
    const response = await request(app).get("/");
    expect(response.text).toEqual("Hello World! This app is live!!!");
  });
});
