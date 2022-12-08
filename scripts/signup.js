
//Importando a função de criar usuaŕios
import createUSer from './requisicoes/createUser'
//importando função para limpar os campos
import { limparValorDeObjetos } from '../constants/limparCampos.js'
//importando o loading
import { loading } from '../constants/loading.js'
//importando função para formatar o nome e sobrenome
import primeiraEmMaiusculo from '../constants/formatName.js'
//importando a função para mostrar a senha
import verSenha from '../constants/mostrarSenha.js'



// Selecionando as divs que contém a classe form-control
const formControlsElements = document.querySelectorAll('.form-control')

// Selecionando o botão para criar novo usuário
const createUserButtonElement = document.querySelector('#createUserButton')



// Objeto para armazenar os dados dos inputs
var formValidation = {
  firstName: false,
  lastName: false,
  email: false,
  password: false,
  passwordConfirm: false
}

// FUNÇÃO PARA CONTROLAR OS DADOS


const signup = () => {

  for (let control of formControlsElements) {
    const controlInputElement = control.children[1]

    controlInputElement.addEventListener('keyup', event => {
      let inputValid = event.target.checkValidity()
      //Armazenando o valor a propriedade no objeto
      let inputValue = event.target.value

      if (inputValid) {
        // Removendo os espaços antes e depois com o metodo trim()
        formValidation[event.target.id] = inputValue.trim()

        // Formatando o nome 
        formValidation.firstName = primeiraEmMaiusculo(formValidation.firstName)
        formValidation.lastName = primeiraEmMaiusculo(formValidation.lastName)

        control.classList.remove('error')
      } else {
        createUserButtonElement.disabled = true
        control.classList.add('error')
      }
        //Comparação dos valores inseridos nos inputs.
      if (controlInputElement.id === 'passwordConfirm') {
        if (controlInputElement.value != formValidation['password']) {
          control.classList.add('error')
          createUserButtonElement.disabled = true
        } else {
          createUserButtonElement.disabled = false
          createUserButtonElement.focus()
        }
      }
    })
  }
  //função para mostrar a senha
  verSenha()



  // EVENTO DE CLIQUE NO BOTÃO

  createUserButtonElement.addEventListener('click', event => {
    event.preventDefault()

    // Para verificar se todos os valores estao true/Válido
    let formValid = Object.values(formValidation).every(Boolean)

    //Inicia o login, e após a requisição for conclída, é removido
    loading()

    if (formValid) {
      // Guardando o email em caixa baixa:
      formValidation.email = formValidation.email.toLowerCase()

      // Salvando o e-mail no localStorage
      localStorage.setItem('nome', formValidation.firstName)
      localStorage.setItem('email', formValidation.email)

      //Enviando os dados para a requisição criar o usuário
      createUSer(formValidation, createUserButtonElement)

      //Função para limpar os campos e o objeto
      limparValorDeObjetos(formControlsElements, formValidation)
    }
  })
}

export default signup


// let btn = document.getElementById("btn");
// btn.setAttribute("disabled", true);
// btn.style.opacity = "40%";

// //validando campo "nome"

//   let inputName = document.getElementById("inputName")
//   let nameRegistration = document.getElementById("nameRegistration")
//   let validaNome = false;
  
//   let normalizeInputName = inputName.trim;

//   inputName.addEventListener("focus", function () {
//     inputName.style.backgroundColor = "#E2DCDC"
//   });
//   inputName.addEventListener("keyup", function () {
//     inputName.value.toString()
//     if ((inputName.value)) {
  
//       nameRegistration.style.color = "#D53A3A";
//       nameRegistration.style.fontWeight = "bold";
//     }
    
//     if(inputName.value == ""){
//       nameRegistration.innerText = "Campo obrigatório";
//       inputName.style.border = "solid 1.5px #D8341B";
//     }
  
//     if (inputName.value.length >= 3) {
//       nameRegistration.innerText = ""
//       validaNome = true
//       inputName.style.border = "solid 1.5px #13A02D";
      
//     }
  
//   });

//   /// validando campo "sobrenome"
//   let lastName = document.getElementById("lastName");
//   let lastNameRegistration = document.getElementById("lastNameRegistration");
//   let validaLastName = false;

//   lastName.addEventListener("focus", function () {
//     lastName.style.backgroundColor = "#E2DCDC"
//   });
//   lastName.addEventListener("keyup", function () {
//     lastName.value.toString()
//     if ((lastName.value)) {
  
//       lastNameRegistration.style.color = "#D53A3A";
//       lastNameRegistration.style.fontWeight = "bold";
//     }
  
//     if (lastName.value.length >= 3) {
//       lastNameRegistration.innerText = ""
//       validaLastName = true
//       lastName.style.border = "solid 1.5px #13A02D";
      
//     }
    
//     if(lastName.value == ""){
//       lastNameRegistration.innerText = "Campo obrigatório";
//       lastName.style.border = "solid 1.5px #D8341B";
//     }
  
//   })

// ///validando campo "email"
//   let inputEmailValidation = document.getElementById("inputEmailValidation");
//   let validationEmail = document.getElementById("emailValidation");
//   let validaEmailSignup = true;

//   inputEmailValidation.addEventListener("focus", function () {
//     inputEmailValidation.style.backgroundColor = "#E2DCDC"
//   });
  
//   inputEmailValidation.addEventListener("keyup", function () {
  
//     if (!inputEmailValidation.value) {
//       validationEmail.innerText = "Campo obrigatório"
//       validationEmail.style.color = "#D53A3A"
//       validationEmail.style.fontWeight = "bold"
  
//     } else if (!inputEmailValidation.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) { //Testa o erro
  
//       inputEmailValidation.style.border = "solid 1.5px #D8341B";
  
//       validationEmail.innerText = "E-mail inválido"
//       validationEmail.style.color = "#D53A3A"
//       validationEmail.style.fontWeight = "bold"
  
  
//     } else {
//       validaEmail = true
//       validationEmail.innerText = ""
  
//       inputEmailValidation.style.border = "solid 1.5px #13A02D";
  
//     }
//   })


// // export default signup

//   ///validando campo "senha"
//   let pwdRegistration = document.getElementById("pwdRegistration");
//   let pwd = document.getElementById("pwd");
//   let validaPwdRegistration = false;

//     pwdRegistration.addEventListener("focus", function () {
//     pwdRegistration.style.backgroundColor = "#E2DCDC"
//   });
  
//     pwdRegistration.addEventListener("keyup", function () {
//     pwdRegistration.value.toString()

//      if (pwdRegistration.value.length < 8){
      
//       pwd.innerText = "Minimo 8 digitos"
//       pwd.style.color = "#D53A3A"
//       pwd.style.fontWeight = "bold"
//       pwdRegistration.style.border = "solid 1.5px #D8341B";

//     }
  
//     if (pwdRegistration.value.length >= 8) {
//       pwd.innerText = ""
//       validaPwdRegistration = true
//       pwdRegistration.style.border = "solid 1.5px #13A02D";
      
//     }
    
//     if ((pwdRegistration.value == "")) {
      
//       pwd.innerText = "Campo obrigatório"
//       pwd.style.color = "#D53A3A"
//       pwd.style.fontWeight = "bold"
//       pwdRegistration.style.border = "solid 1.5px #D8341B";
//     }
//   });


//   ///validando campo "confirmar a senha"

//   let pwdValidation = document.getElementById("pwdValidation");
//   let pwdValidati = document.getElementById("pwdValidati");
//   let validaPwd = false;

//   pwdValidation.addEventListener("focus", function () {
//     pwdValidation.style.backgroundColor = "#E2DCDC"
//   });

//   pwdValidation.addEventListener("keyup", function (event){
// console.log(event);

//     if(pwdValidation.value === pwdRegistration.value){
//       pwdValidation.value.toString()

//       pwdValidati.innerText = ""
//       validaPwd = true
//       pwdValidation.style.border = "solid 1.5px #13A02D";
//     }
    
//     if ((pwdValidation.value == "")) {
      
//       pwdValidati.innerText = "Campo obrigatório"
//       pwdValidati.style.color = "#D53A3A"
//       pwdValidati.style.fontWeight = "bold"
//       pwdValidation.style.border = "solid 1.5px #D8341B";
    
//     }

//     if(pwdValidation.value !== pwdRegistration.value){
      
//       pwdValidati.innerText = "Senha diferente"
//       pwdValidati.style.color = "#D53A3A"
//       pwdValidati.style.fontWeight = "bold"
//       pwdValidation.style.border = "solid 1.5px #D8341B";
//     }
    
//     if(validaNome && validaLastName && validaEmailSignup && validaPwdRegistration && validaPwd){

//       btn.removeAttribute("disabled")
//       btn.style.opacity = null
//     }

//   // console.log(pwdValidation.value);
//   });
  

  
    // /validando o btn






