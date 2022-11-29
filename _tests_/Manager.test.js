const Manager = require('../lib/manager');

describe('Manager', () => {
    it('test manager role', () => {
        const value = 'Manager';
        const emp = new Manager('Gavs Garcia', '98252', 'ggarcia@ITcorpmail.com');
        expect(emp.getRole()).toBe(value);
    });

    it('test Manager\'s school', () => {
        const value = 'ITLP';
        const emp = new Manager('Gavs Garcia', '98252', 'ggarcia@ITcorpmail.com', value);
        expect(emp.getSchool()).toBe(value);
    });
});