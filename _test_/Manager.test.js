const Manager = require("../lib/Manager");

test("Manager object test", function () {
  const testManager = new Manager(
    "Gerald",
    121,
    "Gerald@yahoo.com",
    "OFFNUM42069"
  );
  expect(typeof testManager).toBe("object");
});

test("Manager attribute name", function () {
  const testManager = new Manager(
    "Gerald",
    121,
    "Gerald@yahoo.com",
    "OFFNUM42069"
  );
  expect(testManager.name).toBe("Gerald");
});

test("Manager attribute id", function () {
  const testManager = new Manager(
    "Gerald",
    121,
    "Gerald@yahoo.com",
    "OFFNUM42069"
  );
  expect(testManager.id).toBe(121);
});

test("Manager email", function () {
  const testManager = new Manager(
    "Gerald",
    121,
    "Gerald@yahoo.com",
    "OFFNUM42069"
  );
  expect(testManager.email).toBe("Gerald@yahoo.com");
});

test("Manager Get name", function () {
  const testManager = new Manager(
    "Gerald",
    121,
    "Gerald@yahoo.com",
    "OFFNUM42069"
  );
  expect(testManager.getName()).toBe("Gerald");
});

test("Manager getId", function () {
  const testManager = new Manager(
    "Gerald",
    121,
    "Gerald@yahoo.com",
    "OFFNUM42069"
  );
  expect(testManager.getId()).toBe(121);
});

test("Manager Get email", function () {
  const testManager = new Manager(
    "Gerald",
    121,
    "Gerald@yahoo.com",
    "OFFNUM42069"
  );
  expect(testManager.getEmail()).toBe("Gerald@yahoo.com");
});

test("Manager Get role", function () {
  const testManager = new Manager(
    "Gerald",
    121,
    "Gerald@yahoo.com",
    "OFFNUM42069"
  );
  expect(testManager.getRole()).toBe("Manager");
});

test("Manager Get GitHub", function () {
  const testManager = new Manager(
    "Gerald",
    121,
    "Gerald@yahoo.com",
    "OFFNUM42069"
  );
  expect(testManager.getOfficeNumber()).toBe("OFFNUM42069");
});