const Programmer = require("../lib/Programmer");

test("Can create a github.", () => {
    const testGithub = "Gavin";
    const employeeInstance = new Programmer("Gavin", 2, "IDGAF@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "GavinGetsIt";
    const employeeInstance = new Programmer("Gavin", 2, "IDGAF@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Programmer";
    const employeeInstance = new Programmer("Gavin", 2, "IDGAF@gmail.com", "GavinGetsIt");
    expect(employeeInstance.getRole()).toBe(returnValue);
});