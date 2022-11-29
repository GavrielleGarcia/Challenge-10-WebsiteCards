const Director = require('../lib/director');

describe('director', () => {
    it('test if we can get the Director role', () => {
        const value = 'Director';
        const emp = new Director('Gavs Garcia', '98252', 'ggarcia@ITcorpmail.com', '2727');
        expect(emp.getRole()).toBe(value);
    });

    it('test if we can get the Director\'s office number', () => {
        const value = '2727';
        const emp = new Director('Gavs Garcia', '98252', 'ggarcia@ITcorpmail.com', value);
        expect(emp.getOffice()).toBe(value);
    });
});