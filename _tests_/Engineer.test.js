const Engineer = require('../lib/engineer');

describe('engineer', () => {
    it('test if we can get the Engineer role', () => {
        const value = 'Engineer';
        const emp = new Engineer('Gavs Garcia', '98252', 'ggarcia@ITcorpmail.com', 'wdelgad');
        expect(emp.getRole()).toBe(value);
    });

    it('test if we can get the engineer gitHub user', () => {
        const value = 'wdelgad';
        const emp = new Engineer('Gavs Garcia', '98252', 'ggarcia@ITcorpmail.com', value);
        expect(emp.getGithub()).toBe(value);
    });
});