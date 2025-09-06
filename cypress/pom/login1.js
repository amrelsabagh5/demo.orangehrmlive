export class Login {
 
     visit() {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
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