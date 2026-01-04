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

function exercicio13() {
    let indice = 0;
    let somaIdade = 0;
    let mediaIdade = 0;
    let status = 0;
    
    while (indice < 6){
        let idade = parseInt(prompt("Informe a idade de 6 pessoas: "));
        indice = indice + 1;

        if (idade >= 18) {
            alert("Maior de Idade")
        } else {
            alert("Manor de Idade")
        }
        
        somaIdade = somaIdade + idade;
        mediaIdade = somaIdade / indice;
    }

    alert ("A media entre as idades informadas é " + mediaIdade.toFixed(0));
}

function exercicio14() {
    let indice = 0;
    let salario = 0;
    let somaSalario = 0;
    let mediaSalario = 0;
    let mediaSalarioText = "";
    let maiorSalario = 9999;
    let menorSalario = 0;

    while(indice < 5){
        indice = indice + 1;
    
        let salario = parseInt(prompt("Informe 6 salarios: "))

        somaSalario = somaSalario + salario;
        mediaSalario = somaSalario / indice;
        
        if(menorSalario < salario){
            menorSalario = salario
        };
        
        if(maiorSalario > salario){
            maiorSalario = salario
        };
        
        if (mediaSalario > 3000 ){
        mediaSalarioText = "Salários acima da média";
        } else {
        mediaSalarioText = "Salários dentro da média";
        }
    }
    alert ("O menor salario é:R$ " + menorSalario.toFixed(2) +
           "\nO maior salario é:R$ " + maiorSalario.toFixed(2) + 
           "\n" + mediaSalarioText + ":R$ " + mediaSalario.toFixed(2));
}

function exercicio15() {
    debugger
    let totalContas = 0;
    let metRenda = 0;
    let statusRenda = "";
    let perctRenda = 0;
   
    let contAgua = parseFloat(prompt(`
Resumo de Gastos:
        - Digite o valor pago na conta de Água:`));    
    let contLuz = parseFloat(prompt(`
Resumo de Gastos:
        - Digite o valor pago na conta de Luz:`));    
    let contInternet = parseFloat(prompt(`
Resumo de Gastos:
        - Digite o valor pago na conta de Internet:`));    
    let contAluguel = parseFloat(prompt(`
Resumo de Gastos:
        - Digite o valor pago na conta de Aluguel:`));    
    
    totalContas = (contAluguel + contInternet) + (contAgua + contLuz);

    let renda = parseFloat(prompt("Informe sua renda mensal: "));
    
    metRenda = renda / 2

    if (totalContas > metRenda){
        statusRenda = "Orçamento comprometido"
    } else {
        statusRenda = "Orçamento saudável"
    }

    perctRenda = (totalContas / renda) * 100

    alert("RESUMO CONTAS" +
          "\nTotal Contas: R$" + totalContas.toFixed(2) +
          "\nSuas Contas Representam " + perctRenda.toFixed(0) + "% = " + statusRenda);

}

function exercicio16(){
    let indice = 0;
    let somaAltura = 0;
    let mediaAltura = 0;
    let maiorAltura = 0;
    
    while (indice < 5){
    let altura = parseFloat(prompt("Informe a altura de 5 pessoas: "))   

    indice = indice + 1;

    if (altura > maiorAltura) {
        maiorAltura = altura
    }
   }
   alert("A maior altura é " + maiorAltura.toFixed(2));
}
function exercicio17(){
    let indice = 0;
    let maiorPeso = 0;
    
    while (indice < 4) {
        let peso = parseInt(prompt("Informe o peso de 4 pessoas"));
        indice = indice + 1;

        if (peso > maiorPeso){
            maiorPeso = peso;
        }
    }
    alert("O maior peso é " + maiorPeso);
}

function exercicio18(){
    let indice = 0;
    let maiorIdade = 0;
    let nomeMaiorIdade =0;
    
    while (indice < 1){

        let nome1 = prompt(`
Informe o nome e idade de 5 pessoas:
            - Digite o primeiro nome:`);
        let idade1 = parseInt(prompt(`
Informe o idade e idade de 5 pessoas:
            - Digite o idade da primeira pessoa:`));
            if (idade1 > maiorIdade){
                maiorIdade = idade1;
                nomeMaiorIdade = nome1;
            }

        let nome2 = prompt(`
Informe o nome e idade de 5 pessoas:
            - Digite o segundo nome:`);
        let idade2 = parseInt(prompt(`
Informe o idade e idade de 5 pessoas:
            - Digite o idade da segunda pessoa:`));
            if (idade2 > maiorIdade){
                maiorIdade = idade2;
                nomeMaiorIdade = nome2;
            }

        let nome3 = prompt(`
Informe o nome e idade de 5 pessoas:
            - Digite o terceiro nome:`);
        let idade3 = parseInt(prompt(`
Informe o idade e idade de 5 pessoas:
            - Digite o idade da terceira pessoa:`));
            if (idade3 > maiorIdade){
                maiorIdade = idade3;
                nomeMaiorIdade = nome3;
            }

        let nome4 = prompt(`
Informe o nome e idade de 5 pessoas:
            - Digite o quarto nome:`);
        let idade4 = parseInt(prompt(`
Informe o idade e idade de 5 pessoas:
            - Digite o idade da quarta pessoa:`));
            if (idade4 > maiorIdade){
                maiorIdade = idade4;
                nomeMaiorIdade = nome4;
            }

        let nome5 = prompt(`
Informe o nome e idade de 5 pessoas:
            - Digite o quinto nome:`);
        let idade5 = parseInt(prompt(`
Informe o idade e idade de 5 pessoas:
            - Digite o idade da quinta pessoa:`));
            if (idade5 > maiorIdade){
                maiorIdade = idade5;
                nomeMaiorIdade = nome5;
            }

        indice = indice + 1;
    }
    alert (nomeMaiorIdade + " tem a maior idade = " + maiorIdade + " anos")
}