/// <reference types="cypress"/>

//import login page

import LoginPage from '../PageObjects/LoginPage'

describe('Login to admin area demo',function(){


    it('valid login test', function(){

        const login = new LoginPage()

        //launch URL
        login.visit()
        //enter email add
        login.fillEmail('admin@yourstore.com')
        //enter pass
        login.fillpassword('admin')
        //click login button
        login.clickLogin()


    }
    )

})
