///<reference types= "cypress"/>
import { Login } from "../pom/login1";


const Admin=new Login

describe("Auth Admin",function(){
before(function(){
    Admin.visit();
Admin.username('Admin')
Admin.pass('admin123')
Admin.click_login('')

})

it("verify that when searching by User name  will appear the same data ",function(){
    cy.wait(2000)
    cy.get(':nth-child(1) > .oxd-main-menu-item').click();
    cy.wait(2000)
cy.get(':nth-child(2) > .oxd-input').type('Admin')
cy.get('.oxd-form-actions > .oxd-button--secondary').click();
 cy.wait(2000)
cy.get('.oxd-table-card > .oxd-table-row') .invoke('text')
.should('not.include','A_324f90')
cy.get('.oxd-table-card > .oxd-table-row').invoke('text')
.should('not.include','test20')
})




it("verify that when searching by User role will appear the same data ",function(){
    cy.wait(3000)
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.wait(2000)
cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
cy.get('.oxd-select-dropdown > :nth-child(2)').click()
cy.get('.oxd-form-actions > .oxd-button--secondary').click()
cy.get('.oxd-table-body').invoke('text').should('not.include','ESS')
})




 it('verify that when searching by Employed name will appear the same data  ',function(){
 cy.wait(3000)
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.wait(2000)
    cy.get('.oxd-autocomplete-text-input > input').type("Ravi M B").select(0)
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()
cy.get('.oxd-table-body').invoke('text').should('not.include','Feyza Karatas')
cy.get('.oxd-table-body').invoke('text').should('not.include','A8DCo 010Z')

 })


it(' Verify popup search returns only the requested items ',function(){
    cy.wait(2000)
cy.get(':nth-child(1) > .oxd-main-menu-item').click()
cy.wait(2000)
cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click();
cy.wait(2000)
cy.get('.oxd-select-dropdown > :nth-child(2) > span').click()
cy.get('.oxd-form-actions > .oxd-button--secondary').click()
cy.wait(2000)
cy.get('.oxd-table-body')
  .should('not.include.text', 'Ingeschakeld')
})




it('Verify that filters are reset successfully ',function(){
    cy.wait(2000)
cy.get(':nth-child(1) > .oxd-main-menu-item').click()

cy.wait(2000)

cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click();
cy.wait(2000)

cy.get('.oxd-select-dropdown > :nth-child(2) > span').click()
cy.get('.oxd-form-actions > .oxd-button--secondary').click()

cy.get('.orangehrm-horizontal-padding > .oxd-text').invoke('text').then((t1)=>{
    const W =t1.trim().toLowerCase();

cy.wait(2000)

cy.get('.oxd-button--ghost').click()
cy.get('.orangehrm-horizontal-padding > .oxd-text').invoke('text').then((t2)=>{

    const v=t2.trim().toLowerCase();
    expect(v).to.equal(W)

})       
})
})



it('verify that the user can adding (Admin/user) ',function(){

cy.wait(2000)
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.wait(2000);

    cy.get('.orangehrm-header-container > .oxd-button').click()

    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click();
    cy.get('.oxd-select-dropdown > :nth-child(3)').click()
cy.get('.oxd-autocomplete-text-input > input').type('A8DCo 4Ys 010')
cy.wait(2000)
cy.get('.oxd-autocomplete-option').click()
cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text') .click()
cy.get('.oxd-select-dropdown > :nth-child(2)').click()
cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').click()
cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('amr_ahmel')
cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('amrahmedsaad1')
cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('amrahmedsaad1')
cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').click()
cy.get('.oxd-button--secondary').click()
cy.wait(2000)
cy.get('.orangehrm-container').contains('amr_ahmel')

})




it('verify that the user cant addin user by matching data ',function(){
    cy.wait(3000)
cy.get(':nth-child(1) > .oxd-main-menu-item').click()
 cy.get('.orangehrm-header-container > .oxd-button').click()

    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click();
    cy.get('.oxd-select-dropdown > :nth-child(3)').click()
cy.get('.oxd-autocomplete-text-input > input').type('yedghjb1 ru84 90jsnd')
cy.wait(3000)
cy.get('.oxd-autocomplete-option').click()
cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text') .click()
cy.get('.oxd-select-dropdown > :nth-child(2)').click()
cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').click()
cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('amr_aaaww')
cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('amrahmedsaad1')
cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('amrahmedsaad1')
cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').click()
cy.get('.oxd-button--secondary').click()
cy.wait(2000)
 cy.get('.orangehrm-header-container > .oxd-button').click()

    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click();
    cy.get('.oxd-select-dropdown > :nth-child(3)').click()
cy.get('.oxd-autocomplete-text-input > input').type('yedghjb1 ru84 90jsnd')
cy.wait(3000)
cy.get('.oxd-autocomplete-option').click()
cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text') .click()
cy.get('.oxd-select-dropdown > :nth-child(2)').click()
cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').click()
cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('amr_aaaww')
cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('amrahmedsaad1')
cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('amrahmedsaad1')
cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').click()
cy.get('.oxd-button--secondary').click()
cy.wait(2000)
cy.contains('Already exists').should('be.visible')





})



it('verify that the user cant adding by empty data ',function(){
cy.wait(2000)
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
cy.wait(2000);

    cy.get('.orangehrm-header-container > .oxd-button').click()
cy.get('.oxd-button--secondary').click()
cy.contains('Required').should('be.visible')

})







it('verify that the user can delete from table Admin and User management',function(){
    cy.wait(3000)
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
cy.wait(3000);
cy.get(':nth-child(2) > .oxd-table-row > :nth-child(1) > .oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click()
cy.wait(3000)
cy.get('.orangehrm-horizontal-padding > div > .oxd-button').click()
cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').click()
cy.wait(2000)
cy.get('.orangehrm-container').should('not.contain','ESS')
cy.get('.orangehrm-container').should('not.contain','firstNameFild lastNameFild')
})



it('verify that the Records data can be edit  ',function(){
 cy.wait(3000)
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
cy.wait(3000);
cy.get(':nth-child(3) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click()
cy.get(':nth-child(2) > .oxd-input').type('amrAhmed');
cy.get('.oxd-checkbox-input > .oxd-icon').click()
cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('{selectall}{backspace}')
cy.wait(1000)
cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('amr_hmed')
cy.wait(2000)
cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('amrahmedsaad2')
cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('amrahmedsaad2')
cy.wait(3000)
cy.get('.oxd-button--secondary').click()
cy.wait(3000)
cy.get('.orangehrm-container').contains('amr_hmed')
})




it('verify that the editing doesnt accepted matches data when the user do edit',function(){
cy.wait(3000)
 cy.get(':nth-child(1) > .oxd-main-menu-item').click()
cy.wait(3000)
cy.get(':nth-child(2) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click()
cy.get(':nth-child(2) > .oxd-input').type('amrAhmed');
cy.get('.oxd-checkbox-input > .oxd-icon').click()
cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('{selectall}{backspace}')
cy.wait(1000)
cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('sssss')
cy.wait(2000)
cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('amrahmedsaad2')
cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('amrahmedsaad2')
cy.wait(3000)
cy.get('.oxd-button--secondary').click()
cy.wait(3000)
cy.get(':nth-child(3) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click()
cy.get(':nth-child(2) > .oxd-input').type('amrAhmed');
cy.get('.oxd-checkbox-input > .oxd-icon').click()
cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('{selectall}{backspace}')
cy.wait(1000)
cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('sssss')
cy.wait(2000)
cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('amrahmedsaad2')
cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('amrahmedsaad2')
cy.wait(3000)
cy.get('.oxd-button--secondary').click()
cy.get('.orangehrm-card-container').contains('Already exists')

})





it('verify that the user can add job tittles ',function(){
   cy.wait(3000)
   cy.get(':nth-child(1) > .oxd-main-menu-item').click()
   cy.wait(3000)
   cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)').click()
   cy.get('.oxd-dropdown-menu > :nth-child(1)').click()
   cy.get('.oxd-button').click()
   cy.get(':nth-child(2) > .oxd-input').type('Software tester1');
   cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('we need 2 years expereince ')
   cy.wait(2000)
   cy.get('input[type="file"]').selectFile('cypress/fixtures/11.png', { force: true })
cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('im very exiting ')
cy.get('.oxd-button--secondary').click()
cy.wait(3500)
cy.get('.oxd-table-body').contains('Software tester1')
cy.get('.oxd-table-body').contains('we need 2 years expereince')
})

it('verfiy that the user can edit job title ', function(){
 cy.wait(3000)
   cy.get(':nth-child(1) > .oxd-main-menu-item').click()
   cy.wait(3000)
   cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)').click()
   cy.get('.oxd-dropdown-menu > :nth-child(1)').click()
   cy.get(':nth-child(28) > .oxd-table-row > [style="flex: 1 1 0%;"] > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click()
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('{selectall}{backspace}')
   cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('we need 2 years experience in auto test ')
cy.get('.oxd-button--secondary').click()
cy.wait(4000)
cy.get('.oxd-table-card-cell-show-more').click()
cy.wait(4000)
cy.get('.oxd-table-body').contains('we need 2 years experience in auto test ')


})
it('verify that the user can delete job title ',function(){
 cy.wait(3000)
   cy.get(':nth-child(1) > .oxd-main-menu-item').click()
   cy.wait(3000)
   cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)').click()
   cy.get('.oxd-dropdown-menu > :nth-child(1)').click()
cy.get(':nth-child(1) > .oxd-table-row > [style="flex: 1 1 0%;"] > .oxd-table-cell-actions > :nth-child(1)').click()
    cy.get('.oxd-button--label-danger').click()
cy.wait(3000)
  cy.get('.oxd-table-body').should('not.contain','Automation Tester')

})

it('verify that the user can delete more than job title ',function(){
 cy.wait(3000)
   cy.get(':nth-child(1) > .oxd-main-menu-item').click()
   cy.wait(3000)
   cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)').click()
   cy.get('.oxd-dropdown-menu > :nth-child(1)').click()
   cy.get(':nth-child(1) > .oxd-table-row > :nth-child(1) > .oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click()
   cy.get(':nth-child(2) > .oxd-table-row > :nth-child(1) > .oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click()
   cy.get('.orangehrm-horizontal-padding > div > .oxd-button').click()
   cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').click()
   cy.get('.orangehrm-container').should('not.contain','Automaton Tester')
})



it.only('verify that the user can open page reports ',function(){
cy.wait(2000)
cy.get(':nth-child(2) > .oxd-main-menu-item').click()
cy.wait(2000)
cy.get(':nth-child(2) > .oxd-main-menu-item').click()
cy.wait(2000)
cy.contains('Employee Reports').should('be.visible')


})
})
