function startSpinner(){
    let btn = document.getElementById("botao");
    btn.innerHTML = `
    <svg class="spinner" id="botao1" width="20px" height="20px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
   <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
</svg>`
}

function stopSpinner(){
    setTimeout(() => {
        let btn = document.getElementById("botao")
    btn.innerHTML = ""
    btn.innerText = "Acessar"
        
    }, 2000);
    
}

function startSpinnerSigup(){
    let btn = document.getElementById("btn");
    btn.innerHTML = `
    <svg class="spinner" id="botao1" width="20px" height="20px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
   <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
</svg>`
}

function stopSpinnerSignup(){
    setTimeout(() => {
        let btn = document.getElementById("btn")
    btn.innerHTML = ""
    btn.innerText = "Acessar"
        
    }, 2000);
    
}