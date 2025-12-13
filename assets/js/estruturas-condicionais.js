//Operadores Relacionais 
// == Igual Valor
// === Igual valor e tipo
// > Maior 
// >= Maior ou Igual
// < Menor 
// <= Menor ou Igual
// != Diferente 

function exemploBasico(){

    let idade

    //se a idade for menor que 18
    if (idade < 18) {
        alert("Menor de Idade");
    } else if (idade < 65) { // senão se a idade for menor que 65
        alert ("Adulto")
    } else {
        alert("Idoso") //senão
    }
}

// Operadore Logicos
// && e
// ||  Ou

//Tabela Verdade do Operador Logico E
// V ou V = V
// V ou F = F
// F ou V = F 
// F ou F = F


function exemploE(){
    let nivel = 2;

    // nivel 0 ... 10 é bronze
    // nivel 10 ... 20 é prata
    // nivel 20 ... 30 é ouro

    if (nivel >= 0 && nivel <=0){
        alert("Elo Bronze")
    }
}

//Tabela Verdade do Operador Logico Ou
// V ou V = V 
// V ou F = V
// F ou V = V 
// F ou F = F

function exemploOu(){
    let idade = 12 ;
    let estudante = true ;

    if (idade < 18 || estudante === true) {
        alert("Pode comprar meio ingresso")
    } else {
        alert("Não pode comprar meio ingresso")
    }
}

function exemploIncremento(){
    let quantidadeAdulto = 0 , quantidadeIdoso = 0;

    let nome1 = prompt("Digite o nome da primeira pessoa");
    let idade1 = parseInt(prompt("Digite a Idade de " + nome1 + ":"));

    if (idade1 < 65){
        quantidadeAdulto = quantidadeAdulto + 1 ;
    } else {
        quantidadeIdoso = quantidadeIdoso + 1 ;
    }
    
    let nome2 = prompt("Digite o nome da primeira pessoa");
    let idade2 = parseInt(prompt("Digite a Idade de " + nome2 + ":"));

    if (idade2 < 65){
        quantidadeAdulto = quantidadeAdulto + 1 ;
    } else {
        quantidadeIdoso = quantidadeIdoso + 1 ;
    }
    
    let nome3 = prompt("Digite o nome da primeira pessoa");
    let idade3 = parseInt(prompt("Digite a Idade de " + nome3 + ":"));

    if (idade3 < 65){
        quantidadeAdulto = quantidadeAdulto + 1 ;
    } else {
        quantidadeIdoso = quantidadeIdoso + 1 ;
    }
    
    alert(
        "Pessoa 1\nNome: " + nome1 + " | Idade: " + idade1 + "anos\n\n" +
        "Pessoa 2\nNome: " + nome2 + " | Idade: " + idade2 + "anos\n\n" +
        "Pessoa 3\nNome: " + nome3 + " | Idade: " + idade3 + "anos\n\n" +
        "Resumo:\n" +
        "Quantidade de Adultos: " + quantidadeAdulto + "\n" +
        "Quantidade de Idosos: " + quantidadeIdoso 
    );
}

function somaNumeros(){

    let soma = 0;
    
    const numero4 = parseInt(prompt("Digite o numero 4:"));
    soma = soma + numero1;

    const numero1 = parseInt(prompt("Digite o numero 1:"));
    soma = soma + numero2;

    const numero2 = parseInt(prompt("Digite o numero 2:"));
    soma = soma + numero3;

    const numero3 = parseInt(prompt("Digite o numero 3:"));
    soma = soma + numero4;

    const media = soma / 4;

    alert ("Soma: " + soma + "\nMédia: " + media);

}

