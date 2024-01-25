import { Login } from "./../pages/loginPage"
import { Logout } from "./../pages/homepage"

const LoginPage =  new Login()
const LogOutPage = new Logout()

describe('login', () => {
    beforeEach('got to page', ()=>{
        LoginPage.navigate()
    })

    it('succesfully login to GOIT page1', () => {
        cy.fixture('user1.json').then((user) => {
        const useremail = user.email
        const password = user.password
        
        LoginPage.enterUserData(useremail, password)
        LoginPage.clickLog()
        
        cy.wait(500);

        LogOutPage.pageCheck()
        LogOutPage.clickBurger()
        
        cy.wait(500);
        
        LogOutPage.clickOut()
        })
    })

    it('succesfully login to GOIT page1', () => {
        cy.fixture('user2.json').then((user) => {
        const useremail = user.email
        const password = user.password
        
        LoginPage.enterUserData(useremail, password)
        LoginPage.clickLog()
        
        cy.wait(500);

        LogOutPage.pageCheck()
        LogOutPage.clickBurger()
        
        cy.wait(500);
        
        LogOutPage.clickOut()
        })
    })


  })