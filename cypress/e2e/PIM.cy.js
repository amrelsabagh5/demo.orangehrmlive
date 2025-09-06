
///<reference types="cypress"/>

import { Login } from "../pom/login1";

const PIM =new Login

describe('auth page PIM',function(){
before(()=>{
PIM.visit()
PIM.username('Admin')
PIM.pass('admin123')
PIM.click_login('')

})




it('verify that the user can find Employee by Employee Name',function(){
    cy.wait(2000)
cy.get(':nth-child(2) > .oxd-main-menu-item').click()
cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').type('A')
cy.wait(3000)
cy.get('.oxd-autocomplete-dropdown > :nth-child(1)').click()
cy.wait(1000)
cy.get('.oxd-form-actions > .oxd-button--secondary').click()
cy.get('.oxd-table-card > .oxd-table-row').contains('0312')
})

 




it('verify that the user can find employed by emploayed id ',function(){
 cy.wait(2000)
cy.get(':nth-child(2) > .oxd-main-menu-item').click()
cy.wait(1000)
cy.get(':nth-child(2) > .oxd-input').type('0312')
cy.get('.oxd-form-actions > .oxd-button--secondary').click()
cy.get('.oxd-table-card > .oxd-table-row').contains('A8DCo 4Ys')

})




it('verify that the user can reset filter',function(){
 cy.wait(2000)
cy.get(':nth-child(2) > .oxd-main-menu-item').click()
cy.wait(1000)
cy.get(':nth-child(2) > .oxd-input').type('0312')
cy.get('.oxd-form-actions > .oxd-button--secondary').click()
cy.get('.oxd-table-card > .oxd-table-row').contains('0312')
cy.wait(2000)
cy.get('.oxd-button--ghost').click()
cy.wait(2000)
cy.get('.oxd-table-card > .oxd-table-row').contains('489')

})



it('veify that the user can edit Employee Information',function(){
 cy.wait(2000)
cy.get(':nth-child(2) > .oxd-main-menu-item').click()
cy.wait(1000)
cy.get(':nth-child(1) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(1)').click()
cy.wait(2000)
cy.get(':nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('{selectall}{backspace}')
cy.wait(2000)
cy.get(':nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('2323')
cy.wait(2000)
cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click()
cy.wait(3000)
cy.get(':nth-child(2) > .oxd-main-menu-item').click()
cy.get('.oxd-table-body').contains('2323')

})



it('verify that the user can delete Employee info',function(){
cy.wait(2000)
cy.get(':nth-child(2) > .oxd-main-menu-item').click()
cy.wait(2000)
cy.get(':nth-child(1) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click()
cy.get('.oxd-button--label-danger').click()
cy.get('.oxd-table-body').should('not.contain','039744')
})



it('verify that the user can delete more than one Employee ',function(){
cy.wait(2000)
cy.get(':nth-child(2) > .oxd-main-menu-item').click()
cy.wait(2000)
cy.get(':nth-child(1) > .oxd-table-row > :nth-child(1) > .oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click()
cy.get(':nth-child(2) > .oxd-table-row > :nth-child(1) > .oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click()
cy.get('.orangehrm-horizontal-padding > div > .oxd-button').click()

cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').click()
cy.get('.oxd-table-body').should('not.contain','bmrtahvwhibmrtahvwhi ')

})



it('verify that the user can open page optional ',function(){

cy.wait(2000)
cy.get(':nth-child(2) > .oxd-main-menu-item').click()
cy.wait(2000)
cy.get('.--parent > .oxd-topbar-body-nav-tab-item').click()
cy.get('.oxd-dropdown-menu > :nth-child(1)').click()

})


it('verify that the user can control in items in this page to show or  reverse it  ',function(){
    cy.wait(2000)

cy.get(':nth-child(2) > .oxd-main-menu-item').click()
cy.wait(2000)
cy.get('.--parent > .oxd-topbar-body-nav-tab-item').click()
cy.get('.oxd-dropdown-menu > :nth-child(1)').click()
cy.wait(2000)

cy.get(':nth-child(1) > .oxd-grid-3 > .orangehrm-optional-field-row > .oxd-switch-wrapper > label > .oxd-switch-input').click();
cy.wait(2000)

cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(1) > .oxd-switch-wrapper > label > .oxd-switch-input').click();
cy.wait(2000)

cy.get(':nth-child(2) > .oxd-switch-wrapper > label > .oxd-switch-input').click();
cy.wait(2000)

cy.get(':nth-child(3) > .oxd-switch-wrapper > label > .oxd-switch-input').click();
cy.wait(2000)

cy.get('.oxd-button').click();
cy.wait(3000)
cy.get(':nth-child(6) > .oxd-main-menu-item').click();
cy.wait(2000)
cy.get('.orangehrm-edit-employee-content > :nth-child(1)').contains('Smoker')

})



it('verify that the user can open page custom field ',function(){
  cy.wait(2000)
cy.get(':nth-child(2) > .oxd-main-menu-item').click()
cy.wait(2000)
cy.get('.--parent > .oxd-topbar-body-nav-tab-item').click()
cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
cy.wait(2000)

})





it('verify that the user can add custom ',function(){
  cy.wait(2000)
cy.get(':nth-child(2) > .oxd-main-menu-item').click()
cy.wait(2000)
cy.get('.--parent > .oxd-topbar-body-nav-tab-item').click()
cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
cy.wait(2000)
cy.get('.oxd-button').click()
cy.wait(1000)
cy.get(':nth-child(2) > .oxd-input').type('amr')
cy.wait(1000)
cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
cy.wait(1000)
cy.get('.oxd-select-dropdown > :nth-child(2)').click()
cy.wait(1000)
cy.get(':nth-child(2) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
cy.wait(1000)
cy.get('.oxd-select-dropdown > :nth-child(2)').click()
cy.wait(1000)
cy.get('.oxd-button--secondary').click()
cy.wait(1000)
cy.get('.oxd-table-body').contains('amr')
})




it('verify that the user can edit custom data ',function(){
  cy.wait(2000)
cy.get(':nth-child(2) > .oxd-main-menu-item').click()
cy.wait(2000)
cy.get('.--parent > .oxd-topbar-body-nav-tab-item').click()
cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
cy.wait(2000)
cy.get(':nth-child(1) > .oxd-table-row > [style="flex: 1 1 0%;"] > .oxd-table-cell-actions > :nth-child(2)').click()
cy.get(':nth-child(2) > .oxd-input').type('{selectall}{backspace}')
cy.get(':nth-child(2) > .oxd-input').type('amr1')
cy.get('.oxd-button--secondary').click()
cy.get('.oxd-table-body').contains('amr1')
})





it('verify that the user can delete the custom data',function(){
  cy.wait(2000)
cy.get(':nth-child(2) > .oxd-main-menu-item').click()
cy.wait(2000)
cy.get('.--parent > .oxd-topbar-body-nav-tab-item').click()
cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
cy.wait(2000)
cy.get(':nth-child(1) > .oxd-table-row > [style="flex: 1 1 0%;"] > .oxd-table-cell-actions > :nth-child(1)').click()
cy.get('.oxd-button--label-danger').click()
cy.get('.oxd-table-body').should('not.contain','amr1')
})


it('verify that the user can add employed ',function(){
 cy.wait(2000)
cy.get(':nth-child(2) > .oxd-main-menu-item').click()
cy.wait(2000)
cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
cy.wait(2000)
cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('amr12')
cy.wait(2000)
cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type('ahmed34')
cy.wait(2000)
cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('saad')
cy.wait(2000)
cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type('{selectall}{backspace}')
cy.wait(2000)
cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type('5656523')
cy.wait(2000)
cy.get('.oxd-button--secondary').click()
cy.wait(3500)
cy.contains('amr12 saad').should('be.visible')
//cy.get(':nth-child(1) > .oxd-form').contains('5656523')
//cy.get(':nth-child(1) > .oxd-form').contains('ahmed34')
})






it('verify that the user can open page reports ',function(){
cy.wait(2000)
cy.get(':nth-child(2) > .oxd-main-menu-item').click()
cy.wait(2000)
cy.get('.oxd-topbar-body-nav > ul > :nth-child(4)').click()
cy.wait(2000)
cy.contains('Employee Reports').should('be.visible')
})







it('veify that the user can search about report ',function(){
cy.wait(2000)
cy.get(':nth-child(2) > .oxd-main-menu-item').click()
cy.wait(2000)
cy.get('.oxd-topbar-body-nav > ul > :nth-child(4)').click()
cy.wait(2000)
cy.get('.oxd-autocomplete-text-input > input').type('a')
cy.wait(3000)
cy.get('.oxd-autocomplete-dropdown > :nth-child(1)').click()
cy.wait(3000)
cy.get('.oxd-form-actions > .oxd-button--secondary').click()
cy.wait(3000)
cy.get('.oxd-table-body').contains('All Employee Sub Unit Hierarchy Report')
})



it('verify that the user can reset that the data from report ',function(){
cy.wait(2000)
cy.get(':nth-child(2) > .oxd-main-menu-item').click()
cy.wait(2000)
cy.get('.oxd-topbar-body-nav > ul > :nth-child(4)').click()
cy.wait(2000)
cy.get('.oxd-autocomplete-text-input > input').type('a')
cy.wait(3000)
cy.get('.oxd-autocomplete-dropdown > :nth-child(1)').click()
cy.wait(3000)
cy.get('.oxd-button--ghost').click()
cy.wait(3000)
cy.get('.oxd-table-row').should('have.length.greaterThan',1)

})


it('verify that the user can delete of Employee Reports ',function(){

cy.wait(2000)
cy.get(':nth-child(2) > .oxd-main-menu-item').click()
cy.wait(2000)
cy.get('.oxd-topbar-body-nav > ul > :nth-child(4)').click()
cy.wait(2000)

cy.get(':nth-child(1) > .oxd-table-row > [style="flex: 1 1 15%;"] > .oxd-table-cell-actions > :nth-child(1)').click()
cy.wait(2000)

cy.get('.oxd-button--label-danger').click()
cy.wait(2000)

cy.get('.oxd-table-body').should('have.length',1)

})


it.only('verify that the can edit of Emloyee reports ',function() {
  cy.wait(2000)
cy.get(':nth-child(2) > .oxd-main-menu-item').click()
cy.wait(2000)
cy.get('.oxd-topbar-body-nav > ul > :nth-child(4)').click()
cy.wait(2000)
cy.get(':nth-child(1) > .oxd-table-row > [style="flex: 1 1 15%;"] > .oxd-table-cell-actions > :nth-child(2)').click()
cy.get(':nth-child(2) > .oxd-input').type('{selectall}{backspace}')
cy.get(':nth-child(2) > .oxd-input').type('All Employee Sub Unit Hierarchy Report1')
cy.wait(2000)
cy.get('.oxd-button--secondary').click()
cy.get('.orangehrm-card-container > .oxd-text').contains('All Employee Sub Unit Hierarchy Report1')
cy.wait(4000)
cy.get('.oxd-topbar-body-nav > ul > :nth-child(4)').click()
cy.wait(2000)
cy.get('.oxd-table-body').contains('All Employee Sub Unit Hierarchy Report1')

})




})




