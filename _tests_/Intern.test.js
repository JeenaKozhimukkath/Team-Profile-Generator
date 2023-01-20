const Intern = require("../lib/Intern");

describe("Can instantiate Intern instance to get/set parameters", () => {
  it("can instantiate Intern Instance", () => {
    const e = new Intern();
    expect(typeof(e)).toBe("object");
  });
  it("can set school for intern", () => {
    const school = "Mary Hoppkins";
    const e = new Intern("Tom", 1, "tom@test.com", school);
    expect(e.school).toBe(school);
  });
  it("can get school for intern", () => {
    const school = "Mary Hoppkins";
    const e = new Intern("Tom", 1, "tom@test.com", school);
    expect(e.getSchool()).toBe(school);
  });
  it("can get role of employee", () => {
    const e = new Intern("Tom", 1, "tom@test.com", "Mary Hoppkins");
    expect(e.getRole()).toBe("Intern");
  });
});