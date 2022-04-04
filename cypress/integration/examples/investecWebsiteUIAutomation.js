/// <reference types="cypress"/>

//import investec home page

import investecHomePage from '../PageObjects/investec_home_page'

describe('Launch investec website', function() {


    it('Navigate to:Understanding cash investment interest rates',function(){

        const investec = new investecHomePage()

        //launch url
        investec.visit()
        //click search icon
       // investec.clickSearchIcon()
        //enter text on search input
       // investec.searchTextInput('Understanding cash investment interest rates')
        //click on search result
        //investec.clickSearchResults()

    })

    it('sign-up to receive focus insights straight to your inbox',function(){

        const investec = new investecHomePage()
        //click sign up button
        investec.clickSignUp()
        //enter name
        investec.fillName('Hansie',{force:true})
        //enter surname
        investec.fillSurname('Maphanga')
        //enter email
        investec.fillEmail('test@investec.co.za')
        //select checkbox
        investec.selectMyselfCheckbox()
        //click submit
        investec.clickSubmit()
        //display message
        investec.verifyMessage()
        
    })
})