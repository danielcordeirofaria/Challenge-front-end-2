import { produtoServices } from "../servicos/produtos-servicos.js";

const form = document.getElementById("form");
form.addEventListener("submit", (evento) => {

    evento.preventDefault()

    const name = document.querySelector(".adicionarNovoProduto__dadosNovosProtudosNome").value
    console.log(name)

    const url = document.querySelector("[data-url]").value
    console.log(url)

    const price = document.querySelector("[data-preco]").value
    console.log(price)
    
    produtoServices.criaProdutos(name, url, price).then(resposta => {
        window.location.pathname = "/index.html"
        console.log(resposta)
    }).catch (err =>{
        console.log(err)
    })
})

