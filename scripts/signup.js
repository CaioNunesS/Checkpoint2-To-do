///Desativando botão de criar conta

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