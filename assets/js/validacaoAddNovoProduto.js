var divParaErroUrl = document.querySelector(".divParaErroUrl")

var selecionandoInputUrl = document.querySelector(".adicionarNovoProduto__dadosNovosProtudosUrl")

var eventoOnblurInputUrl = selecionandoInputUrl.addEventListener("blur", () => {
    if(selecionandoInputUrl.value == ""){
        console.log("sem string digitado")
        var conteudo = `<span class="erroUrl">Digite uma Url</span>
        `
        divParaErroUrl.innerHTML = conteudo
        return divParaErroUrl
    } else if (!selecionandoInputUrl.value == ""){
        console.log("com string digitado")
        var selecionandoErroUrl = document.querySelector(".erroUrl")
        selecionandoErroUrl.remove()
    }
})

