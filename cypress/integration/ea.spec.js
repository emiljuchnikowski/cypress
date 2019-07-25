/// <reference types="Cypress" />

describe("Grupa", () => {

    it("Test", () => {

        cy.visit('http://eaapp.somee.com/');

        cy.contains('Login').click();

        cy.url().should("include", "/Account/Login");

        cy.get('#UserName').type('admin');
        cy.get('#Password').type('password');

        cy.get('.btn').click();
    });

});