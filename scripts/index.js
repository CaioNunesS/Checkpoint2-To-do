/* Email: Deve possuir um formato válido (RegExp) */
let email = document.getElementById("inputEmail")

email.addEventListener("focus", function () {
    email.style.backgroundColor = "#CDC6C68D"
});

email.addEventListener("keyup", function () {

    let emailValidation = document.getElementById("emailValidation");
    email.style.backgroundColor = "#FFFFFF"

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        //Sucesso na validação
        email.style.border = ""
        emailValidation.innerText = ""
        email.style.border = "solid 1.5px #13A02D";
        //Habilitando o botão de salvar
        btn.removeAttribute("disabled");
        btn.style.backgroundColor = "#0b5ed7"

    } else {
        //Falha na validação
        email.style.border = "solid 1.5px #D8341B";
        nomeValidacao.innerText = "Informe no mínimo 4 caracteres";
        emailValidation.style.color = "#D8341B";
        emailValidation.style.fontWeight = "bold";
        btn.setAttribute("disabled", true);
        btn.style.backgroundColor = "#787676"
    }
});