/// <reference types="Cypress" />

describe("Grupa", () => {

    it("First", () => {
        login();
    });

    it("Use find", () => {

        login();        

        cy.get('.navbar-collapse > :nth-child(1) > :nth-child(3) > a').click();

        cy.get('.table').find('tr').contains('Prashanth').parent().contains('Benefits').click();
    });

});

function login() {
    cy.visit('http://eaapp.somee.com/');

        cy.contains('Login').click();

        cy.url().should("include", "/Account/Login");

        cy.get('#UserName').type('admin');
        cy.get('#Password').type('password');

        cy.get('.btn').click();
}