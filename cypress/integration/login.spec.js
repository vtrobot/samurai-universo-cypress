
import login from '../support/pages/login'
import loginPage from '../support/pages/login'
import dashPage from '../support/pages/dash'

describe('Login' , function(){

    context('quando usuario é muito bom' , function(){
        
        const user = {
            name:'jassa',
            email:'jassa@login.com',    
            password:'pwd123' 

        }
        it('de logar com sucesso' , function(){

              loginPage.go()  
              loginPage.form(user)
              loginPage.submit() 
              
              dashPage.usuarioLogado(user.name)

           
        })
    })
})