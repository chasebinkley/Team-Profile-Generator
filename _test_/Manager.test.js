const Manager = require("../lib/Manager");

test("Can create an office number.", () => {
    const testOfficeNumber = 1;
    const employeeInstance = new Manager("Gerald", 1, "Mcdouche@yahoo.com", testOfficeNumber);
    expect(employeeInstance.officeNumber).toBe(testOfficeNumber);
});

test("Testing officeNumber will return office number.", () => {
    const testOfficeNumber = 1;
    const employeeInstance = new Manager("Gerald", 1, "Mcdouche@yahoo.com", testOfficeNumber);
    expect(employeeInstance.getOfficeNumber()).toBe(testOfficeNumber);
});

test("Testing role.", () => {
    const returnValue = "Manager";
    const employeeInstance = new Manager("Gerald", 1, "Mcdouche@yahoo.com", 1);
    expect(employeeInstance.getRole()).toBe(returnValue);
});