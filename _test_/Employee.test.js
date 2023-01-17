const Employee = require("../lib/Employee");

test("Employee object test", function () {
  const testEmployee = new Employee("Frank", 121, "frank@aol.com");
  expect(typeof testEmployee).toBe("object");
});

test("Employee attribute name", function () {
  const testEmployee = new Employee("Frank", 121, "frank@aol.com");
  expect(testEmployee.name).toBe("Frank");
});

test("Employee attribute id", function () {
  const testEmployee = new Employee("Frank", 121, "frank@aol.com");
  expect(testEmployee.id).toBe(121);
});

test("Employee email", function () {
  const testEmployee = new Employee("Frank", 121, "frank@aol.com");
  expect(testEmployee.email).toBe("frank@aol.com");
});

test("Employee Get name", function () {
  const testEmployee = new Employee("Frank", 121, "frank@aol.com");
  expect(testEmployee.getName()).toBe("Frank");
});

test("Employee getId", function () {
  const testEmployee = new Employee("Frank", 121, "frank@aol.com");
  expect(testEmployee.getId()).toBe(121);
});

test("Employee Get email", function () {
  const testEmployee = new Employee("Frank", 121, "frank@aol.com");
  expect(testEmployee.getEmail()).toBe("frank@aol.com");
});

test("Employee Get role", function () {
  const testEmployee = new Employee("Frank", 121, "frank@aol.com");
  expect(testEmployee.getRole()).toBe("Employee");
});