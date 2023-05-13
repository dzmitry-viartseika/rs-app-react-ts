// @ts-ignore
describe('NotFound page', () => {
    it('should get 404 page title', () => {
        cy.visit('/wertey');
        cy.get('h1').contains(/404 PAGE/i);
    });
});