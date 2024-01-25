export class Logout {
    pageCheck(){
        cy.url().should('include','homepage');
    }

    clickBurger() {
        cy.get('button[data-element-type="burger-menu"]').click()
    }

    clickOut() {
        cy.get('.next-bve2vl').contains("Log out").click()
    }
}