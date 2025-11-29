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
    if (possuiPlanoSaudeplanoSaude === true) {
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
    else {
        alert("Nivel de Urgencia inexistente")
        return
    }
    alert(
        "Dados do Paciente \n" +
        "\nNome: " + nome +
        "\nIdade: " + idade +
        "\nPeso: " + peso +
        "\nCPF: " + cpf +
        "\nPossui pano de saude: " + (possuiPlanoSaude? "Sim" : "Não") + (possuiPlanoSaude ? "Plano de Saude: " + planoSaude + "\n" : "") +
        "\nTipo Sanguineo: " + tipoSanguineo +
        "\nAltura: " + altura +
        "\nNivel de Urgencia: " + urgencia + 
        "Tempo de Espera: " + tempoEspera + "minutos"
    );
}