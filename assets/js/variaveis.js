
//Padrao de nomenclatura de função em JS é camel case//
function exemploVariaveisTexto(){
    const produto1 = "Xbox";
    const produto2 = "Gameboy Color";

    //Concatenado a varia produto1 com espaço e depois com produto2//
    const produtos = produto1 + " " + produto2;
    alert("Produto: " + produtos);
}

function exemploVariaveisInteiro(){
    const numero1 = 18;
    const numero2 =  147;
 
    //const soma = 18 + 147 => 165
    // + linha abaixo ele esta fazendo uma soma
    const soma = numero1 + numero2;

    // + linha abaixo ele esta fazendo uma concatenação
    alert("soma: " + soma);

}

function exemploVariavelFloat(){
    const quantidadeHoras = 10;
    const valorHora = 2.30;
    const salarioBruto = quantidadeHoras * valorHora;
    
    alert("Salario bruto: " + salarioBruto)
}

function exemploVariaveisBoolean(){
    // let: permite reatrubuir o valor da variavel depos de criada.
    // const: não permire reatribuir o valor, apenas a leitura (o vinculo é constante)
    
    let lorenzoFechouAba =  false;
    lorenzoFechouAba = true;

    alert("Lorenxo fechou a aba: " + lorenzoFechouAba)

}


function exemploVariaveis(){
    const destino = "Maceió";
    const quantidadeDias = "20"
    const precoDiaria = 1300.1;
    let finalizadoCompra = false;

    let valorTotal = quantidadeDias * precoDiaria;

    // Usuario finalizou a compra

    finalizadoCompra = true;

    alert(
        "Destino: " + destino +
        "\nQuantidade de dias: " + quantidadeDias +
        "\nPreço Diária: " + precoDiaria +
        "\nFinalizar compra: " + finalizadoCompra +
        "\nValor Total: R$ " + valorTotal

    );

}