///Desativando botão de acessar

function checkInputs(inputs) {

  var filled = true;

inputs.forEach(function(input) {
  
  if(input.value === "") {
      filled = false;
  }

  });

return filled;

}

var inputs = document.querySelectorAll("input");
var button = document.querySelector("button");

inputs.forEach(function(input) {
  
input.addEventListener("keyup", function() {

  if(checkInputs(inputs)) {
    button.disabled = false;
    button.style.opacity = ""
  } else {
    button.disabled = true;
    button.style.opacity = "35%"
  }

});

});


///Validando O E-MAIL
let btn = document.getElementById("botao");
btn.setAttribute("disabled", true);
let email = document.getElementById("inputEmail")
let validaEmail = false

email.addEventListener("focus", function () {
  email.style.backgroundColor = "#E2DCDC"
});

email.addEventListener("keyup", function () {
  console.log("Saiu do campo do email");

  let emailValidation = document.getElementById('emailValidation');


  email.style.backgroundColor = "#FFFFFF"

  if (!email.value) {
    emailValidation.innerText = "Campo obrigatório"
    emailValidation.style.color = "#D53A3A"
    emailValidation.style.fontWeight = "bold"

  } else if (!email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) { //Testa o erro

    email.style.border = "solid 1.5px #D8341B";

    emailValidation.innerText = "E-mail inválido"
    emailValidation.style.color = "#D53A3A"
    emailValidation.style.fontWeight = "bold"


  } else {
    validaEmail = true
    emailValidation.innerText = ""

    email.style.border = "solid 1.5px #13A02D";

  }

});

// validando senha:

let validaSenha = document.getElementById("senhaValidation")
let senha = document.getElementById("inputPassword");
let validacaoSenha = false;

senha.addEventListener("focus", function () {
  senha.style.backgroundColor = "#E2DCDC"
});

senha.addEventListener("keyup", function () {

  senha.value.toString()

     if (senha.value.length < 8){
      
      validaSenha.innerText = "Minimo 8 digitos"
      validaSenha.style.color = "#D53A3A"
      validaSenha.style.fontWeight = "bold"
      senha.style.border = "solid 1.5px #D8341B";

    }
  
    if (senha.value.length >= 8) {
      validaSenha.innerText = ""
      validaPwdRegistration = true
      senha.style.border = "solid 1.5px #13A02D";
      
    }
    
    if ((senha.value == "")) {
      
      validaSenha.innerText = "Campo obrigatório"
      validaSenha.style.color = "#D53A3A"
      validaSenha.style.fontWeight = "bold"
      senha.style.border = "solid 1.5px #D8341B";
    }
  

})

if ((validaEmail=true) && (validacaoSenha=true)){
  btn.removeAttribute("disabled")
}