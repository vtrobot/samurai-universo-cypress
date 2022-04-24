// import faker from '@faker-js/faker'
import signupPage from '../support/pages/signup'

describe('cadastro', function(){

  context('Quando o usuário é novato' , function(){

    const user = {
      name:'Junior Tambosi',
      email:'teste@teste.com',
      password: 'pwd123'
    }

    before(function(){

      cy.task('removeUser', user.email  )
      .then(function(result){
      console.log(result)
  })
    })
    
    it('deve cadastrar um novo usuário', function() {
   
  
      signupPage.go()
      signupPage.form(user)
      signupPage.submit()
      // signupPage.toastHaveText('Agora você se tornou um(a) Samurai, faça seu login para ver seus agendamentos!')
      signupPage.toast.shouldHaveText('Agora você se tornou um(a) Samurai, faça seu login para ver seus agendamentos!')
    
    
      // cy.intercept('POST' , '/users', {
      //   statusCode:200
      // }).as('postUser')
    
    
      // cy.wait('@postUser')
      // cy.wait(1000)
      // cy.get('body')
  
    
    })

  })
  
 context('quando o email ja existe', function(){

          const user ={

            name:'joao lucas',
            email:'testejoao@teste.com',
            password:'pwd123',
            is_provider:true
}

    before(function(){

      cy.task('removeUser', user.email  )
      .then(function(result){
      console.log(result)
  })

  cy.request(
    'POST',
    'http://localhost:3333/users',
     user
     ).then(function(response){
       expect(response.status).to.eq(200)
     })

    })
    it('deve exivbir email ja cadastrado', function() {

      signupPage.go()
      signupPage.form(user)
      signupPage.submit()
      // signupPage.toastHaveText('Email já cadastrado para outro usuário.')
      signupPage.toast.shouldHaveText('Email já cadastrado para outro usuário.')
   
      // cy.visit('/signup')
    
      // cy.get('input[placeholder^="Nome"]').type(user.name)
      // cy.get('input[placeholder$="email"]').type(user.email)
      // cy.get('input[placeholder*="senha"]').type(user.password)  
    
      
      // cy.contains('button','Cadastrar').click()
  
     
    
      // cy.get('.toast')
      // .should('be.visible')
      // .find('p')
      // .should('have.text', 'Email já cadastrado para outro usuário.')
    
    })
      
 } )   
  
context('quando o e-mail é incorreto' , function(){

  const user ={

    name:'princesa elisabete',
    email:'liza.yaho.com',
    password:'pwd123',
}

it('deve exibir menagem de alerta', function(){

    signupPage.go()
    signupPage.form(user)
    signupPage.submit()

    signupPage.alertHaveText('Informe um email válido')

   
})

})
 
context("quando a senha é muito curta", function () {
  const passwords = ["1", "2a", "3aa", "4aaa", "5aaaa"];

  beforeEach(function () {
    signupPage.go();
  });

  passwords.forEach(function (p) {
    it("não deve cadastrar com a senha" + p, function () {
      const user = { name: "jason", email: "jason@gmail.com", password: p };

      signupPage.go();
      signupPage.form(user);
      signupPage.submit();

      signupPage.alertHaveText("Pelo menos 6 caracteres");
    });
  });

  afterEach(function () {
    signupPage.alertHaveText("Pelo menos 6 caracteres");
  });
});

context.only('quando nao preencho nenhum dos campos', function(){

  const alertMessages = [
    'Nome é obrigatório',
    'E-mail é obrigatório',
    'Senha é obrigatória'
  ];

  before(function () {
    signupPage.go();
    signupPage.submit()
  });


    alertMessages.forEach(function(aLert){
         it('deve exibir'  + aLert.toLowerCase() ,  function() {

             signupPage.alertHaveText(aLert)

    });
    

  })


  


})



})


// cy.wait(1000)
      // cy.get('body')
 

