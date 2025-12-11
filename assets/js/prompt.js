function solicitarString(){
    let nome = prompt ("Digite o seu nome");
    let sobrenome = prompt ("Digite seu sobrenome");

    let nomeSobrenome = nome + " " + sobrenome;

    alert ("Nome Completo: " + nomeSobrenome);

}

function solicitarInt(){
    let numeroCartao = parseInt(prompt("Digite o numero do cartão"));
    let codigoSeguranca = parseInt(prompt("Digite o codigo de segurança"));
    
    alert("Número: " + numeroCartao + "\nCVV: " + codigoSeguranca);

}

function solicitarFloat(){
    
    let saldoBancario = parseFloat(prompt("Digite o Saldo Bancario: "));
    const saque = parseFloat (prompt("Digite o valor do Saque"));

    saldoBancario = saldoBancario - saque;

    alert("Saque Realizado: " + saque + 
        "\nSaldo Atual: " + saldoBancario);
    
}
function solicitarBoolean(){
    let vencido = confirm("Produto Vencido?");

    alert ("Produto Vencido: " + vencido);

}

function paciente(){
    let nome = prompt ("Digite o Nome do Paciente");
    const idade = parseInt(prompt("Digite a Idade"));
    const peso = parseFloat(prompt("Digite o Peso"));
    const possuiPlanoSaude=confirm("Possui plano de saude?");
    const cpf = prompt("Digite o CPF");

    let planoSaude = " ";
    // se possuiPlanoSaude for igual a verdadeiro
    if (possuiPlanoSaude === true) {
        planoSaude = prompt("Digite o nome do plano de Saude");
    }
    const tipoSanguineo = prompt("Digite o tipo Sanguineo");
    const altura = parseFloat("Digite a altura");

    const urgencia = prompt('Escolha o nivel de Urgencia: [Migue,Atestado,Dorzinha,Dengue,Dor Extrema]')

    let tempoEspera = 0;
    if (urgencia === "Migue"){
        tempoEspera = 180;
    }
    else if (urgencia === "Atestado"){
        tempoEspera = 150;
    }
    else if (urgencia === "Dorzinha"){
        tempoEspera = 120;
    }
    else if (urgencia === "Dengue"){
        tempoEspera = 60;
    }
    else if (urgencia === "Dor Extrema"){
        tempoEspera = 30;
    }
    else{

    
    alert(
        "Dados do Paciente \n" +
        "\nNome: " + nome +
        "\nIdade: " + idade +
        "\nPeso: " + peso +
        "\nCPF: " + cpf + "n" +
        "\nPossui plano de saude: " + (possuiPlanoSaude? "Sim" : "Não") + (possuiPlanoSaude ? "Plano de Saude: " + planoSaude + "\n" : "") +
        "\nTipo Sanguineo: " + tipoSanguineo +
        "\nAltura: " + altura +
        "\nNivel de Urgencia: " + urgencia + 
        "Tempo de Espera: " + tempoEspera + " minutos"
    );
    }
}

function exercicio01(){
    const nome = (prompt("Digite seu nome do personagem:"));
    const idade = (prompt("Digite a idade do personagem:"));
    const cidade = (prompt("Digite a Cidade:"));
    
    let poder = confirm("O personagem tem Poderes?");
    if (poder === true) {
        qualPoder = prompt("Informe o Poder: ");
    }

    const quantidade = prompt ("Quantas fezes usa o poder mensalmente");


    alert (
        "Nome: " + nome +
        "\nIdade: " + idade +
        "\nCidade: " + cidade +
        "\nPossui poder: " + (poder? "Sim" : "Não") + (poder ? "Plano de Saude: " + qualPoder + "" : "") +
        "Quantas fezes usa o poder mensalmente: " + quantidade
    );
}

function exercicio02(){
    const base = parseFloat(prompt("Informe a base do quadrado"));
    const altura = parseFloat(prompt("Informe a altura do quadrado"));

    let area = (base * altura) / 2 

    alert(
        "A area do quadrado é: " + area 
    );
}

function exercicio03(){
    const nome = prompt("Digite o nome de filme: ");
    const ano = parseInt(prompt("Digite o ano de lançamento do filme: "));
    const duracao = parseInt(prompt("Digite a duração em minutos: "));
    const genero = prompt("Qual o gênero do filme (ex: Ação, Comédia, Drama)")

    const assisti = confirm("Você ja assistiu esse filme? ");

    alert(
        "Nome do Filme: " + nome +
        "\nAno de Lançamento: " + ano +
        "\nDuração: " + duracao +
        "\nGenero: " + genero +
        "\nJa assitiu esse filme? " + assisti 
    );
}

function exercicio04(){
    const produto = prompt("Informe o nome do Produto:");
    const preco = parseFloat(prompt("Informe o preço unitário:"));
    const quant = parseInt(prompt("Informe a quantidade comprada:"));
    
    let valorTotal = preco * quant

    let premium = confirm("Você é assinante Premium:");
    if (premium ===  true) {
        calcPremium = valorTotal - ((valorTotal * 10) / 100).toFixed(2) ;
    } else {
        calcPremium = valorTotal.toFixed(2);

    }
    alert(
        "Produto: " + produto +
        "\nPreço unitário: R$ " + preco +
        "\nQuantidade: " + quant +
        "\nValor Final: R$ " + calcPremium 
    );

}

function exercicio05(){

	const aluno = prompt("Informe o nome do aluno:");
	const primeiraNota = parseInt(prompt("Digite a primeira nota:"));
	const segundaNota = parseInt(prompt("Digite a segunda nota:"));
	const terceiraNota = parseInt(prompt("Digite a terceira nota:"));

	let media = (primeiraNota + segundaNota + terceiraNota) / 3 ;
	let resultado = "";

	if (media >= 7) {
	resultado = "APROVADO";
	} else if (media >= 5){
	resultado = "RECUPERAÇÃO";
	} else if (media < 5) {
	resultado = "REPROVADO";
	}

    	alert(
        "Nome do Aluno: " + aluno +
        "\nPrimeira Nota: " + primeiraNota +
        "\nSegunda Nota: " + segundaNota +
        "\nTerceira Nota: " + terceiraNota +
        "\nMédia: " + media.toFixed(2) +
        "\nResultado: " + resultado
    );
}

function exercicio06(){

    	const modelo = prompt("Informe o modelo do carro: ");
    	const ano = parseInt(prompt("Informe o ano do carro: "));
    	const valorCarro = parseFloat(prompt("Informe o valor do carro: "));
    	const quantParcela = parseInt(prompt("Informe quantidade de parcelas: "));
	
   	let valorParcela = valorCarro / quantParcela;

   	let seguro = confirm("Você quer incluir seguro?");
    	let valorFinal = valorParcela; // CORREÇÃO AQUI

    	if (seguro === true) {
        valorFinal = valorParcela + 150;
   	 }

  	let valorTotal = valorFinal * quantParcela;

	alert(
	    "Modelo Carro: " + modelo +
	    "\nAno do Carro: " + ano +
	    "\nValor do Carro: R$" + valorCarro.toFixed(2) +
	    "\nQuantidade de Parcela: " + quantParcela +
	    "\nAdicionar seguro? " + (seguro ? "Sim" : "Não") +
	    "\nValor Final da Parcela: R$" + valorFinal.toFixed(2) +
            "\nValor Total: R$" + valorTotal.toFixed(2)
	);
}

function exercicio07(){

	const jogo = prompt("Qual o Nome do Jogo: ");
	const horasJogadas = parseInt(prompt("Quantas horas jogadas por dia? "));
	const diasJogados = parseInt(prompt("Quantas dias jogados por semana? "));
	const total = horasJogadas * diasJogados;
	
	let online = confirm("Este jogo é online? ");

	alert(
	    "Nome do Jogo: " + jogo +
	    "\nQuantidade de Horas Jogadas por dia: " + horasJogadas + " hrs" +
   	    "\nQuantidade de Dias Jogados por Semana: " + diasJogados +
   	    "\nEste Jogo é Online? " + (online ? "Sim" : "Não") +
   	    "\nTotal de Horas Jogadas por Semana: " + total + " hrs"
	);
}

function exercicio08(){

	const nome = prompt("Nome do Restaurante:");
	const valorConta = parseFloat(prompt("Valor da Conta:"));
	const quantPessoas = parseInt(prompt("Quantidade de Pessoas:"));
	
	let quantPagar = valorConta / quantPessoas ;

	let taxa = confirm("Será incluso taxa de serviço(10%)? ");
	let valorTaxa = 0;

	if (taxa === true) {
	    valorTaxa = (valorConta * 10) / 100 ;
	}
	
	let valorAtualizado = valorConta + valorTaxa ;
	
	const valorPessoa = valorAtualizado / quantPessoas ;

	alert (
	    "Nome do Restaurante: " + nome +
	    "\nValor da Conta: R$ " + valorConta.toFixed(2) +
	    "\nQuantidade de Pessoas na Mesa: " + quantPessoas +
	    "\nSerá incluso taxa de serviço(10%)? " + (taxa ? "Sim" : "Não") +
	    "\nValor Atualizado: R$ " + valorAtualizado.toFixed(2) +
	    "\nValor Por Pessoa: R$ " + valorPessoa.toFixed(2) 
	)
}
	
function exercicio09(){
	
	const nome = prompt("Informe o Nome do Funcionário: ");
	const salarioBase = parseFloat(prompt("Salario Base: "));
	const valorExtra = parseFloat(prompt("Valor Horas Extras: "));
	const valorDesconto = parseFloat(prompt("Valor Descontos: "));
	
	let salarioFinal = (salarioBase + valorExtra) - valorDesconto ;

	let imposto = "";

   	if (salarioFinal <= 3000) {
        imposto = "Funcionário paga Imposto Padrão";

   	} else if (salarioFinal > 3000) {
        imposto = "Funcionário paga Imposto Alto";
    	}

	alert(
	    "Nome Funcionário: " + nome + 
	    "\nSalario Base: R$" + salarioBase.toFixed(2) +
	    "\nValor Horas Extras: R$" + valorExtra.toFixed(2) +
	    "\nValor Descontos: R$" + valorDesconto.toFixed(2) +
	    "\nSalario Final: R$" + salarioFinal.toFixed(2) +
	    "\nObservação Imposto: " + imposto
	)
}

function exercicio10(){
	const nome = prompt("Informe Seu Nome:");
	const saldoAtual = parseInt(prompt("Informe Seu Saldo Atual: R$"));
	const valorDeposito = parseInt(prompt("Informe o Valor do Deposito: R$"));
	
	let saldo = saldoAtual + valorDeposito ;

	const valorSaque = parseInt(prompt("Informe o Valor do Saque: R$"));

   	let saque;

    	if (valorSaque > saldo) {
            alert("Seu saldo é insuficiente para realizar o saque!");
            saque = 0;
    	} else {
            saque = valorSaque;
            saldo = saldo - saque;
    	}

	let saldoFinal = saldo 

	alert(
	    "Nome Cliente: " + nome + 
            "\nValor Último Depósito: R$" + valorDeposito.toFixed(2) +
            "\nValor Último Saque: R$" + saque.toFixed(2) +
            "\nSaldo Atual: R$" + saldoFinal.toFixed(2) 
	)
}

	