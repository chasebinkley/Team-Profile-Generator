const Intern = require("../lib/Intern");

test("Intern object test", function () {
  const testIntern = new Intern("Joey", 121, "Joey@yahoo.com", "UCB");
  expect(typeof testIntern).toBe("object");
});

test("Intern attribute name", function () {
  const testIntern = new Intern("Joey", 121, "Joey@yahoo.com", "UCB");
  expect(testIntern.name).toBe("Joey");
});

test("Intern attribute id", function () {
  const testIntern = new Intern("Joey", 121, "Joey@yahoo.com", "UCB");
  expect(testIntern.id).toBe(121);
});

test("Intern email", function () {
  const testIntern = new Intern("Joey", 121, "Joey@yahoo.com", "UCB");
  expect(testIntern.email).toBe("Joey@yahoo.com");
});

test("Intern Get name", function () {
  const testIntern = new Intern("Joey", 121, "Joey@yahoo.com", "UCB");
  expect(testIntern.getName()).toBe("Joey");
});

test("Intern getId", function () {
  const testIntern = new Intern("Joey", 121, "Joey@yahoo.com", "UCB");
  expect(testIntern.getId()).toBe(121);
});

test("Intern Get email", function () {
  const testIntern = new Intern("Joey", 121, "Joey@yahoo.com", "UCB");
  expect(testIntern.getEmail()).toBe("Joey@yahoo.com");
});

test("Intern Get role", function () {
  const testIntern = new Intern("Joey", 121, "Joey@yahoo.com", "UCB");
  expect(testIntern.getRole()).toBe("Intern");
});

test("Intern Get GitHub", function () {
  const testIntern = new Intern("Joey", 121, "Joey@yahoo.com", "UCB");
  expect(testIntern.getSchoolName()).toBe("UCB");
});