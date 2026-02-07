// Incrementar 
// i = i + 1 // i = (atual) + 1 => conseguimos alterar a quantidade que ira incrementar + 2 ou + 3...
// i +=  1 // i = (atual) + 1 => conseguimos alterar a quantidade que ira incrementar + 2 ou + 3...
// i++ // i = (atual) + 1 => não podemos alterar a quantidade de incremento 

// Decrementar 
// i = i - 1 // i = (atual) - 1 => conseguimos alterar a quantidade que ira decrementar - 2 ou - 3...
// i -=  1 // i = (atual) - 1 => conseguimos alterar a quantidade que ira decrementar - 2 ou - 3...
// i-- // i = (atual) - 1 => não podemos alterar a quantidade de decremento

function exemploJogos() {

    let jogos = []

    // for (let i = 0; i < 5; i = i + 1)

    for (let i = 0; i < 5; i += 1) {
        let nomeJogo = prompt("Digte o nome do jogo");

        jogos.push(nomeJogo)
    }

    // Apresentar jogos
    let textoParaApresentar = "";
    for (let i = 0; i < 5; i += 1) {
        let nomeJogo = jogos[i];
        textoParaApresentar = textoParaApresentar + nomeJogo + "\n"
    }
    alert("Jogos: " + textoParaApresentar);
}

function calculadora() {

    let numeros = [];

    // Solicitar numeros
    for (let i = 0; i < 4; i += 1) {
        let numero = parseInt(prompt("Difite o numero"));

        // Armazenar no vetor
        numeros.push(numero);

    }
    // Somar numeros

    let somaManual = numeros[0] + numeros[1] + numeros[2] + numeros[3];
    alert("Soma manual:" + somaManual);

    let soma = 0;

    for (let i = 0; i < 4; i += 1) {
        let numero = numeros[i]
        soma = soma + numero;
    }
    alert("Soma Automatica:" + soma);
}

function calculadoraFolhasPagamento() {

    let colaboradores = [];
    let horasTrabalhadas = [];
    let valorPorHora = [];
    let descontos = [];
    let auxilios = [];
    let salariosBrutos = [];
    let salariosLiquidos = [];

    let quantidadeColaboradores = parseInt(
        prompt("Digite a quantidade de colaboradores")
    );

    for (let i = 0; i < quantidadeColaboradores; i++) {

        colaboradores.push(prompt("Digite o nome do colaborador"));
        horasTrabalhadas.push(parseInt(prompt("Digite as horas trabalhadas")));
        valorPorHora.push(parseFloat(prompt("Digite o valor por hora")));

        let desconto = 0;
        if (confirm("Tem descontos?")) {
            desconto = parseFloat(prompt("Digite o valor dos descontos"));
        }
        descontos.push(desconto);

        let auxilio = 0;
        if (confirm("Tem auxílios?")) {
            auxilio = parseFloat(prompt("Digite o valor dos auxílios"));
        }
        auxilios.push(auxilio);
    }

    for (let i = 0; i < quantidadeColaboradores; i++) {
        let salarioBruto = horasTrabalhadas[i] * valorPorHora[i];
        salariosBrutos.push(salarioBruto);
    }

    for (let i = 0; i < quantidadeColaboradores; i++) {
        let salarioLiquido = salariosBrutos[i] - descontos[i] + auxilios[i];
        salariosLiquidos.push(salarioLiquido);
    }

    for (let i = 0; i < quantidadeColaboradores; i++) {

        alert(
            "🧾 Folha de Pagamento\n" +
            "━━━━━━━━━━━━━━━━━━━━\n" +
            "👤 Colaborador: " + colaboradores[i] + "\n" +
            "⏱️ Horas trabalhadas: " + horasTrabalhadas[i] + "\n" +
            "💰 Valor por hora: R$ " + valorPorHora[i].toFixed(2) + "\n" +
            "🟢 Salário bruto: R$ " + salariosBrutos[i].toFixed(2) + "\n" +
            "🔻 Descontos: R$ " + descontos[i].toFixed(2) + "\n" +
            "🎁 Auxílios: R$ " + auxilios[i].toFixed(2) + "\n" +
            "━━━━━━━━━━━━━━━━━━━━\n" +
            "✅ Salário líquido: R$ " + salariosLiquidos[i].toFixed(2) + " 💵"
        );
    }
}

function jogoPalavras() {
    let palavras = ["Roblox", "Free Fire", "GTA"];
    let nomeJogador = prompt("Digite seu nome");
    let quantidadeTentativas = 10;

    if (nomeJogador.toLocaleLowerCase().includes("leticia")) {
        quantidadeTentativas = 3;
    }

    while (quantidadeTentativas >= 0) {
        let nomeJogo = prompt("Tente adivinhar o nome de 3 jogos");
        // Verificando se o nome que o usuario digitou esta dentro da lista
        if (palavras.includes(nomeJogo)) {
            // Dar mais 3 tentativas a cada acerto
            quantidadeTentativas += 3;
            // Como descobrir a posição
            let indiceJogo = palavras.indexOf(nomeJogo);
            // Remover da lista o jogo que acertou
            palavras.splice(indiceJogo, 1);
            console.log(palavras);
            alert(`Acertou ${nomeJogo}`);

            if (palavras.length === 0) {
                alert("Ganhou o jogo");
                break // serve para parar o while
            }
        }
        else {
            // Decrementar em 1
            quantidadeTentativas -= 1;
            alert(`Errou\nVocê tem ${quantidadeTentativas} tentativas restantes `);
        }

        console.log(`Quantidade de tentativas: ${quantidadeTentativas} \nPalavras ${palavras}`);
        if (quantidadeTentativas <= 0) {
            alert("Perdeu o jogo")
            break
        }
    }
}
function alunos() {
    let alunos = [];

    for (let i = 0; i < 13; i += 1) {
        let nomeAluno = prompt("Digite o nome do aluno");
        alunos.push(nomeAluno);
    }

    alert("Qtd de Alunos: " + alunos.length);

    let resultado = "";

    for (let i = 0; i < 13; i += 1) {
        resultado += alunos[i] + "\n";
    }

    let menorNomeAluno = "ajkjajjjjjjjlllkllklllklklklkllklklklklklklk";
    for (let i = 0; i < 13; i += 1) {
        let nomeAlunoPercorrido = alunos[i];
        if (nomeAlunoPercorrido.length < menorNomeAluno.length) {
            menorNomeAluno = nomeAlunoPercorrido
        }
    }
}
alert("Aluno com menor nome:" + menorNomeAluno);
function exemploCorTintas() {
    let tintas = [];
    for (let i = 0; i < 5; i += 1) {
        let nomeTinta = prompt("Digite o nome da tinta");
        tintas.push(nomeTinta);
    }

    let texto = "";
    for (let i = 0; i < 5; i += 1) {
        texto += tintas[i] + "\n";
    }
    alert("Tintas:\n" + texto);

}

function exercicio01() {
    let smartphones = [];

    for (let i = 0; i < 5; i += 1) {
        let nomeSmartphones = prompt("Digite o nome de 5 smartphones")

        smartphones.push(nomeSmartphones);
    }

    let apresentarNomeSmartphones = "";
    for (let i = 0; i < 5; i += 1) {
        apresentarNomeSmartphones += smartphones[i] + "\n";
    }

    alert("Os 5 Smartphones que foram digitados:\n" + apresentarNomeSmartphones)

}

function exercicio02() {
    let smartphones = [];
    let quantidadeEstoque = [];

    for (let i = 0; i < 5; i += 1) {
        let nomeSmartphones = prompt("Digite o nome de 5 smartphones");
        let quantidadeEstoqueSmartphones = prompt("Digite a quantidade que consta em estoque");

        smartphones.push(nomeSmartphones);
        quantidadeEstoque.push(quantidadeEstoqueSmartphones);
    }

    let apresentarNomeQuantidadeSmartphones = "";

    for (let i = 0; i < 5; i += 1) {
        apresentarNomeQuantidadeSmartphones += smartphones[i] + "- " + quantidadeEstoque[i] + "\n";
    }

    alert("Os 5 Smartphones que foram digitados e a quantidade em estoque:\n" + apresentarNomeQuantidadeSmartphones)

}

function exercicio04() {
    let smartphones = [];
    let quantidadeEstoque = [];
    let menorQuantidade = 9999999;

    for (let i = 0; i < 5; i += 1) {
        let nomeSmartphones = prompt("Digite o nome de 5 smartphones");
        let quantidadeEstoqueSmartphones = parseInt(prompt("Digite a quantidade que consta em estoque"));

        smartphones.push(nomeSmartphones);
        quantidadeEstoque.push(quantidadeEstoqueSmartphones);
    }

    let apresentarSmartphones = "";
    let status = "";

    for (let i = 0; i < 5; i += 1) {
                
        if (quantidadeEstoque[i] <= 1) {
            status = "Urgente";

        } else if (quantidadeEstoque[i] <= 4 && quantidadeEstoque[i] >= 2) {
            status = "Preocupante";

        } else if (quantidadeEstoque[i] <= 7 && quantidadeEstoque[i] > 4) {
            status = "Estável";

        } else {
            status = "Elevado";
        }    

        if (quantidadeEstoque[i] < menorQuantidade) {
            menorQuantidade = quantidadeEstoque[i]

        }  
        apresentarSmartphones += smartphones[i] + " - Quant: " + quantidadeEstoque[i] + " - Status: " + status + "\n";
    }


    alert("Os 5 Smartphones que foram digitados e a quantidade em estoque:\n" + apresentarSmartphones)

    alert(`A menor quantidade em estoque é: ${menorQuantidade}`)
}

//  Apresentar o nome do produto que tem o maior estoque
function exercicio05() {
    let smartphones = [];
    let quantidadeEstoque = [];
    let menorQuantidade = 9999999;
    let maiorQuantidade = 0;
    let nomeMaiorQuantidade = "";


    for (let i = 0; i < 5; i += 1) {
        let nomeSmartphones = prompt("Digite o nome de 5 smartphones");
        let quantidadeEstoqueSmartphones = parseInt(prompt("Digite a quantidade que consta em estoque"));

        smartphones.push(nomeSmartphones);
        quantidadeEstoque.push(quantidadeEstoqueSmartphones);
    }

    let apresentarSmartphones = "";
    let status = "";

    for (let i = 0; i < 5; i += 1) {
                
        if (quantidadeEstoque[i] <= 1) {
            status = "Urgente";

        } else if (quantidadeEstoque[i] <= 4 && quantidadeEstoque[i] >= 2) {
            status = "Preocupante";

        } else if (quantidadeEstoque[i] <= 7 && quantidadeEstoque[i] > 4) {
            status = "Estável";

        } else {
            status = "Elevado";

        }    

        if (quantidadeEstoque[i] < menorQuantidade) {
            menorQuantidade = quantidadeEstoque[i];

        }  

        if (quantidadeEstoque[i] > maiorQuantidade){
            maiorQuantidade = quantidadeEstoque[i];
            nomeMaiorQuantidade = smartphones[i];
        }
        
        apresentarSmartphones += smartphones[i] + " - Quant: " + quantidadeEstoque[i] + " - Status: " + status + "\n";
    }
    

    alert("Os 5 Smartphones que foram digitados e a quantidade em estoque:\n" + apresentarSmartphones)

    alert(`A menor quantidade em estoque é: ${menorQuantidade}
A maior quantidade em estoque é: ${maiorQuantidade} do produto ${nomeMaiorQuantidade}`)
}

function exercicio06() {
    let smartphones = [];
    let quantidadeEstoque = [];
    let preco = [];
    let menorQuantidade = 9999999;
    let maiorQuantidade = 0;
    let nomeMaiorQuantidade = "";


    for (let i = 0; i < 5; i += 1) {
        let nomeSmartphones = prompt("Digite o nome de 5 smartphones");
        let quantidadeEstoqueSmartphones = parseInt(prompt("Digite a quantidade que consta em estoque"));
        let smartphonesPreco = parseFloat(prompt("Digite o valor do smartphone"));

        smartphones.push(nomeSmartphones);
        quantidadeEstoque.push(quantidadeEstoqueSmartphones);
        preco.push(smartphonesPreco);
    }

    let apresentarSmartphones = "";
    let status = "";

    for (let i = 0; i < 5; i += 1) {
                
        if (quantidadeEstoque[i] <= 1) {
            status = "Urgente";

        } else if (quantidadeEstoque[i] <= 4 && quantidadeEstoque[i] >= 2) {
            status = "Preocupante";

        } else if (quantidadeEstoque[i] <= 7 && quantidadeEstoque[i] > 4) {
            status = "Estável";

        } else {
            status = "Elevado";

        }    

        if (quantidadeEstoque[i] < menorQuantidade) {
            menorQuantidade = quantidadeEstoque[i];

        }  

        if (quantidadeEstoque[i] > maiorQuantidade){
            maiorQuantidade = quantidadeEstoque[i];
            nomeMaiorQuantidade = smartphones[i];
        }
        
        apresentarSmartphones += smartphones[i] + " - Quant: " + quantidadeEstoque[i] + " - Status: " + status + " - Preço: " + preco[i] + "\n";
    }
    

    alert("Os 5 Smartphones que foram digitados e a quantidade em estoque:\n" + apresentarSmartphones)

    alert(`A menor quantidade em estoque é: ${menorQuantidade}
A maior quantidade em estoque é: ${maiorQuantidade} do produto ${nomeMaiorQuantidade}`)
}

function exercicio07(){

    let produtos = [];

    for(let i = 0;i < 5;i += 1){
        let nomeProdutos = prompt("Digite o nome de 5 produtos");

        produtos.push(nomeProdutos);

    }

    let apresentarProduto = "";

    for(let i = 0;i < 5;i += 1){
        apresentarProduto = produtos[i] + "\n";

    }
    alert(`Produtos:\n ${apresentarProduto}`);

}

function exercicio08(){

    let produtos = [];
    let categoria = [];


    for(let i = 0;i < 5;i += 1){
        let nomeProdutos = prompt("Digite o nome de 5 produtos");
        let nomeCategoria = prompt("Digite a categoria desse produto");


        produtos.push(nomeProdutos);
        categoria.push(nomeCategoria);
        
    }

    let apresentarProduto = "";

    for(let i = 0;i < 5;i += 1){
        apresentarProduto += "Produto: " + produtos[i] + " - Categoria: " + categoria[i] + "\n";
    }
    alert(`Produtos:\n ${apresentarProduto}`);

   
}
function exercicio09(){

    let produtos = [];
    let categoria = [];
    let preco = [];

    for(let i = 0;i < 5;i += 1){
    
        let nomeProdutos = prompt("Digite o nome do produto");
        let nomeCategoria = prompt("Digite a categoria desse produto");
        let precoProduto = parseFloat(prompt("Informe o preço do produto"));


        produtos.push(nomeProdutos);
        categoria.push(nomeCategoria);
        preco.push(precoProduto);
        
    }

    let apresentarProduto = "";

    for(let i = 0;i < 5;i += 1){
        apresentarProduto += "Produto: " + produtos[i] + " - Categoria: " + categoria[i] + " - Preço: " + preco[i] + "\n";
    }
    alert(`Produtos:\n ${apresentarProduto}`);

   
}

function exercicio10(){

    let produtos = [];
    let categoria = [];
    let preco = [];
    let classificacaoPreco = [];

    for(let i = 0; i < 5; i += 1){
    
        let nomeProdutos = prompt("Digite o nome do produto");
        let nomeCategoria = prompt("Digite a categoria desse produto");
        let precoProduto = parseFloat(prompt("Informe o preço do produto"));

        produtos.push(nomeProdutos);
        categoria.push(nomeCategoria);
        preco.push(precoProduto);
    }
    
    for (let i = 0; i < 5; i += 1){
        
        if (preco[i] < 20){
            classificacaoPreco.push("Muito Barato");

        } else if (preco[i] < 50){
            classificacaoPreco.push("Barato");

        } else if (preco[i] < 100){
            classificacaoPreco.push("Médio");

        } else {
            classificacaoPreco.push("Caro");           
        }

    }
    let apresentarProduto = "";

    for(let i = 0;i < 5;i += 1){
        apresentarProduto += "Produto: " + produtos[i] + " | Categoria: " + categoria[i] + " | Preço: " + preco[i] + " | Classificação: " + classificacaoPreco[i] + "\n";
    }
    alert(apresentarProduto);

}

function exercicio11(){

    let produtos = [];
    let categoria = [];
    let preco = [];
    let classificacaoPreco = [];

    for(let i = 0; i < 5; i += 1){
    
        let nomeProdutos = prompt("Digite o nome do produto");
        let nomeCategoria = prompt("Digite a categoria desse produto");
        let precoProduto = parseFloat(prompt("Informe o preço do produto"));

        produtos.push(nomeProdutos);
        categoria.push(nomeCategoria);
        preco.push(precoProduto);
    }

    let maiorValor = 0;
    
    for (let i = 0; i < 5; i += 1){
        
        if (preco[i] < 20){
            classificacaoPreco.push("Muito Barato");

        } else if (preco[i] < 50){
            classificacaoPreco.push("Barato");

        } else if (preco[i] < 100){
            classificacaoPreco.push("Médio");

        } else {
            classificacaoPreco.push("Caro");           
        }

        if (preco[i] < maiorValor) {
            maiorValor = preco[i];
        
        }  
    }
    let apresentarProduto = "";

    for(let i = 0;i < 5;i += 1){
        apresentarProduto += "Produto: " + produtos[i] + " | Categoria: " + categoria[i] + " | Preço: " + preco[i] + " | Classificação: " + classificacaoPreco[i] + "\n";
    }
    alert(apresentarProduto);
        alert(apresentarProduto);
    alert(`O produto com maior preço é: ${maiorValor}`);
}
function exercicio12(){

    let produtos = [];
    let categoria = [];
    let preco = [];
    let classificacaoPreco = [];

    for(let i = 0; i < 5; i += 1){
    
        let nomeProdutos = prompt("Digite o nome do produto");
        let nomeCategoria = prompt("Digite a categoria desse produto");
        let precoProduto = parseFloat(prompt("Informe o preço do produto"));

        produtos.push(nomeProdutos);
        categoria.push(nomeCategoria);
        preco.push(precoProduto);
    }

    let menorValor = 999999;
    let maiorValor = 0;
    let produtoMenorValor = "";
    
    for (let i = 0; i < 5; i += 1){
        
        if (preco[i] < 20){
            classificacaoPreco.push("Muito Barato");

        } else if (preco[i] < 50){
            classificacaoPreco.push("Barato");

        } else if (preco[i] < 100){
            classificacaoPreco.push("Médio");

        } else {
            classificacaoPreco.push("Caro");           
        }

        if (preco[i] > maiorValor) {
            maiorValor = preco[i];
        
        }  

        if (preco[i] < menorValor){
            menorValor = preco[i];
            produtoMenorValor = produtos[i]
        }
    }
    let apresentarProduto = "";

    for(let i = 0;i < 5;i += 1){
        apresentarProduto += "Produto: " + produtos[i] + " | Categoria: " + categoria[i] + " | Preço: " + preco[i] + " | Classificação: " + classificacaoPreco[i] + "\n";
    }
    alert(apresentarProduto);
    alert(`O produto com maior preço é: ${maiorValor}
O produto ${produtoMenorValor} tem o valor de ${menorValor} sendo o produto mais barato`);

}

function exercicio13(){

    let produtos = [];
    let categoria = [];
    let preco = [];
    let classificacaoPreco = [];
    let desconto = [];
    let precoFinal = []; 

    for(let i = 0; i < 5; i += 1){
    
        let nomeProdutos = prompt("Digite o nome do produto");
        let nomeCategoria = prompt("Digite a categoria desse produto");
        let precoProduto = parseFloat(prompt("Informe o preço do produto"));
        let confirmDesconto = confirm("Tem desconto?");
        let valorDesconto = 0;

        if (confirmDesconto == true){
            valorDesconto = parseInt(prompt("Digite o valor do desconto"));
        }

        desconto.push(valorDesconto);
        produtos.push(nomeProdutos);
        categoria.push(nomeCategoria);
        preco.push(precoProduto);
    }

    let menorValor = 999999;
    let maiorValor = 0;
    let produtoMenorValor = "";
    
    for (let i = 0; i < 5; i += 1){
        
        if (preco[i] < 20){
            classificacaoPreco.push("Muito Barato");
        } else if (preco[i] < 50){
            classificacaoPreco.push("Barato");
        } else if (preco[i] < 100){
            classificacaoPreco.push("Médio");
        } else {
            classificacaoPreco.push("Caro");           
        }

        if (preco[i] > maiorValor) {
            maiorValor = preco[i];
        }  

        if (preco[i] < menorValor){
            menorValor = preco[i];
            produtoMenorValor = produtos[i];
        }

        let valorFinal = preco[i] - (preco[i] * desconto[i] / 100);
        precoFinal.push(valorFinal);
    }
    let apresentarProduto = "";
    


    for(let i = 0;i < 5;i += 1){
        apresentarProduto += "Produto: " + produtos[i] + " | Preço: " + preco[i] + " | Desconto: " + desconto[i] + " | Preço Final: " + precoFinal[i] + "\n";
    }
    alert(apresentarProduto);
}

function fibonacciVetor() {
    let quantidade = parseInt(prompt("Digite quantos números de Fibonacci deseja:"));
    let fibonacci = [];

    fibonacci[0] = 0;
    fibonacci[1] = 1;

    for (let i = 2; i < quantidade; i += 1) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    alert(vetor);
    
}

