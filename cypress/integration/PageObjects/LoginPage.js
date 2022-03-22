/// <reference types="cypress" />
class Login{

    visit(){

        cy.visit("https://admin-demo.nopcommerce.com/login")

    }

    fillEmail(value){

       const emailField =  cy.get('#Email').should('be.visible')
       //clear email field
       emailField.clear()
       emailField.type(value)

       return this
    }

    fillpassword(value){
        
        const passwordField =  cy.get('#Password').should('be.visible')
        //clear password field
        passwordField.clear()
        passwordField.type(value)

        return this
    }

    clickLogin(){

      const loginBtn = cy.get('[type=submit]').should('be.enabled')
      loginBtn.click()
    }
}

export default Login