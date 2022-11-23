const Employee = require('../lib/employee');

describe('employee', () => {
    it('test if we can get the employee name', () => {
        const value = 'Gavs Garcia';
        const emp = new Employee(value, '98252', 'ggarcia@ITcorpmail.com');
        expect(emp.getName()).toBe(value);
    });

    it('test if we can get the employee ID', () => {
        const value = '98252';
        const emp = new Employee('Gavs Garcia', value, 'ggarcia@ITcorpmail.com');
        expect(emp.getID()).toBe(value);
    });

    it('test if we can get the employee email', () => {
        const value = 'ggarcia@ITcorpmail.com';
        const emp = new Employee('Gavs Garcia', '98252', value);
        expect(emp.getEmail()).toBe(value);
    });

    it('test if we can get the employee role', () => {
        const value = 'Employee';
        const emp = new Employee('Gavs Garcia', '98252', 'ggarcia@ITcorpmail.com');
        expect(emp.getRole()).toBe(value);
    });
});