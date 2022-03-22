/// <reference types="cypress" />
describe(' Go to nop commerce website', function () {

    it('Launch the nop commerce website and navigate to home page', function () 
    {
        cy.visit('https://demo.nopcommerce.com/') // launch the url
        cy.title().should('eq','nopCommerce demo store',{ delay: 100 }) //verify home title
    })

    it('Click on Computers menu', function () 
    {
         cy.contains('Computers').click //click on product menu

         
       
    })
  })