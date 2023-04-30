// @ts-ignore
describe('AboutPage page', () => {
    it('should get about page title', () => {
        cy.visit('/about');
        cy.get('h1').contains(/About Page/i);
    });
});