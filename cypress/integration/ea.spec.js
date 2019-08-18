/// <reference types="Cypress" />

describe("Grupa", () => {
    beforeEach('Visti site', () => {
        cy.visit('http://www.executeautomation.com/site');
    });

    it("Implicity and explicity waiting", () => { 
        // cy.get('[aria-label="jump to slide 2"]', { timeout: 60 * 1000 }).should('have.class', 'ls-nav-active');
        cy.get('[aria-label="jump to slide 2"]', { timeout: 60 * 1000 }).should($x => {
            expect($x).to.have.class('ls-nav-active');
        });
    });

    it("Implicity and explicity waiting with hook", () => { 
        // cy.get('[aria-label="jump to slide 2"]', { timeout: 60 * 1000 }).should('have.class', 'ls-nav-active');
        cy.get('[aria-label="jump to slide 2"]', { timeout: 60 * 1000 }).should($x => {
            expect($x).to.have.class('ls-nav-active');
        });
    });

});
