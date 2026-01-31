// Incrementar 
// i = i + 1 // i = (atual) + 1 => conseguimos alterar a quantidade que ira incrementar + 2 ou + 3...
// i +=  1 // i = (atual) + 1 => conseguimos alterar a quantidade que ira incrementar + 2 ou + 3...
// i++ // i = (atual) + 1 => não podemos alterar a quantidade de incremento 

// Decrementar 
// i = i - 1 // i = (atual) - 1 => conseguimos alterar a quantidade que ira decrementar - 2 ou - 3...
// i -=  1 // i = (atual) - 1 => conseguimos alterar a quantidade que ira decrementar - 2 ou - 3...
// i-- // i = (atual) - 1 => não podemos alterar a quantidade de decremento

function exemploJogos(){

    let jogos = []

    // for (let i = 0; i < 5; i = i + 1)

    for (let i = 0; i < 5; i += 1){
        let nomeJogo = prompt("Digte o nome do jogo");

        jogos.push(nomeJogo)
    }

    // Apresentar jogos
    let textoParaApresentar = "";
    for (let i = 0; i < 5; i += 1){
        let nomeJogo = jogos[i];
        textoParaApresentar = textoParaApresentar + nomeJogo + "\n"
     }
    alert("Jogos: " + textoParaApresentar);
}

function calculadora(){

    let numeros = [];

    // Solicitar numeros
    for (let i = 0; i < 4; i += 1){
        let numero = parseInt(prompt("Difite o numero"));

        // Armazenar no vetor
        numeros.push(numero);
           
    }
    // Somar numeros

    let somaManual = numeros[0] + numeros[1] + numeros[2] + numeros[3];
    alert("Soma manual:" + somaManual);

    let soma = 0;

    for (let i = 0; i < 4; i += 1){
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

function jogoPalavras(){
    let palavras = ["Roblox", "Free Fire", "GTA"];
    let nomeJogador = prompt("Digite seu nome");
    let quantidadeTentativas = 10;
    
    if (nomeJogador.toLocaleLowerCase().includes("leticia")){
        quantidadeTentativas = 3;
    }

    while(quantidadeTentativas >= 0){
        let nomeJogo = prompt("Tente adivinhar o nome de 3 jogos");
        // Verificando se o nome que o usuario digitou esta dentro da lista
        if (palavras.includes(nomeJogo)){
            // Dar mais 3 tentativas a cada acerto
            quantidadeTentativas += 3;
            // Como descobrir a posição
            let indiceJogo = palavras.indexOf(nomeJogo);
            // Remover da lista o jogo que acertou
            palavras.splice(indiceJogo, 1);
            console.log(palavras);
            alert(`Acertou ${nomeJogo}`);

            if(palavras.length === 0){
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
        if(quantidadeTentativas <= 0){
            alert("Perdeu o jogo")
            break
        }
    }
}
