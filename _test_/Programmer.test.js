const Programmer = require("../lib/Programmer");

test("Programmer object test", function () {
  const testProgrammer = new Programmer(
    "Gavin",
    121,
    "gavin@gmail.com",
    "testGithub"
  );
  expect(typeof testProgrammer).toBe("object");
});

test("Programmer attribute name", function () {
  const testProgrammer = new Programmer(
    "Gavin",
    121,
    "gavin@gmail.com",
    "testGithub"
  );
  expect(testProgrammer.name).toBe("Gavin");
});

test("Programmer attribute id", function () {
  const testProgrammer = new Programmer(
    "Gavin",
    121,
    "gavin@gmail.com",
    "testGithub"
  );
  expect(testProgrammer.id).toBe(121);
});

test("Programmer email", function () {
  const testProgrammer = new Programmer(
    "Gavin",
    121,
    "gavin@gmail.com",
    "testGithub"
  );
  expect(testProgrammer.email).toBe("gavin@gmail.com");
});

test("Programmer Get name", function () {
  const testProgrammer = new Programmer(
    "Gavin",
    121,
    "gavin@gmail.com",
    "testGithub"
  );
  expect(testProgrammer.getName()).toBe("Gavin");
});

test("Programmer getId", function () {
  const testProgrammer = new Programmer(
    "Gavin",
    121,
    "gavin@gmail.com",
    "testGithub"
  );
  expect(testProgrammer.getId()).toBe(121);
});

test("Programmer Get email", function () {
  const testProgrammer = new Programmer(
    "Gavin",
    121,
    "gavin@gmail.com",
    "testGithub"
  );
  expect(testProgrammer.getEmail()).toBe("gavin@gmail.com");
});

test("Programmer Get role", function () {
  const testProgrammer = new Programmer(
    "Gavin",
    121,
    "gavin@gmail.com",
    "testGithub"
  );
  expect(testProgrammer.getRole()).toBe("Programmer");
});

test("Programmer Get GitHub", function () {
  const testProgrammer = new Programmer(
    "Gavin",
    121,
    "gavin@gmail.com",
    "testGithub"
  );
  expect(testProgrammer.getGithub()).toBe("testGithub");
});