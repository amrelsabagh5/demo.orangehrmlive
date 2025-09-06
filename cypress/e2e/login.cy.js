import { Login } from "../pom/login1";

const login= new Login()

describe("auth login",function(){

    it('make sure when enter invalid data will not loging', () => {
        login.visit()
    login.username('amr')
    login.pass('ahmed')
    login.click_login()

    cy.contains('Login').should('be.visible');
  })

it('make sure that when enter valid user and inavlid pass will not login',function(){

login.visit()
login.username("Admin")
login.pass('12')
login.click_login()

cy.contains('Login').should('be.visible')
})

it('mke sure that when enter data correct ',function(){

login.visit();
login.username('Admin')
login.pass('admin123')
login.click_login()
cy.contains("Dashboard").should('be.visible')

})

it.only('make sure that when login the user can logout and login again whitout any note ',function(){
login.visit();
login.username('Admin')
login.pass('admin123')
login.click_login()
cy.wait(2000)

cy.get('.oxd-userdropdown-tab').click()
cy.wait(2000)

cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
cy.wait(2000)
login.username('Admin')
login.pass('admin123')
login.click_login()


})
})
