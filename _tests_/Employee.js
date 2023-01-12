const Employee = require("../lib/Employee");

describe("Can instantiate Employee and set/get all parameters", () => {
  it("can instantiate Employeee Instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
  });
  it("can set id of employee", () => {
    const id = "1";
    const e = new Employee("Tom", id);
    expect(e.id).toBe(id);
  });
  it("can set name of employee", () => {
    const name = "Tom";
    const e = new Employee(name);
    expect(e.name).toBe(name);
  });
  it("can set email of employee", () => {
    const email = "Tom@test.com";
    const e = new Employee("Tom", 1, email);
    expect(e.email).toBe(email);
  });
  it("can get Id of employee", () => {
    const id = 2;
    const e = new Employee("Tom", id);
    expect(e.getId()).toBe(id);
  });
  it("can get name of employee", () => {
    const name = "Tom";
    const e = new Employee(name);
    expect(e.getName()).toBe(name);
  });
  
  it("can get Email of employee", () => {
    const Email = "Tom@test.com";
    const e = new Employee("Tom", 1, Email);
    expect(e.getEmail()).toBe(Email);
  });
  it("can get role of employee", () => {
    const e = new Employee("Tom", 1, "Tom@test.com");
    expect(e.getRole()).toBe("Employee");
  });
});