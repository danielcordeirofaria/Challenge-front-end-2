var botaoEnviarMensagem = document.querySelector(".about__button")

var erroAboutNome = document.querySelector(".erroAbout__nome")
var erroAboutMensagem = document.querySelector(".erroAbout__mensagem")


botaoEnviarMensagem.addEventListener("click", (evento) => {
    evento.preventDefault()
    //selecionando input senha e email
    var nome = document.querySelector(".about__nome").value
    var mensagem = document.querySelector(".about__mensagem").value
        //testando inputs nos regex

    if( !nome == "" && !mensagem == ""){
        alert("Mensagem Enviada com sucesso")
        window.location.href = "index.html"
    }
    else if(nome == "" && !mensagem == ""){
        var conteudoNome = `<span class="erroAbout__nome">Digite seu nome</span>
        `
        erroAboutNome.innerHTML = conteudoNome
        return erroAboutNome
    }else if(!nome == "" && mensagem == ""){
        var conteudoMensagem = `<span class="erroAbout__mensagem">"A senha deve conter de 6 a 12 caracteres, pelo menos uma letra maúscula, um número e não deve conter símbulos."</span>
        `
        erroAboutMensagem.innerHTML = conteudoMensagem
        return erroAboutMensagem
    }else if( nome == "" && mensagem == ""){
        var conteudoNome = `<span class="erroAbout__nome">Digite seu nome</span>
        `
        erroAboutNome.innerHTML = conteudoNome

        var conteudoMensagem = `<span class="erroAbout__mensagem">Digite uma mensagem</span>
        `
        erroAboutMensagem.innerHTML = conteudoMensagem

        return erroAboutMensagem, erroAboutNome
    }

    })