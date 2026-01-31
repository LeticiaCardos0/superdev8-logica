
function exemplo() {
    let indice = 0;

    while (indice < 4) {
        let nome = prompt("Digite o nome");
    }

    indice = indice + 1;

    // exemplo transformando while em for

    for (let indice = 0; indice < 4; indice = indice + 1) {
        let nome = prompt("Digite o nome: ");

    }
}
// só pode ser usado quando sabemos a quantidade(predefinida ou quatidade digitada pelo usuario), não pode se usado quando pedimos para o usuario algo para sair(ex: sair)

function relogio() {
    //declara variavel; condição ;
    for (let hora = 0; hora < 24; hora = hora + 1) {
        for (let minuto = 0; minuto < 60; minuto = minuto + 1) {
            for (let segundo = 0; segundo < 60; segundo = segundo + 1) {
                alert(hora + ":" + minuto + ":" + segundo);
            }
        }
    }
}


function solicitarDadosPaciente() {
    let quantidadePacientes = parseInt(prompt("Digite a quantidade"));

    for (let indice = 0; indice < quantidadePacientes; indice++) {
        let nome = prompt("Digite o nome do paciente");
        let idade = parseInt(prompt("Digite a idade do paciente"));
        let peso = parseFloat(prompt("Digite o peso do paciente"));
        let altura = parseFloat(prompt("Digite a altura do paciente"));
    }
}


function exemploContagemRegressiva() {
    // declarar variável; condição; decrementar
    for (let indice = 10; indice >= 0; indice = indice - 1) {
        alert(indice);
    }
    alert('feliz ano novo!')
}

function apresentarNumerosParesAte1000() {
    for (let i = 0; i <= 1000; i = i + 1) {
        if (i % 2 == 0) {
            alert(i);
        }
    }

    for (let i = 0; i <= 1000; i = i + 1) {
        alert(i);
    }
}

function teste01() {

    let soma = 0;

    let quant = parseInt(prompt("Quantos numero você deseja cadastrar?"))

    for (let indice = 1; indice <= quant; indice++) {
        let numero = parseInt(prompt("Digite o " + indice + "º que deseja cadastrar"));

        soma = soma + numero;

    }

    let media = 0;
    media = soma / quant.toFixed(2);

    alert(`A soma dos numeros digitados ${soma}
           A media é: ${media}`);

}
function teste04() {

    let maiorNumero = 0;
    let menorNumero = 99999;

    for (let indice = 1; indice <= 10; indice++) {
        let numero = parseInt(prompt(`  
INFORME 10 NUMEROS:
            Digite o ` + indice + ` º numero`));

        if (numero > maiorNumero) {
            maiorNumero = numero
        }
        if (numero < menorNumero) {
            menorNumero = numero
        }
    }
    alert(`O maior numero é: ${maiorNumero}
O menor numero é: ${menorNumero}`);
}

function teste05() {
    let somaNota = 0;
    let media = 0;

    for (let indice = 1; indice <= 4; indice++) {
        let nota = parseInt(prompt("Digite a " + indice + "ª nota do aluno"));

        somaNota = somaNota + nota;

    }

    media = (somaNota / 4).toFixed(2);

    alert(`A média final do aluno é: ${media}`);
}

function teste06() {
    
    let impar = 0;
    let par = 0;
    
    for (let indice = 1; indice <= 10; indice++) {
        let numero = parseInt(prompt(`  
INFORME 10 NUMEROS:
            Digite o ` + indice + ` º numero`));

            if (numero % 2 === 0) {
            par++
        } else {
            impar++
        }

    }
    alert(`A quantidade de numeros pares é: ${par}
A quantidade de numeros impares é: ${impar}`);
}


