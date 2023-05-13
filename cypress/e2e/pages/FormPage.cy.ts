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

    it('should get formPage validation deliveryDate is empty', () => {
        cy.visit('/form');
        cy.get('#firstName').type('Test');
        cy.get('#lastName').type('Test');
        cy.get('#zipCode').type('Test');
        cy.get('#deliveryDate').type('2023-05-01')
        cy.get('[data-cy="button--submit"]').click();
        cy.get('[data-cy="formError"]').contains(/birthDay is required/i);
    });

    it('should get formPage validation birthDay is empty', () => {
        cy.visit('/form');
        cy.get('#firstName').type('Test');
        cy.get('#lastName').type('Test');
        cy.get('#zipCode').type('Test');
        cy.get('#deliveryDate').type('2023-05-01')
        cy.get('#birthDay').type('2023-05-01')
        cy.get('[data-cy="button--submit"]').click();
        cy.get('[data-cy="formError"]').contains(/isAgreedWithPersonalData is required/i);
    });

    it('should get formPage validation isReceivePromo is empty', () => {
        cy.visit('/form');
        cy.get('#firstName').type('Test');
        cy.get('#lastName').type('Test');
        cy.get('#zipCode').type('Test');
        cy.get('#deliveryDate').type('2023-05-01')
        cy.get('#birthDay').type('2023-05-01')
        cy.get('#isAgreedWithPersonalData').check();
        cy.get('[data-cy="button--submit"]').click();
        cy.get('[data-cy="formError"]').contains(/isReceivePromo is required/i);
    });

    it('should get formPage validation selectedOptionGender is empty', () => {
        cy.visit('/form');
        cy.get('#firstName').type('Test');
        cy.get('#lastName').type('Test');
        cy.get('#zipCode').type('Test');
        cy.get('#deliveryDate').type('2023-05-01')
        cy.get('#birthDay').type('2023-05-01')
        cy.get('#isAgreedWithPersonalData').check();
        cy.get('#isReceivePromo').check();
        cy.get('[data-cy="button--submit"]').click();
        cy.get('[data-cy="formError"]').contains(/selectedOptionGender is required/i);
    });

    it('should get formPage validation selectedOptionCountry is empty', () => {
        cy.visit('/form');
        cy.get('#firstName').type('Test');
        cy.get('#lastName').type('Test');
        cy.get('#zipCode').type('Test');
        cy.get('#deliveryDate').type('2023-05-01')
        cy.get('#birthDay').type('2023-05-01')
        cy.get('#isAgreedWithPersonalData').check();
        cy.get('#isReceivePromo').check();
        cy.get('#selectedOptionGender').select('Male');
        cy.get('[data-cy="button--submit"]').click();
        cy.get('[data-cy="formError"]').contains(/selectedOptionCountry is required/i);
    });

    it('should get formPage validation selectedOptionState is empty', () => {
        cy.visit('/form');
        cy.get('#firstName').type('Test');
        cy.get('#lastName').type('Test');
        cy.get('#zipCode').type('Test');
        cy.get('#deliveryDate').type('2023-05-01')
        cy.get('#birthDay').type('2023-05-01')
        cy.get('#isAgreedWithPersonalData').check();
        cy.get('#isReceivePromo').check();
        cy.get('#selectedOptionGender').select('Male');
        cy.get('#selectedOptionCountry').select('option1');
        cy.get('[data-cy="button--submit"]').click();
        cy.get('[data-cy="formError"]').contains(/selectedOptionState is required/i);
    });

    it('should get formPage validation file is empty', () => {
        cy.visit('/form');
        cy.get('#firstName').type('Test');
        cy.get('#lastName').type('Test');
        cy.get('#zipCode').type('Test');
        cy.get('#deliveryDate').type('2023-05-01')
        cy.get('#birthDay').type('2023-05-01')
        cy.get('#isAgreedWithPersonalData').check();
        cy.get('#isReceivePromo').check();
        cy.get('#selectedOptionGender').select('Male');
        cy.get('#selectedOptionCountry').select('option1');
        cy.get('#selectedOptionState').select('option3');
        cy.get('[data-cy="button--submit"]').click();
        cy.get('[data-cy="formError"]').contains(/The file is required/i);
    });

    it('should get formPage added successfully', () => {
        cy.visit('/form');
        cy.get('#firstName').type('Test');
        cy.get('#lastName').type('Test');
        cy.get('#zipCode').type('Test');
        cy.get('#deliveryDate').type('2023-05-01')
        cy.get('#birthDay').type('2023-05-01')
        cy.get('#isAgreedWithPersonalData').check();
        cy.get('#isReceivePromo').check();
        cy.get('#selectedOptionGender').select('Male');
        cy.get('#selectedOptionCountry').select('option1');
        cy.get('#selectedOptionState').select('option3');
        cy.get('input[type=file]').selectFile({
            contents: Cypress.Buffer.from('file contents'),
            fileName: 'file.png',
            lastModified: Date.now(),
        })
        cy.get('[data-cy="button--submit"]').click();
        cy.get('[data-cy="formList"]').should('be.visible');
    });
});