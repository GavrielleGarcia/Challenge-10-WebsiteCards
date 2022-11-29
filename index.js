const fs = require('fs');
const inquirer = require('inquirer');
const director = require('./lib/director');
const engineer = require('./lib/engineer');
const Manager= require('./lib/manager');
const htmlGenerator = require('./src/htmlGenerator');

const team = [];

const director = [
    {
        type: 'input',
        message: 'Director\'s Name: ',
        name: 'name',
        validate: name => {
            if (!name){
                return 'A name must me writen';
            } else {
                return true;
            }            
        }
    },
    {
        type: 'input',
        message: 'Employee ID: ',
        name: 'employeeId',
        validate: employeeId => {
            if (isNaN(employeeId)){
                return 'Please, enter a valid employee ID (numeric)';
            } else {
                return true;
            }            
        }
    },
    {
        type: 'input',
        message: 'Director\'s email: ',
        name: 'email',
        validate: function(email){
                validate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
                if (!validate) {
                    return 'Please, enter a valid email';
                } else {
                    return true;
                }
            }            
    },
    {
        type: 'input',
        message: 'Director\'s office number: ',
        name: 'office',
        validate: office => {
            if (isNaN(office)){
                return 'Please, enter a valid office number (numeric)';
            } else {
                return true;
            }            
        }
    }
];

const engineer = [
    {
        type: 'input',
        message: 'Engineer\'s Name: ',
        name: 'name',
        validate: name => {
            if (!name){
                return 'Write the engineer\'s name';
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: 'Employee ID:',
        name: 'employeeId',
        validate: employeeId => {
            if (isNaN(employeeId)){
                return 'Please, enter a valid employee ID (numeric)';
            } else {
                return true;
            }            
        }
    },
    {
        type: 'input',
        message: 'Engineer\'s email: ',
        name: 'email',
        validate: function(email){
            validate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
            if (!validate) {
                return 'Please, enter a valid email';
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: 'GitHub user name: ',
        name: 'gitHub',
        validate: gitHub => {
            if (!gitHub){
                return 'You should write a gitHub user name';
            } else {
                return true;
            }
        }
    }
];

const manager = [
    {
        type: 'input',
        message: 'Manager\'s name: ',
        name: 'name',
        validate: name => {
            if (!name){
                return 'You should write a manager\'s name';
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: 'Employee ID: ',
        name: 'employeeId',
        validate: employeeId => {
            if (isNaN(employeeId)){
                return 'Please, enter a valid employee ID (numeric)';
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: 'Manager\'s email: ',
        name: 'email',
        validate: function(email){
            validate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
            if (!validate) {
                return 'Please, enter a valid email';
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: 'Manager\'s school: ',
        name: 'school',
        validate: school => {
            if (!school){
                return 'You should write an school\'s name';
            } else {
                return true;
            }
        }
    }
];

// add an engineer
function addEngineer() {    
    inquirer.prompt(engineer)
    .then((data) => {
        const employee = new Engineer(data.name, data.employeeId, data.email, data.gitHub);
        team.push(employee);
        addMember();
    });

};


// add a Product Owner
function addProductOwner() {
    inquirer.prompt(productowner)
    .then((data) => {
        const employee = new addProductOwner(data.name, data.employeeId, data. email, data.school);
        team.push(employee);
        addMember();
    });

};


// add a Manager
function addManager() {
    inquirer.prompt(manager)
    .then((data) => {
        const employee = new Manager(data.name, data.employeeId, data. email, data.school);
        team.push(employee);
        addMember();
    });

};

// create the html file
function writeToFile(fileName, data) {
    fs.writeFile('./dist/' + fileName, data, (err) =>
    err? console.log(err) : console.log("Your team.html file was successfully created!"));
};

// generate the html
function createTeam() {
    let content = htmlGenerator(team);
    writeToFile('team.html', content);
};

// add an engineer, manager, product owner or complete the department
function addMember() {
    inquirer.prompt({
        type: 'list',
        message: 'Would you like to: ',        
        choices: ['add an Engineer', 'add a Manager, Product Owner', 'complete department'],
        name: 'options',
    })
    .then((UserChoice) => {
        switch(UserChoice.options) {
            case 'add an Engineer':
                addEngineer();              
                break;
            case 'add an ProductOwner':
                    addProductOwner();              
                    break;    
            case 'add a Manager':
                addManager();
                break;
            case 'finish':
                createTeam();
                break;
            default:
                break;
          }
    });    

};

// Director info
function init() {
    inquirer.prompt(director)
    .then((data) => {
        const employee = new Director(data.name, data.employeeId, data.email, data.office);
        team.push(employee);
        addMember();
    });     
};

  
init();