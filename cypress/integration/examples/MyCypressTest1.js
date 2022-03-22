/// <reference types="cypress" />
describe('Login to Underground weather', function () {

    before(function()
    {
        cy.fixture('example').then(function(data){

            this.data=data
        })
    })

    it('Launch underground weather websites to search for weather updates for my city', function () 
    {
        cy.visit('https://www.wunderground.com/login') // launch the url
        cy.get('#form-signin-email').should('be.visible').should('be.enabled').type(this.data.email) //get element username and type input
        cy.get('#form-signin-password').should('be.visible').should('be.enabled').type(this.data.password) //get element password and type input
        cy.get('#signIn').scrollIntoView()
        .should('be.visible',{ delay: 100 }).click()   //click sign in button
        
        //cy.title().should('eq','Weather Underground',{ delay: 100 }) //verify home title
    })

    // it('Search weather for specific city', function () 
    // {
    //     // cy.visit('https://www.wunderground.com/login') // launch the url
       
    // })
  })