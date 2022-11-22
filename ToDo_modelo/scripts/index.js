/* Email: Deve possuir um formato válido (RegExp) */

email.addEventListener("focus", function () {
    console.log("Clicou no campo");
    email.style.backgroundColor = "#CDC6C68D"
});

email.addEventListener("keyup", function () {

    let emailValidacao = document.getElementById("inputEmail");
    email.style.backgroundColor = "#FFFFFF"

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        //Sucesso na validação
        email.style.border = ""
        emailValidacao.innerText = ""
        email.style.border = "solid 1.5px #13A02D";
        //Habilitando o botão de salvar
        btn.removeAttribute("disabled");
        btn.style.backgroundColor = "#0b5ed7"

    } else {
        //Falha na validação
        email.style.border = "solid 1.5px #D8341B";
        nomeValidacao.innerText = "Informe no mínimo 4 caracteres";
        emailValidacao.style.color = "#D8341B";
        emailValidacao.style.fontWeight = "bold";
        btn.setAttribute("disabled", true);
        btn.style.backgroundColor = "#787676"
    }
});