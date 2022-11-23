const Employee = require('./employee');

class Productowner extends Employee {
    constructor(name, employeeID, email, gitHub) {
        super(name, employeeID, email);
        this.gitHub = gitHub;
    }

    getGithub() {
        return this.gitHub;
    }

    getRole() {
        return "ProductOwner";
    }
}

module.exports = Productowner;