const Employee = require('./employee');

class Director extends Employee {
    constructor(name, employeeID, email, officeLocation) {
        super(name, employeeID, email);
        this.officeLocation = officeLocation;
    }

    getOffice() {
        return this.officeLocation;
    }

    getRole() {
        return "Director";
    }
}

module.exports = Director;