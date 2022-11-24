
////////Validando O E-MAIL

let email = document.getElementById("inputEmail")

email.addEventListener("focus", function () {
    email.style.backgroundColor = "#E2DCDC"
  });
  
  //Blur ou KeyUp
  email.addEventListener("keyup", function () {
    console.log("Saiu do campo do email");
  
    //Pega o elemento Small
    let emailValidation = document.getElementById('emailValidation');
  
  
    //Altera o fundo do campo ao sair do click 
    email.style.backgroundColor = "#FFFFFF"
  
    //Valida se o campo É VAZIO
    if (!email.value) { //Se não foi preenchido
      // troca o fundo
    //   email.style.border = "solid 1.5px #13A02D";
  
      //Seta a mensage no small (e configura)
      emailValidation.innerText = "Campo obrigatório"
      emailValidation.style.color = "#D53A3A"
      emailValidation.style.fontWeight = "bold"
  
      //Bloqueado o botão de salvar
    //   botaoCapturado.setAttribute("disabled", true);
      //Trocando a cor do botão
    //   botaoCapturado.style.backgroundColor = "#908E8E"
  
      //Seta a variável para falso
    //   emailFormularioOk = false;
  
      //Valida de o email está em um formato correto
    } else if (!email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) { //Testa o erro
  
      // troca o fundo
      email.style.border = "solid 1.5px #D8341B";
  
      //Seta a mensage no small (e configura)
      emailValidation.innerText = "E-mail inválido"
      emailValidation.style.color = "#D53A3A"
      emailValidation.style.fontWeight = "bold"
  
      //Bloqueado o botão de salvar
    //   botaoCapturado.setAttribute("disabled", true);
      //Trocando a cor do botão
    //   botaoCapturado.style.backgroundColor = "#908E8E"
  
      //Seta a variável para falso
    //   emailFormularioOk = false;
  
    } else {
      //Se o campo estiver ok
      //Retira a mensage do small
      emailValidation.innerText = ""
  
      //Seta o BG do input como Sucesso
      email.style.border = "solid 1.5px #13A02D";
  
      //Seta a variável de controlle do formulário
    //   emailFormularioOk = true;
  
    //   if (nomeFormularioOk && emailFormularioOk) {
    //     //Retorna o botão para "habilitado"
    //     botaoCapturado.removeAttribute("disabled");
    //     botaoCapturado.style.backgroundColor = "#0b5ed7"
    //   }
    }
  
  });