
import { produtoServices } from "../servicos/produtos-servicos.js";

const novoProduto = (name, price, imageUrl) => {
    const card = document.createElement("div");
    card.classList.add("boxProdutos__div")
    const conteudo = `
        <div class="boxProdutos">
            <div class="box__deletaEEdita">
                <form class="form" type="button">
                    <input type="image" src="./assets/imagens/iconeDeLixeira.png" id="lixeira" class="box__lixeira" data-box__lixeira></input>
                    <input type="image" src="./assets/imagens/iconeDeEdicao.png" class="box__editar"></input>
                </form>
            </div>
            <img class="box__imagem" src="${imageUrl}" alt="img">
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


const selecionandoForm = document.querySelector(".form")
selecionandoForm.addEventListener("click", (evento) => {
    evento.preventDefault()
    console.log("consegui")
})



var selecaoBotaoDeletar = document.querySelector(".box__lixeira")
console.log(selecaoBotaoDeletar)

selecaoBotaoDeletar.addEventListener("click", (evento) => {
    evento.preventDefault()
    console.log("deu certo")
})

var botaoEditar = document.querySelector(".box__editar")

botaoEditar.addEventListener("click", (evento)  => {
    evento.preventDefault()
    console.log("deucerto")
})

