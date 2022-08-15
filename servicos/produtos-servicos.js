//GET

const listaProdutos = () => fetch ( "http://localhost:3000/produto" ).then(resposta => resposta.json())

//POST

const criaProdutos = (name, imageUrl, price) => {
    return fetch ( `http://localhost:3000/produto`, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            name, 
            imageUrl, 
            price,
        })
    })
    .then(resposta => {
        if(resposta.ok){
            return resposta.body
        }
        throw new Error("Não foi possível criar produto")
    })
}

const deletaProduto = (id) =>{
    return fetch ( `http://localhost:3000/produto/${id}`, {
        method: 'DELETE'
    })

}

export const produtoServices = {
    listaProdutos,
    criaProdutos,
    deletaProduto
}