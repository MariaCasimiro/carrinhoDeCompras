let carrinho = []   
let valorTotal = document.getElementById("valor-total") ;

function adicionar() {
    let produto = parseFloat(document.getElementById("produto").value);
    let listaProdutos = document.getElementById("lista-produtos");
    let quantidade = parseFloat(document.getElementById("quantidade").value);

    //condicional para o cliente escolher uma quantidade valida
    if (isNaN(quantidade) || quantidade<=0){
        alert("Porfavor, adicione uma quantidade entre 1 e 100.");
        
    } else{
        //como no HTML o produto é o seu valor, defini o produto Escolhido aqui.
        var produtoEscolhido = ""; // var para que a variavel fique global
            if (produto == 3500){
                var produtoEscolhido = "Video-Game";
            }else if (produto == 100){
                var produtoEscolhido = "Fones de Ouvido";
            }else if (produto == 5000){
                var produtoEscolhido = "Oculos VR";
            }else if (produto == 1400){
                var produtoEscolhido = "Celular";
            }
        
        //adiciona os produtos ao carrinho criando uma div no HTML
        let novoProduto = document.createElement("div");
            novoProduto.innerHTML = `<span class="texto-azul">${quantidade}x - <span>${produtoEscolhido}<span class="texto-azul"> R$${produto} </span>`;
            listaProdutos.appendChild(novoProduto);

        // adiciona os produtos na array carrinho para ser possivel armazenar as quantidades e valores
        let preco =  quantidade * produto;
        let produtoCarrinho = {
            nome: produtoEscolhido,
            quantidade: quantidade,
            subtotal: preco
        }
        carrinho.push(produtoCarrinho);

        totalAPagar(); 

        // 'zera' o input da quantidade
        document.getElementById("quantidade").value = "";
    }
}

function totalAPagar(){
    let total = 0;
    // busca na array carrinho todos os subtotais juntando ao total e retorna o valorTotal
    for (let i = 0; i < carrinho.length; i++) {
        total += carrinho[i].subtotal;
    }
    valorTotal.innerHTML = total;
}

function limpar() {
    // zera tudo
    carrinho = [];
    document.getElementById("quantidade").value = "";
    document.getElementById("lista-produtos").innerHTML = ""; 
    document.getElementById("valor-total").value = ""; 
    valorTotal.innerHTML = "0000";
}

