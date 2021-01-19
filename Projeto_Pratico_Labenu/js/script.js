function cadastroEmail(){
  var email = document.querySelector(".fill").value;

  if (email == "" || email.length < 4) {
    alert('Por favor, preencha o campo de email');
  } else if (validaEmail(email) == false){
    alert('Email Inválido. Por favor, verifique a digitação e preencha corretamente');    
  } else {
    alert(`O email ${email} foi enviado!`);
    document.querySelector(".mensagem").innerHTML = `Bem vindo(a) ${email}!`;
  }
}

function validaEmail(email){
  if (email.indexOf('@')== -1 || email.indexOf('.')== -1 || email.indexOf(' ')!= -1){
    return false;
  }
}