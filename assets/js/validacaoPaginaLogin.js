var botaoLogin = document.querySelector(".login__entrar")
//var selecionandoMensagemDeErro = document.querySelector(".erroEmail")
var erroEmailDiv = document.querySelector(".erroEmail")
var erroSenhalDiv = document.querySelector(".erroSenha")


botaoLogin.addEventListener("click", (evento) => {
    evento.preventDefault()
    //selecionando input senha e email
    var senha = document.querySelector(".login__senha").value
    var email = document.querySelector(".login__email").value
    //declarando regex senha e email
    const regexpEmail = /\S+@\S+\.\S+/;
    const regExpSenha = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[!@#$%&*_=+-]).{6,12}$") 
    //testando inputs nos regex
    const testeRegexEmail = regexpEmail.test(email)
    const testeRegexSenha = regExpSenha.test(senha)
    if(testeRegexEmail && testeRegexSenha){
        window.location.href = "todos-os-produtos.html"
    }
    else if(!testeRegexEmail || email === '' && testeRegexSenha){
        var conteudo = `<span class="erroEmail">Digite um email válido</span>
        `
        erroEmailDiv.innerHTML = conteudo
        return erroEmailDiv
    }else if(testeRegexEmail && !testeRegexSenha || senha === ''){
        console.log(testeRegexSenha)
        var conteudo = `<span class="erroSenha">"A senha deve conter de 6 a 12 caracteres, pelo menos uma letra maúscula, um número e não deve conter símbulos."</span>
        `
        erroSenhalDiv.innerHTML = conteudo
        return erroSenhalDiv
    }

    })