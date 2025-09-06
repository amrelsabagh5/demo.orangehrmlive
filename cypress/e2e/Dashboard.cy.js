
/// <reference types="cypress" />

import { Login } from "../pom/login1";

const Dashboard=new Login();
describe('authDshboard', function(){

  before(function(){
 Dashboard.visit();
    Dashboard.username('Admin');
    Dashboard.pass('admin123');
    Dashboard.click_login();

  })

it('make sure that when open page any icon in my active will open ',function(){

    Dashboard.visit();
    Dashboard.username('Admin');
    Dashboard.pass('admin123');
    Dashboard.click_login();
    cy.get('.orangehrm-todo-list > :nth-child(1)').click()
cy.contains('Manage Reviews').should('be.visible')
    


})

it('make sure that when click to icon and will be opend can the user back',function(){
  Dashboard.visit();
    Dashboard.username('Admin');
    Dashboard.pass('admin123');
    Dashboard.click_login();
    cy.get('.orangehrm-todo-list > :nth-child(1)').click()
    cy.go('back');
cy.contains('Time at Work').should('be.visible')
})

it('make sure that when click on Assign Leave will open page Leave Assignment',function(){


    cy.get('.orangehrm-dashboard-widget-body > .oxd-grid-3 > :nth-child(1)').click();
    cy.contains('Assign Leave').should('be.visible')

})

it('make sure that when click on Leave List will open page Leave List ',function(){
 Dashboard.visit();
    Dashboard.username('Admin');
    Dashboard.pass('admin123');
    Dashboard.click_login();
    cy.get('').click();
    cy.contains('Leave List').should('be.visible')
})
it('make sure that when click on Timesheets will open page ',function(){

cy.get('.orangehrm-dashboard-widget-body > .oxd-grid-3 > :nth-child(2)').click();
cy.contains('Leave List').should('be.visible');

})
it('make sure that when click on Apply Leave will open page ',function(){
  cy.get('.orangehrm-dashboard-widget-body > .oxd-grid-3 > :nth-child(4)').click();
cy.contains('Apply Leave').should('be.visible');

})
it('make sure that when click on Apply Leave will open page ',function(){

cy.get('.orangehrm-dashboard-widget-body > .oxd-grid-3 > :nth-child(5)').click()
  cy.contains('My Leave List').should('be.visible');

})

it('make sure that when click on My Timesheete will open page ',function(){

cy.get('.orangehrm-dashboard-widget-body > .oxd-grid-3 > :nth-child(6)').click()
  cy.contains('My Timesheet').should('be.visible');

})


it('make sure that Employee Distribution by Sub Unit have (Engineering /Human Resources/ Administration /Client Services) ',function(){

cy.get(':nth-child(6) > .oxd-sheet > .orangehrm-dashboard-widget-body > .emp-distrib-chart > .oxd-chart-legend').click()
  cy.contains('Engineering').should('be.visible');

  cy.contains('Human Resources').should('be.visible');
    cy.contains('Administration').should('be.visible');
        cy.contains('Client Services').should('be.visible');
                cy.contains('Client Services').should('be.visible');


})

it('make sure that the postes in dashpoard when click on it will open page postes which have this post in dashboard and same data  ',function(){

cy.get('.oxd-grid-1 > :nth-child(1)').invoke('text').then((t1)=>{
const t =t1.trim().toLowerCase();
cy.wait(2000)

cy.get(':nth-child(1) > .orangehrm-buzz-widget-header').click()
cy.get('.oxd-grid-1 > :nth-child(1) > .oxd-sheet').invoke('text').then((t2)=>{
expect(t2.trim().toLowerCase()).to.include(t);

})})
})
it('when click on timer in dashboard will open page time ',function(){
cy.wait(2000)

cy.get('.orangehrm-attendance-card-bar > .oxd-icon-button > .oxd-icon').click();
cy.wait(2000)
cy.contains('Attendance').should('be.visible')

})
it('when click on icon"about" will appear deatils more about site',function(){

cy.get('.oxd-userdropdown-tab').click()
cy.wait(2000)

cy.get(':nth-child(1) > .oxd-userdropdown-link').click();

cy.wait(2000)

cy.contains('About').should('be.visible')
cy.contains('Company Name').should('be.visible')
cy.contains('Version').should('be.visible')
cy.contains('Active Employees').should('be.visible')
cy.contains('Employees Terminated: ').should('be.visible')

})

it('make sure when search in pop up items will appear items which the user searched it ONLY  ',function(){
cy.get('.oxd-input').type("Time");  
cy.get('.oxd-sidepanel-body').should('have.length',1)
cy.contains('Time').should('be.visible');
cy.get('.oxd-form-actions > .oxd-button--secondary').click();
})

it.only('make sure when search in pop up items will appear items which the user searched it ONLY ',function(){
cy.get(':nth-child(1) > .oxd-main-menu-item').click()
cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click()


})



 
})
    
    

