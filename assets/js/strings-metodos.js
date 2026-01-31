function converterParaMaiusculo() {
    let texto = "Abacate"
    let textoMaiusculo = texto.toUpperCase();

    alert(`Texto Original: ${texto}\nTexto maiusculo: ${textoMaiusculo}`);

}

function converterParaMinusculo() {
    let texto = "Abacate"
    let textoMinusculo = texto.toLocaleLowerCase();

    alert(`Texto Original: ${texto}\nTexto minusculo: ${textoMinusculo}`);

}

function removerEspacosComeco() {
    let texto = " Uma frase bem legal ";
    let textoSemEspacoComeco = texto.trimStart();

    alert(`Texto original: '${texto}'
Texto sem espaço no começo: '${textoSemEspacoComeco}'`);

}

function removerEspacosFim() {
    let texto = " Uma frase bem legal ";
    let textoSemEspacosFim = texto.trimEnd();

    alert(`Texto original: '${texto}'
Texto sem espaço no final: '${textoSemEspacosFim}'`);
}

function removerEspacosComecoFim() {
    let texto = " Uma frase bem legal ";
    // let textoSemEspacosComecoFim = texto.trimStart().trimEnd()  => trim() = simplificado
    let textoSemEspacosComecoFim = texto.trim()

    alert(`Texto original: '${texto}'
Texto sem espaço no começo e final: '${textoSemEspacosComecoFim}'`);
}

function substituir() {
    let texto = " Lorezzo faltou";
    let novoTexto = texto.replace("Lorezzo", "Lorenzo")

    alert(`Texto original: '${texto}'
Texto texto substituido: '${novoTexto}'`);
}

function substituirCaminho() {
    let valorString = "R$ 1.932.183,94";

    let valorStringNovo = valorString.replace("R$", "").replaceAll(".", "").replace(",", ".");

    let valor = parseFloat(valorStringNovo);

    alert("Valor convertido: " + valor + "\nValor Dobrado: " + valor * 2)
}

function substring() {
    // 31/01/2026
    // dia
    // mes
    // Ano

    let data = "31/01/2026"
    let dia = data.substring(0, 2);
    let mes = data.substring(3, 5);
    let ano = data.substring(6, 10);

    // Apresentar assim => Blumenau, dia do mes de ano

    alert(`Blumenau, ${dia} de ${mes} de ${ano}`)

}

function substringHorario() {
    //                         012345678
    // let horarioAmericano = "08:30 pm"

    let horarioAmericano = prompt("Digite o horario em formato Americano");

    let hora = parseInt(horarioAmericano.substring(0, 2)); // 08
    let minuto = horarioAmericano.substring(3, 5); // 30
    let periodo = horarioAmericano.substring(6, 8); // pm

    let horaBrasil = 0;

    if (periodo === "am") {
        horaBrasil = hora;
    } else {
        // pos almoço 
        horaBrasil = hora + 12;
    }

    let horarioBrasil = `${horaBrasil}:${minuto}`
    alert(`Horario USA: ${horarioAmericano}
Horario Brasil: ${horarioBrasil}`)

}

function exemploLength() {
    let texto = "Vingadores Guerra Infinita";
    let quantidadeCaracteres = texto.length;

    alert(`Texto ${texto}
Quantidade de caracteres: ${quantidadeCaracteres}`);
}

function comcecaCom() {
    let nomeEmpresa = "Blusoft";
    let empresaBlumenau = false;
    if (nomeEmpresa.toLocaleLowerCase().split("blu") === true) {
        empresaBlumenau = true;
    }
    alert(`Empresa de Blumenau ${empresaBlumenau}
Nome da empresa: ${nomeEmpresa}`);
}
function terminaCom() {
    let nomeCompleto = "Ana da Silva SouZA"

    if (nomeCompleto.toLocaleUpperCase().endsWith("SILVA") || nomeCompleto.toLocaleUpperCase().endsWith("SOUZA")) {
        alert("Sobrenome comum")
    } else {
        alert("Não é um sobrenome comum")

    }
}
function contem() {
    let refeicao = "Purê de feijão com frango";

    if (refeicao.toLocaleLowerCase().includes("feijão") || refeicao.toLocaleLowerCase().includes("feijao")) {
        alert("Tiicamente do Brasil");
    } else {
        alert("Outra comida");

    }

}

function indiceDeCaracter() {
    let hora = "23:49";
    // Retornar o indice do caractere encontrado, caso não encontrar retorna -1
    let indiceDoisPontos = hora.indexOf(":");
    alert(`Hora: ${hora}
Indice do ':' ${indiceDoisPontos}`);
}

function quebraString() {
    let data = "31/01/2026";
    let partes = data.split("/"); // => ["31", "01' , "2026"]
    let dia = partes[0];
    let mes = partes[1];
    let ano = partes[2];

    // Apresentar assim => Blumenau, dia do mes de ano

    alert(`Blumenau, ${dia} de ${mes} de ${ano}`)


}
function quebraStringDataHora() {
    let dataHora = "31/01/2026 23:49:10";
    let partesDataHora = data.split(" "); // => ["31/01/2026", "23:49:10"]
    let partesData = partesDataHora.split("/"); // => ["31", "01", "2026"]
    let partesHora = partesDataHora.split(":"); // => ["31", "01", "2026"]
    let dia = partesData[0]; // 31
    let mes = partesData[1]; // 01
    let ano = partesData[2]; // 2026

    let hora = partesHora[0]; // 23
    let minuto = partesHora[1]; // 49
    let segundo = partesHora[2]; // 10

    // Apresentar assim => Blumenau, dia do mes de ano

    alert(`Blumenau, ${dia} de ${mes} de ${ano}
Hora:${hora} Minuto:${minuto} Segundo:${segundo}`)

}

function padStart(){
    // Apresentar sempre 15 caracteres 

    let numeroCartao = "5230 9713 633 5801";
    let ultimosNumeros = numeroCartao.substring(15,19);
    alert(ultimosNumeros.padStart(16, "*"));
}

function padEnd() { 
    // CSV Separendo por caracteres
    // Matheus;25;5950.24
    // CSV Separando por linha fixa
    // Matheus               25 5950.24   
    // Ana                   74 25419.37
    
    let nome = "Matheus";
    let idade = "25";
    let salario = "5950.24";
    
    // Para usar o padEnd precisamos converter todos os int ou float para string, usamos o .toString()
    let linha = nome.padEnd(30, " ") + idade.toString().padEnd(3, " ") + salario.toString().padEnd(10, " ");



}
