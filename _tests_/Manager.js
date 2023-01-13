const Manager = require("../lib/Manager");

describe("Can instantiate Manager instance to get/set parameter", () => {
  it("can instantiate Manager Instance", () => {
    const e = new Manager();
    expect(typeof(e)).toBe("object");
  });
  it("can set office Number for the Manager", () => {
    const officeNumber = "1112345678";
    const e = new Manager("Tom", 1, "tom@test.com", officeNumber);
    expect(e.officeNumber).toBe(officeNumber);
  });
  it("can get office Number for the Manager", () => {
    const officeNumber = "1112345678";
    const e = new Manager("Tom", 1, "tom@test.com", officeNumber);
    expect(e.getOfficeNumber()).toBe(officeNumber);
  });
  it("can get role of employee", () => {
    const e = new Manager("Tom", 1, "tom@test.com", "1112345678");
    expect(e.getRole()).toBe("Manager");
  });
});