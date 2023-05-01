// @ts-ignore
describe('HomePage page', () => {
    it('should get HomePage title', () => {
        cy.visit('/');
        cy.get('h1').contains(/HOME PAGE/i);
    });

    it('should be contain list of cards', () => {
        cy.visit('/');
        cy.get('[data-cy="input-search"]').type('Rick')
        cy.get('[data-cy="input-search"]').type("{enter}")
    });
});