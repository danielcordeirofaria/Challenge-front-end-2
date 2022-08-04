import { produtoServices } from "../servicos/produtos-servicos.js";


const novoProduto = (name, price, imageUrl) => {
    const card = document.createElement("div");
    card.classList.add("boxProdutos__div")
    const conteudo = `
        <div class="boxProdutos">
            <img class="box__imagem" src="${imageUrl}">
            <h3 class="boxProdutos__nome">${name}</h3>
            <h4 class="boxProdutos__preco">${price}</h4>
            <a href="#" class="boxProdutos__verProduto">Ver Produto</a5>
        </div>
        `

    card.innerHTML = conteudo
    return card
}

const produtos = document.querySelector('.produtos')

const render = async() => {
    try{
        const listaProdutos = await produtoServices.listaProdutos()
        listaProdutos.forEach(elemento => {
            produtos.appendChild(novoProduto(elemento.name, elemento.price, elemento.imageUrl))
        });
    }
    catch(erro){
        console.log(erro)
    }
}

render()