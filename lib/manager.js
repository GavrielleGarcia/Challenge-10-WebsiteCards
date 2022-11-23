const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, employeeID, email, school) {
        super(name, employeeID, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;