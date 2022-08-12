var botaoLogin = document.querySelector(".login__entrar")

//var selecionandoMensagemDeErro = document.querySelector(".erroEmail")
var erroEmailDiv = document.querySelector(".erroEmail")
var erroSenhalDiv = document.querySelector(".erroSenha")

//Selecionando campos input
var email = document.querySelector(".login__email")
var senha = document.querySelector(".login__senha")

//declarando regex senha e email
const regexpEmail = /\S+@\S+\.\S+/
const regExpSenha = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[!@#$%&*_=+-]).{6,12}$")




botaoLogin.addEventListener("click", (evento) => {
    evento.preventDefault()
    const testeRegexEmail = regexpEmail.test(email.value)
    const testeRegexSenha = regExpSenha.test(senha.value)


    if(testeRegexEmail && testeRegexSenha){
        window.location.href = "todos-os-produtos.html"
    }
})

email.addEventListener("blur", (evento) => {
    //testando input no regex
    const testeRegexEmail = regexpEmail.test(email.value)

    if(!testeRegexEmail || email == ''){
        var conteudo = `<span class="erroEmail">Digite um email válido</span>
        `
        erroEmailDiv.innerHTML = conteudo
        return erroEmailDiv
    }else if(testeRegexEmail){
        var erroEmail = document.querySelector(".erroEmail")
        erroEmail.remove()
    }
})

senha.addEventListener("blur", (evento) => {
    //testando input no regex
    const testeRegexSenha = regExpSenha.test(senha.value)

    if (!testeRegexSenha || senha.value == '') {
        var conteudo = `<span class="erroSenha">"A senha deve conter de 6 a 12 caracteres, pelo menos uma letra maúscula, um número e não deve conter símbulos."</span>
        `
        erroSenhalDiv.innerHTML = conteudo
        return erroSenhalDiv
    } else if(testeRegexSenha){
        console.log( senha.value)
        var erroSenha = document.querySelector(".erroSenha")
        erroSenha.remove()
    }


})
