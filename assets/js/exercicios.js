function exercicio01() {
    let indice = 0;

    while (indice < 5) {

        const nome = prompt("Informe o nome do aluno:");

        indice = indice + 1;

        alert("Aluno Cadastrado: " + nome);

    }

    alert("Cadastro Finalizado")

}

function exercicio02() {
    let indice = 0;


    while (indice <= 3) {
        let cor = prompt(`
Digite Suas Cores Favoritas:
        - Digite uma cor:`);

        indice = indice + 1;
    }
    alert("Obrigado por informar suas cores favoritas");
}

function exercicio03() {
    let indice = 0;

    while (indice <= 2) {

        let destino = prompt(`
Digite 3 cidade para onde você gostaria de viajar:
        - Digite o nome da cidade:`);

        indice = indice + 1;

        alert("Destino " + indice + ": " + destino);
    }

    alert("Planejamento de viagem concluído!");
}

function exercicio04() {
    let indice = 0;
    let soma = 0;

    while (indice <= 4) {

        let numeros = parseInt(prompt("Digite 5 numeros inteiros:"));

        indice = indice + 1;

        soma = soma + numeros;

    }

    alert("Soma Total: " + soma);
}

function exercicio05() {
    let indice = 0;

    while (indice <= 2) {
        let filme = prompt(`
Digite Seus 3 Filmes Favoritos:
        - Digite o nome do filme:`);


        let ano = prompt(`
Digite Seus 3 Filmes Favoritos:
        - Digite o ano de lançamento do filme:`);

        indice = indice + 1;

        alert("Filme: " + filme +
            "\nAno: " + ano +
            "\nCadastrado com Sucesso!"
        );
    }

    alert("Lista de filmes cadastrada com sucesso")

}

function exercicio06() {
    let indice = 0;
    let soma = 0;
    let media = 0;

    while (indice < 5) {

        let numeros = parseInt(prompt("Informe um numero:"));

        indice = indice + 1;

        soma = soma + numeros;
        media = soma / 5;
    }

    alert("A soma dos numeros é: " + soma +
        "\nA media é: " + media)
}

function exercicio07() {
    let indice = 0 ;
    let soma = 0;
    let comissao = 0;

    while (indice < 6 ) {

        let vendas = parseInt(prompt("Informe o valor de 6 vendas realizadas:"))
        
        indice = indice + 1;
        
        soma = soma + vendas
        comissao = soma * 0.05
    }

    alert ("O valor total de vendas é : R$" + soma +
           "\nO valor da comissão é: R$" + comissao.toFixed(2)
    );
}

function exercicio08() {
    
    let numero = 0;
    let indice = 0;

    
    while (indice < 10) {
        
        let numero = parseInt(prompt("Infome um numero:"))

        indice = indice + 1;

        if (numero % 2 === 0){
            alert("Este numero é par")

        } else {
            alert("Este numero é impar")

        }
    }
}

function exercicio09() {

    let indice = 0;
    let numero = parseInt(prompt("Informe um numero:"));
    let result = 0;

    while (indice < 10) {

        indice = indice + 1;
        result = numero * indice;

        alert (numero + " x " + indice + " = " + result);

    }
}

function exercicio10() {
    
    let numero = 0;
    let indice = 0;
    let impar = 0;
    let par = 0;
    
    while (indice < 10) {
        
        let numero = parseInt(prompt("Infome um numero:"))

        indice = indice + 1;

        if (numero % 2 === 0){
            alert("Este numero é par")

            par = par + 1;

        } else {
            alert("Este numero é impar")

            impar = impar + 1;

        }
    }
    alert (par + " Foram numero pares\n" +
           impar + " Foram numero impares")
          
}

function exercicio11() {

    let indice = 1;
    let nota = 0;
    let somaNota = 0;
    let media

    while (indice < 5 ) {
        let nota = parseInt(prompt("Digite a " + indice + "ª nota"))

        indice = indice + 1 

        somaNota = somaNota + nota;

        media = somaNota / indice;
    }

    if (media >= 7) {
        alert ("Aluno Aprovado")
    } else {
        alert ("Aluno Reprovado")

    }
}

function exercicio12() {

    let indice = 0;
    let valor = 0;
    let totalCompra = 0;
    let desconto = 0;
    let valorTotal = 0;

    while (indice < 5){
      let valor = parseInt(prompt("Informe o valor de 5 produtos:"));
        indice = indice + 1

        totalCompra = totalCompra + valor
        
    }
        if (totalCompra > 200) {
            desconto = totalCompra * 0.1;
            valorTotal = totalCompra - desconto;

            alert("O valor total da compra sem o desconto é R$" + totalCompra);
            
            alert("O valor total da compra com o desconto é R$" + valorTotal);
            
        } else {
            alert("O valor total da compra sem o desconto é R$" + totalCompra);
        
    }
}