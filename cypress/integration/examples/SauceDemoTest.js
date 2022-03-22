/// <reference types='cypress'/>

describe('Login to sauce demo website', function (){

   it('Valid Login to sauce demo website', function() {

       cy.visit('https://www.saucedemo.com/'); //launch the URL
       cy.get('#user-name').should('be.visible').type('standard_user');
       cy.get('#password').should('be.visible').type('secret_sauce');

       cy.get('#login-button').should('be.visible',{delay:100}).click();

       cy.wait(3000)
       cy.url().should('eq','https://www.saucedemo.com/inventory.html',{delay:200}); //verify you landed on home page

       


   });
   
   

});