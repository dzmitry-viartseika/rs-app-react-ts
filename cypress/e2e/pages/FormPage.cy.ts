// @ts-ignore
describe('FormPage page', () => {
    it('should get formPage title', () => {
        cy.visit('/form');
        cy.get('h1').contains(/FORM PAGE/i);
    });

    it('should get formPage validation FirstName is empty', () => {
        cy.visit('/form');
        cy.get('[data-cy="button--submit"]').click();
        cy.get('[data-cy="formError"]').contains(/FirstName is required/i);
    });

    it('should get formPage validation LastName is empty', () => {
        cy.visit('/form');
        cy.get('#firstName').type('Test');
        cy.get('[data-cy="button--submit"]').click();
        cy.get('[data-cy="formError"]').contains(/LastName is required/i);
    });

    it('should get formPage validation ZipCode is empty', () => {
        cy.visit('/form');
        cy.get('#firstName').type('Test');
        cy.get('#lastName').type('Test');
        cy.get('[data-cy="button--submit"]').click();
        cy.get('[data-cy="formError"]').contains(/ZipCode is required/i);
    });

    it.skip('should get formPage validation deliveryDate is empty', () => {
        cy.visit('/form');
        cy.get('#firstName').type('Test');
        cy.get('#lastName').type('Test');
        cy.get('#zipCode').type('Test');
        cy.get('#deliveryDate').type('23-10-1990');
        cy.get('[data-cy="button--submit"]').click();
        cy.get('[data-cy="formError"]').contains(/birthDay is required/i);
        // cy.get('[data-cy="formError"]').contains(/birthDay is required/i);
        // cy.get('[data-cy="formError"]').contains(/isAgreedWithPersonalData is required/i);
        // cy.get('[data-cy="formError"]').contains(/isReceivePromo is required/i);
        // cy.get('[data-cy="formError"]').contains(/selectedOptionGender is required/i);
        // cy.get('[data-cy="formError"]').contains(/selectedOptionCountry is required/i);
        // cy.get('[data-cy="formError"]').contains(/selectedOptionState is required/i);
        // cy.get('[data-cy="formError"]').contains(/The file is required/i);
    });
});