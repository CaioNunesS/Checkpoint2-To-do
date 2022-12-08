// captando elementos DOM

let nomeUsuario = document.getElementById("userName");
let encerrar = document.getElementById("closeApp");
let inserirTarefa = document.getElementById("novaTarefa");
let btnInserir = document.getElementById("inserir");
let tarefasPendentes = document.querySelector(".tarefas-pendentes")
let token = sessionStorage.getItem("jwt")

// Função de inicio da pagina(não deixa abrir sem o token; carrega a lista de tarefas do usuário)
document.addEventListener("DOMContentLoaded", function (){
    if(!token){
        window.location.href = "index.html"
    }else{
        capturaDados()      
}

async function capturaDados(){
    let requestDados ={
        headers:{
            "authorization": token
        }
    }
    let dadosUser = await fetch(`${baseUrl()}/users/getMe`, requestDados);
    let dadosUser2 = await dadosUser.json();
    insereNome(dadosUser2)
    
    
    }
// função que insere o nome do usuário
 function insereNome(nome){
    nomeUsuario.innerText = `${nome.firstName} ${nome.lastName}`
 } 

})

encerrar.addEventListener("click", function(){
    let confirma = confirm("Tem certeza que deseja sair?")
    if(confirma){
    sessionStorage.removeItem("jwt")
    window.location.href = "index.html"}
})


