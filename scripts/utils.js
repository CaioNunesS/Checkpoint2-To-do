function normalizaEmail(entrada){
    entrada.toLowerCase()
    return entrada.trim();
    
};

function normalizaSenha(senha){
    return senha.trim()
    
};

function baseUrl(){
    return "http://todo-api.ctd.academy:3000/v1"
};

function normalizeLastName(sobrenome){
    return sobrenome.trim() 
};

function normalizeInputName(nome){
    return nome.trim()  
};