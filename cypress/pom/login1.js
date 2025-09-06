export class Login {
 
     visit() {
    cy.visit('');
  }
    username(username){

        cy.get('input[name="username"]').type(username)
    }
pass(pass){

    cy.get('input[name="password"]').type(pass)

}

click_login(){


    cy.get('button[type="submit"]').click()
}
}
