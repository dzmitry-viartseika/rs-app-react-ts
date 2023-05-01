// @ts-ignore
describe('HomePage page', () => {
    it('should get HomePage title', () => {
        cy.visit('/');
        cy.get('h1').contains(/HOME PAGE/i);
    });

    it('should be empty list of cards', () => {
        cy.visit('/');
        cy.get('[data-cy="input-search"]').type('test')
        cy.get('[data-cy="input-search"]').type("{enter}")
        cy.get('[data-cy="card-list"]').contains(/CardList is empty/i);
    });
});