/// <reference types="cypress" />
class investecHomePage{

    visit(){

        cy.viewport(1920,1080)
        cy.on('uncaught:exception',(err,runnable) =>{

            return false
        })

       // cy.visit("https://www.investec.com/")
       cy.visit("https://www.investec.com/en_za/focus/money/understanding-interest-rates.html?")

    }


    clickSearchIcon(){

        const searchIcon = cy.get('#search-toggle',{timeout: 1500}).invoke('show')
        searchIcon.click({force:true})
        
            
    }

    searchTextInput(value){

        const searchInputField =  cy.get('#searchBarInput',{timeout: 1500}).should('be.visible')
        searchInputField.type(value,{force:true}).type('{enter}')
 
        return this
     }

     clickSearchResults(){

        const searchResultsLink = cy.get('#content > div.search-results.component.ng-scope > div > div > div.col-12.offset-lg-1.px-lg-3.px-0.d-none.d-md-block.col-lg-10 > div:nth-child(3) > div:nth-child(3) > div > div.search-results__focus-content-container.col-md-8.col-12 > div > div > div > a > h4 > b:nth-child(1)').should('be.enabled')
        searchResultsLink.click()
      }

     clickSignUp(){

        const signUpBtn = cy.get('.ch-collapsible-container').contains('Sign up').should('be.enabled')
        signUpBtn.click()
      }

    fillName(value){

        const nameField =  cy.get('[name=name]').should('be.visible')
        nameField.type(value).should('have.value',value)
 
        return this
     }

     fillSurname(value){

        const surnameField =  cy.get('[name=surname]').should('be.visible')
        surnameField.type(value).should('have.value',value)
 
        return this
     }

    fillEmail(value){

       const emailField =  cy.get('[name=email]').should('be.visible')
       emailField.type(value).should('have.value',value)

       return this
    }

    selectMyselfCheckbox(){

        const checkbox = cy.get('.checkbox-input',{timeout: 2000}).contains('My business').should('be.enabled')
        checkbox.click({force:true})
      }

    clickSubmit(){

        const submitBtn = cy.get('[type=submit]',{timeout: 15000}).should('be.visible')
        submitBtn.click()
      }

      verifyMessage(){

        const confirmationTest = cy.get('.thank-you__sub-heading',{timeout: 3500}).should('be.visible')
        confirmationTest.contains('Thank you')
      }

}

export default investecHomePage