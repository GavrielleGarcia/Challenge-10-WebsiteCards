const Intern = require('../lib/manager');

describe('Manager', () => {
    it('test if we get the manager role', () => {
        const value = 'Manager';
        const emp = new Manager('Gavs Garcia', '98252', 'ggarcia@ITcorpmail.com');
        expect(emp.getRole()).toBe(value);
    });

    it('test if we can get the Manager\'s school', () => {
        const value = 'ITLP';
        const emp = new Manager('Gavs Garcia', '98252', 'ggarcia@ITcorpmail.com', value);
        expect(emp.getSchool()).toBe(value);
    });
});