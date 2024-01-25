export class Login {
    navigate() {
      cy.visit("https://www.edu.goit.global/account/login");
    }

    enterUserData(useremail, password) {
        cy.get('#user_email').type(useremail);
        cy.get('[name="password"]').type(password);
    }

    clickLog() {
        cy.get('button[type="submit"]').click();   
    }

  }