describe('EA App', () => {
    beforeEach(() => {
        cy.visit('http://eaapp.somee.com/');
        cy.fixture('eauser').as('user');
    });

    it("First", () => {
        login();
    });

    it("Use find", () => {

        login();

        cy.get('.navbar-collapse > :nth-child(1) > :nth-child(3) > a').click();

        cy.get('.table').find('tr').contains('Prashanth').parent().contains('Benefits').click();

        // UI aliases
        cy.get('.table').find('tr').as('rows');
        cy.get('@rows').then($row => {
            cy.wrap($row).click({ multiple: true });
        });
    });
});

function login() {
    // variables
    cy.contains('Login').then($link => {
        const linkText = $link.text();
        expect(linkText).is.eq('Login');
    }).click();

    // aliases
    // cy.get('#loginLink').then($link => {
    //     return $link.text();
    // }).as('linkText');
    cy.get('#loginLink').invoke('text').as('linkText');
    
    cy.get('@linkText').then(txt => {
        expect(txt).is.eql('Login');
    })

    cy.url().should("include", "/Account/Login");

    cy.get('@user').then(user => {
        cy.get('#UserName').type(user.userName);
        cy.get('#Password').type(user.password);
    });

    cy.get('.btn').click();
}