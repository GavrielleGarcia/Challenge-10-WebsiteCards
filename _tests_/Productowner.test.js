const ProductOwner = require('../lib/productowner');

describe('ProductOwner', () => {
    it('test Product Owner role', () => {
        const value = 'ProductOwner';
        const emp = new ProductOwner('Gavs Garcia', '98252', 'ggarcia@ITcorpmail.com', 'dlozanod');
        expect(emp.getRole()).toBe(value);
    });

    it('test if we can get the Product Owner gitHub user', () => {
        const value = 'dlozanod';
        const emp = new ProductOwner('Gavs Garcia', '98252', 'ggarcia@ITcorpmail.com', value);
        expect(emp.getGithub()).toBe(value);
    });
});