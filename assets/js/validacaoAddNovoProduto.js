var divParaErroUrl = document.querySelector(".divParaErroUrl")

var divParaErroProduto = document.querySelector(".divParaErroProduto")

var divParaErroPreco = document.querySelector(".divParaErroPreco")

var selecionandoInputUrl = document.querySelector(".adicionarNovoProduto__dadosNovosProtudosUrl")

var selecionandoInputProduto = document.querySelector(".adicionarNovoProduto__dadosNovosProtudosNome")

var selecionandoInputPreco = document.querySelector(".adicionarNovoProduto__dadosNovosProtudosPreco")
var precoEmNumero = parseInt(selecionandoInputPreco.value)

var eventoOnblurInputUrl = selecionandoInputUrl.addEventListener("blur", () => {
    if(selecionandoInputUrl.value == ""){
        var conteudo = `<span class="erroUrl">Digite uma Url</span>
        `
        divParaErroUrl.innerHTML = conteudo
        return divParaErroUrl
    } else if (!selecionandoInputUrl.value == ""){
        var selecionandoErro = document.querySelector(".erroUrl")
        selecionandoErro.remove()
    }
})

var eventoOnblurInputProduto = selecionandoInputProduto.addEventListener("blur", () => {
    if(selecionandoInputProduto.value == ""){
        var conteudo = `<span class="erroProduto">Digite o nome do produto</span>
        `
        divParaErroProduto.innerHTML = conteudo
        return divParaErroProduto
    } else if (!selecionandoInputProduto.value == ""){
        var selecionandoErro = document.querySelector(".erroProduto")
        selecionandoErro.remove()
    }
})

var eventoOnblurInputPreco = selecionandoInputPreco.addEventListener("blur", () => {
    if(isNaN(precoEmNumero)){
        var conteudo = `<span class="erroPreco">Digite um preço</span>
        `
        divParaErroPreco.innerHTML = conteudo
        return divParaErroPreco
    } else if (precoEmNumero == 100){
        var selecionandoInputPreco = document.querySelector(".erroPreco")
        selecionandoInputPreco.remove()
    }
})