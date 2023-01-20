const Engineer = require("../lib/Engineer");

describe("Can instatiate Engineer instance to set/get parameter", () => {
  it("can instatiate Engineer Instance", () => {
    const e = new Engineer();
    expect(typeof(e)).toBe("object");
  });
  it("can set engineer's github", () => {
    const github = "testHub";
    const e = new Engineer("Tom", 1, "tom@test.com", github);
    expect(e.github).toBe(github);
  });
  it("can get engineer's github", () => {
    const github = "testHub";
    const e = new Engineer("Tom", 1, "tom@test.com", github);
    expect(e.getGithub()).toBe(github);
  });
  it("can get role of the employee", () => {
    const e = new Engineer("Tom", 1, "tom@test.com", "Engineer");
    expect(e.getRole()).toBe("Engineer");
  });
});