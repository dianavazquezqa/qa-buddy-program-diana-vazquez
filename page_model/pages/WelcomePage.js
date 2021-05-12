import { Selector } from 'testcafe'

class WelcomePage {
    constructor (){
        this.loginButton = Selector('._2q_cf').withExactText('Log in')
    }
}

export default new WelcomePage()