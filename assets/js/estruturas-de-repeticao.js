function exemploWhile(){
    let indice = 0
    //Enquanto o indice for menor que 3 ele repete
    while (indice < 3){

    let nome = prompt("Digite o nome da");
    
        // incremente a variavel indice em 1, ou seja, adicionar 1
    indice = indice + 1;   
    }    
    alert("obrigada")
}

function exemploCalcularMedia(){
    let somaNotas = 0;
    let indice =0;

    while (indice < 3){
        let nota = parseFloat(prompt("Digite a nota"));

        somaNotas = somaNotas + nota;

        indice = indice + 1;
    }
    
    const media = somaNotas / 3;
    alert("Media: " + media)

}

function exemploVerificarAprovado(){
    let somaNotas = 0;
    let indice =0;

    while (indice < 3){
        let nota = parseFloat(prompt("Digite a nota"));

        somaNotas = somaNotas + nota;

        indice = indice + 1;
    }
    
    const media = somaNotas / 3;

    let status ="";

    if (media <= 5){
        status = "Reprovado";
    } else {
        status = "Aprovado"
    }

    alert("Media: " + media + "\nStatus: " + status);
}

function exemploMaiorValor(){
    debugger
    let indice = 0;
    let mairoAltura = 0;

    while (indice < 5){
        let altura = parseFloat(prompt("Insira a altura"));

        if (altura > mairoAltura){
            mairoAltura = altura;
        }
        
        indice = indice + 1;
    }
    
    alert("Maior altura é: " + mairoAltura);
}

function exemploMenorValor(){
    let indice = 0;
    let menorNumero = 999999; //Precisa ser um numero grande, se for 0 a resposta sempre sera 0

    //while (indice < 4 )
    while (indice <= 3) {
        let numero = parseInt(prompt("Digite o numero:"));


        if (numero < menorNumero) {
            menorNumero = numero;

        }

        indice = indice + 1;

        alert("Menor numero: " + menorNumero);
    }
}

function exemploDescobrirQueMaiorValor(){
    let indice = 0;
    let maiorPreco = 0;
    let produtoMaiorPreco = "";

    while (indice < 3) {
        const produto = prompt("Insira no nome do produto:");
        const preco = parseFloat(prompt("Digite o preço: "));

        if (preco > maiorPreco) {
            maiorPreco = preco;

            produtoMaiorPreco = produto;
        }
        indice = indice + 1;
    }
    
    alert ("O produto: " + produto + "com o valor de " + maiorPreco);
}

function exemploQuantidadePorCategoria(){
    let indice = 0;
    let quantidadeAdulto = 0 ,quantidadeIdoso = 0, quantidadeCrianca = 0;

    while (indice < 5){
        let idade = parseInt(prompt("Digite a idade:"));

        if (idade < 18){
            quantidadeCrianca = quantidadeCrianca + 1;
        } else if ( idade <= 64){
            quantidadeAdulto = quantidadeAdulto + 1;
        } else {
            quantidadeIdoso = quantidadeIdoso + 1;
        }

        indice = indice + 1
    }

    alert("Quantidade crianças: " + quantidadeCrianca +
        "\nQuantidade adultos: " + quantidadeAdulto +
        "\nQuantidade adultos: " + quantidadeIdoso    
    )
}

function exemploRepetirQuantidadeUsuario(){
    let indice = 0, quantidadeP = 0, quantidadeM = 0, quantidadeG = 0;

    let quantidadeDesejada = parseInt(prompt("Digite a quantidade de calças que deseja cadastrar:"));

    while ( indice < quantidadeDesejada) {
        let tamanhoCalca = prompt("Digite o tamonho da calça [P/M/G]");

        //validar a informaçoes esta correta
        while (tamanhoCalca != "P" && tamanhoCalca != "M" && tamanhoCalca != "G" ); 

        if (tamanhoCalca === "P") {
            quantidadeP = quantidadeP + 1;
        } else if (tamanhoCalca === "M") {
            quantidadeM = quantidadeM + 1;
        }else if (tamanhoCalca === "G") {
            quantidadeG = quantidadeG + 1;
        }
        indice = indice + 1; 
    }
    alert(
        "Resumo das calças cadastradas:" +
        "P: " + quantidadeP + "\n" +
        "M: " + quantidadeM + "\n" +
        "G: " + quantidadeG + "\n" 
    );
}

function exemploAteDigitarSair(){
    // solicitar nome até o usuario digitar sair
    let nome = "";

    alert("Digite o nome dos jogadores do time de futebol:")

    while(nome != "sair") {
        nome = prompt("Digite o nome ou 'sair' para encerrar");
    }

}
function exemploAteDigitarSairQuantidade(){
    // solicitar nome até o usuario digitar sair e saber a quantidade de jogadores
    let nome = "";
    let quantidadeJogadores = 0;

    alert("Digite o nome dos jogadores do time de futebol:")

    while(nome != "sair") {
        nome = prompt("Digite o nome ou 'sair' para encerrar");

        if (nome != "sair") {
            quantidadeJogadores = quantidadeJogadores + 1;    
        }
    }
    alert("Quantidade de Jogadores: " + quantidadeJogadores);
}

function exemploMenu(){
    let menu = undefined;

    let numero1 = parseInt(prompt("Digite o primeiro numero:"));
    let numero2 = parseInt(prompt("Digite o segundo numero:"));

    while (menu != 10){
        menu = parseInt(prompt(`
MENU:

    1 - Somar
    2 - Subtrair
    3 - Multiplicar
    4 - Dividir
    5 - Alterar numero 1
    6 - Alterar numero 2      
    10 - Sair`));

        if (menu === 1) {
            const soma = numero1 + numero2;
            alert("Soma " + soma);

        } else if (menu === 2) {
            const subtracao = numero1 - numero2;
            alert("Subtração " + subtracao);

        } else if (menu === 3) {
            const multiplicacao = numero1 * numero2;
            alert("Multiplicação " + multiplicacao);

        } else if (menu === 4) {
            if (numero2 === 0) {
                alert("Não é possivel dividir por zero.");
            } else {
                const divisao = numero1 / numero2;
                alert("Divisão: " + divisao)
            }
        } else if (menu === 5){
            numero1 = parseInt(prompt("Digite o primeiro numero: "));
        }else if (menu === 6){
            numero2 = parseInt(prompt("Digite o segundo numero: "));
        }           
    }
}
function exemploColaboradores() {
    // ✔️ Cadastrar quantos colaboradores eu desejar
    // ✔️ Pedir:
    //  ✔️  - valor hora
    //  ✔️  - quantidade horas
    //  ✔️ - setor [Produção, Qualidade, Financeiro]
    // ✔️ Calcular o salário bruto
    // ✔️ Calcular o salário líquido
    // ✔️ Maior salário líquido
    // ✔️ Menor salário bruto
    // ✔️ Média dos salários brutos
    // ✔️ Nome pessoa que trabalha mais horas
    // Quantidade de pessoas por Setor

    let quantidadeDesejada = parseInt(prompt("Digite a quantidade de colaboradores"));
    let maiorSalarioLiquido = 0;
    let menorSalarioBruto = 99999999;
    let somaSalarioBrutos = 0;
    let maiorQuantidadeHoras = 0;
    let nomeMaiorQuantidadeHoras = "";
    let quantidadeProducao = 0, quantidadeQualidade = 0, quantidadeFinanceiro = 0;
    let quantidadeOutroSetor = 0;

    let indice = 0;

    while (indice < quantidadeDesejada) {
        let nome = prompt("Digite o nome do colaborador");
        let valorHora = parseFloat(prompt("Digite o valor da hora"));
        let horasTrabalhadas = parseInt(prompt("Digite a quantidade de horas trabalhadas"));
        let setor = prompt(`
Digite o nome do setor:
Financeiro
Produção
Qualidade`);
        let salarioBruto = valorHora * horasTrabalhadas;
        let inss = salarioBruto * 0.08; // Calcular 8% de inss
        let ir = salarioBruto * 0.275; // Calcular 27.5% de imposto de renda
        let valeRefeicao = 1400;

        let salarioLiquido = salarioBruto - inss - ir + valeRefeicao;
        alert(
            "Folha de Pagamento\n\n" +
            "Colaborador: " + nome + "\n" +
            "Setor: " + setor + "\n\n" +
            "Valor da hora: R$ " + valorHora.toFixed(2) + "\n" +
            "Horas trabalhadas: " + horasTrabalhadas + "\n\n" +
            "Salário bruto: R$ " + salarioBruto.toFixed(2) + "\n" +
            "Desconto INSS (8%): R$ " + inss.toFixed(2) + "\n" +
            "Desconto IR (27,5%): R$ " + ir.toFixed(2) + "\n" +
            "Vale refeição: R$ " + valeRefeicao.toFixed(2) + "\n\n" +
            "Salário líquido: R$ " + salarioLiquido.toFixed(2)
        );

        if (salarioLiquido > maiorSalarioLiquido) {
            maiorSalarioLiquido = salarioLiquido;
        }

        if (salarioBruto < menorSalarioBruto) {
            menorSalarioBruto = salarioBruto;
        }

        if (horasTrabalhadas > maiorQuantidadeHoras) {
            maiorQuantidadeHoras = horasTrabalhadas;
            nomeMaiorQuantidadeHoras = nome;
        }

        if (setor === "Qualidade") {
            quantidadeQualidade = quantidadeQualidade + 1;
        } else if (setor === "Financeiro") {
            quantidadeFinanceiro = quantidadeFinanceiro + 1;
        } else if (setor === "Produção") {
            quantidadeProducao = quantidadeProducao + 1;
        } else {
            quantidadeOutroSetor = quantidadeOutroSetor + 1;
        }

        somaSalarioBrutos = somaSalarioBrutos + salarioBruto;

        indice = indice + 1;// Incrementar
    }

    let mediaSalarioBrutos = somaSalarioBrutos / quantidadeDesejada;
    alert(
        "RESUMO GERAL DOS COLABORADORES\n\n" +

        "Maior salário líquido: R$ " + maiorSalarioLiquido.toFixed(2) + "\n" +
        "Menor salário bruto: R$ " + menorSalarioBruto.toFixed(2) + "\n" +
        "Média dos salários brutos: R$ " + mediaSalarioBrutos.toFixed(2) + "\n\n" +

        "Maior quantidade de horas trabalhadas: " + maiorQuantidadeHoras + "\n" +
        "Colaborador com mais horas: " + nomeMaiorQuantidadeHoras + "\n\n" +

        "Quantidade por setor:\n" +
        "Financeiro: " + quantidadeFinanceiro + "\n" +
        "Produção: " + quantidadeProducao + "\n" +
        "Qualidade: " + quantidadeQualidade + "\n" +
        "Outros setores: " + quantidadeOutroSetor
    );
}



