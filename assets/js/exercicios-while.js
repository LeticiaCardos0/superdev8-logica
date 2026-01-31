function exercicio01() {
    let indice = 0;

    while (indice < 5) {

        const nome = prompt("Informe o nome do aluno:");

        indice = indice + 1;

        alert("Aluno Cadastrado: " + nome);

    }

    alert("Cadastro Finalizado");

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
    let indice = 0;
    let soma = 0;
    let comissao = 0;

    while (indice < 6) {

        let vendas = parseInt(prompt("Informe o valor de 6 vendas realizadas:"))

        indice = indice + 1;

        soma = soma + vendas
        comissao = soma * 0.05
    }

    alert("O valor total de vendas é : R$" + soma +
        "\nO valor da comissão é: R$" + comissao.toFixed(2)
    );
}

function exercicio08() {

    let numero = 0;
    let indice = 0;


    while (indice < 10) {

        let numero = parseInt(prompt("Infome um numero:"))

        indice = indice + 1;

        if (numero % 2 === 0) {
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

        alert(numero + " x " + indice + " = " + result);

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

        if (numero % 2 === 0) {
            alert("Este numero é par")

            par = par + 1;

        } else {
            alert("Este numero é impar")

            impar = impar + 1;

        }
    }
    alert(par + " Foram numero pares\n" +
        impar + " Foram numero impares")

}

function exercicio11() {

    let indice = 1;
    let nota = 0;
    let somaNota = 0;
    let media

    while (indice < 5) {
        let nota = parseInt(prompt("Digite a " + indice + "ª nota"))

        indice = indice + 1

        somaNota = somaNota + nota;

        media = somaNota / indice;
    }

    if (media >= 7) {
        alert("Aluno Aprovado")
    } else {
        alert("Aluno Reprovado")

    }
}

function exercicio12() {

    let indice = 0;
    let valor = 0;
    let totalCompra = 0;
    let desconto = 0;
    let valorTotal = 0;

    while (indice < 5) {
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

    while (indice < 6) {
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

    alert("A media entre as idades informadas é " + mediaIdade.toFixed(0));
}

function exercicio14() {
    let indice = 0;
    let somaSalario = 0;
    let mediaSalario = 0;
    let mediaSalarioText = "";
    let maiorSalario = 9999;
    let menorSalario = 0;

    while (indice < 5) {
        indice = indice + 1;

        let salario = parseInt(prompt("Informe 6 salarios: "))

        somaSalario = somaSalario + salario;

        if (menorSalario < salario) {
            menorSalario = salario
        };

        if (maiorSalario > salario) {
            maiorSalario = salario
        };

    }
    mediaSalario = somaSalario / indice;

    if (mediaSalario > 3000) {
        mediaSalarioText = "Salários acima da média";
    } else {
        mediaSalarioText = "Salários dentro da média";
    }

    alert("O menor salario é:R$ " + menorSalario.toFixed(2) +
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

    if (totalContas > metRenda) {
        statusRenda = "Orçamento comprometido"
    } else {
        statusRenda = "Orçamento saudável"
    }

    perctRenda = (totalContas / renda) * 100

    alert("RESUMO CONTAS" +
        "\nTotal Contas: R$" + totalContas.toFixed(2) +
        "\nSuas Contas Representam " + perctRenda.toFixed(0) + "% = " + statusRenda);

}

function exercicio16() {
    let indice = 0;
    let maiorAltura = 0;

    while (indice < 5) {
        let altura = parseFloat(prompt("Informe a altura de 5 pessoas: "))

        indice = indice + 1;

        if (altura > maiorAltura) {
            maiorAltura = altura
        }
    }
    alert("A maior altura é " + maiorAltura.toFixed(2));
}
function exercicio17() {
    let indice = 0;
    let maiorPeso = 0;

    while (indice < 4) {
        let peso = parseInt(prompt("Informe o peso de 4 pessoas"));
        indice = indice + 1;

        if (peso > maiorPeso) {
            maiorPeso = peso;
        }
    }
    alert("O maior peso é " + maiorPeso);
}

function exercicio18() {
    let indice = 0;
    let maiorIdade = 0;
    let nomeMaiorIdade = 0;

    while (indice < 1) {

        let nome1 = prompt(`
Informe o nome e idade de 5 pessoas:
            - Digite o primeiro nome:`);
        let idade1 = parseInt(prompt(`
Informe o idade e idade de 5 pessoas:
            - Digite o idade da primeira pessoa:`));
        if (idade1 > maiorIdade) {
            maiorIdade = idade1;
            nomeMaiorIdade = nome1;
        }

        let nome2 = prompt(`
Informe o nome e idade de 5 pessoas:
            - Digite o segundo nome:`);
        let idade2 = parseInt(prompt(`
Informe o idade e idade de 5 pessoas:
            - Digite o idade da segunda pessoa:`));
        if (idade2 > maiorIdade) {
            maiorIdade = idade2;
            nomeMaiorIdade = nome2;
        }

        let nome3 = prompt(`
Informe o nome e idade de 5 pessoas:
            - Digite o terceiro nome:`);
        let idade3 = parseInt(prompt(`
Informe o idade e idade de 5 pessoas:
            - Digite o idade da terceira pessoa:`));
        if (idade3 > maiorIdade) {
            maiorIdade = idade3;
            nomeMaiorIdade = nome3;
        }

        let nome4 = prompt(`
Informe o nome e idade de 5 pessoas:
            - Digite o quarto nome:`);
        let idade4 = parseInt(prompt(`
Informe o idade e idade de 5 pessoas:
            - Digite o idade da quarta pessoa:`));
        if (idade4 > maiorIdade) {
            maiorIdade = idade4;
            nomeMaiorIdade = nome4;
        }

        let nome5 = prompt(`
Informe o nome e idade de 5 pessoas:
            - Digite o quinto nome:`);
        let idade5 = parseInt(prompt(`
Informe o idade e idade de 5 pessoas:
            - Digite o idade da quinta pessoa:`));
        if (idade5 > maiorIdade) {
            maiorIdade = idade5;
            nomeMaiorIdade = nome5;
        }

        indice = indice + 1;
    }
    alert(nomeMaiorIdade + " tem a maior idade = " + maiorIdade + " anos")
}

function exercicio19() {
    let indice = 0;
    let maiorPreco = 0;
    let menorPreco = 9999;

    while (indice < 6) {
        let produto = parseFloat(prompt("Informe o preço de 6 produto: "))

        indice = indice + 1;

        if (produto > maiorPreco) {
            maiorPreco = produto;
        }
        if (produto < menorPreco) {
            menorPreco = produto;
        }
    }
    alert("O maior preço é: R$" + maiorPreco.toFixed(2) +
        "\nO menor preço é: R$" + menorPreco.toFixed(2));

}

function exercicio20() {
    let indice = 0;
    let nomeMaiorSalario = 0;
    let maiorSalario = 0;

    while (indice < 1) {
        let nome1 = prompt("Digite o nome do primeiro colaborador");
        let salario1 = parseFloat(prompt("Digite o salario do primeiro colaborador:"));

        if (salario1 > maiorSalario) {
            maiorSalario = salario1;
            nomeMaiorSalario = nome1;
        }

        let nome2 = prompt("Digite o nome do segundo colaborador");
        let salario2 = parseFloat(prompt("Digite o salario do segundo colaborador:"));

        if (salario2 > maiorSalario) {
            maiorSalario = salario2;
            nomeMaiorSalario = nome2;
        }
        let nome3 = prompt("Digite o nome do terceiro colaborador");
        let salario3 = parseFloat(prompt("Digite o salario do terceiro colaborador:"));

        if (salario3 > maiorSalario) {
            maiorSalario = salario3;
            nomeMaiorSalario = nome3;
        }

        let nome4 = prompt("Digite o nome do quarto colaborador");
        let salario4 = parseFloat(prompt("Digite o salario do quarto colaborador:"));

        if (salario4 > maiorSalario) {
            maiorSalario = salario4;
            nomeMaiorSalario = nome4;
        }

        indice = indice + 1;
    }
    alert("O colaborador é" + nomeMaiorSalario + " com o maior salario = R$" + maiorSalario.toFixed(2));
}
function exercicio21() {
    let indice = 1;
    let maiorTemp = 0;
    let menorTemp = 999;

    while (indice < 8) {
        let temperatura = parseFloat(prompt(`
Previsão do tempo para os proximos 7 dias:
            -Digite a temperatura ` + indice + "º dia"));

        indice = indice + 1;

        if (temperatura > maiorTemp) {
            maiorTemp = temperatura;
        }
        if (temperatura < menorTemp) {
            menorTemp = temperatura;
        }
    }
    alert("A maior temperatura é: " + maiorTemp + "°" +
        "\nA menor temperatura é: " + menorTemp + "°");
}

function exercicio22() {

    let indice = 0;
    let menorPreco = 9999;
    let nomeMenorPreco = "";

    while (indice < 1) {

        let produto1 = prompt("Informe o nome do primeiro produto: ");
        let preco1 = parseFloat(prompt("Informe o preço do primeiro produto: "));

        if (menorPreco > preco1) {
            menorPreco = preco1;
            nomeMenorPreco = produto1;
        }

        let produto2 = prompt("Informe o nome do segundo produto: ");
        let preco2 = parseFloat(prompt("Informe o preço do segundo produto: "))

        if (menorPreco > preco2) {
            menorPreco = preco2;
            nomeMenorPreco = produto2;
        }

        let produto3 = prompt("Informe o nome do terceiro produto: ");
        let preco3 = parseFloat(prompt("Informe o preço do terceiro produto: "))

        if (menorPreco > preco3) {
            menorPreco = preco3;
            nomeMenorPreco = produto3;
        }

        let produto4 = prompt("Informe o nome do quarto produto: ");
        let preco4 = parseFloat(prompt("Informe o preço do quarto produto: "))

        if (menorPreco > preco4) {
            menorPreco = preco4;
            nomeMenorPreco = produto4;
        }

        let produto5 = prompt("Informe o nome do quinto produto: ");
        let preco5 = parseFloat(prompt("Informe o preço do quinto produto: "))

        if (menorPreco > preco5) {
            menorPreco = preco5;
            nomeMenorPreco = produto5;
        }

        indice = indice + 1
    }

    alert("O preoduto com menor preço é " + nomeMenorPreco + " = R$" + menorPreco);
}

function exercicio23() {
    let indice = 0;
    let quantiCrianca = 0;
    let quantiAdolescente = 0;
    let quantiAdulto = 0;
    let quantiIdoso = 0;

    while (indice < 8) {
        let idade = parseInt(prompt("Infome a idade de 8 pessoas:"));

        indice = indice + 1;

        if (idade < 12) {
            quantiCrianca = quantiCrianca + 1;
        } else if (idade > 12 && idade < 17) {
            quantiAdolescente = quantiAdolescente + 1;
        } else if (idade > 18 && idade < 59) {
            quantiAdulto = quantiAdulto + 1;
        } else {
            quantiIdoso = quantiIdoso + 1;
        }

    }
    alert("Quantidade de Crianças: " + quantiCrianca +
        "\nQuantidade de Adolescentes: " + quantiAdolescente + "\nQuantidade de Adultos: " + quantiAdulto +
        "\nQuantidade de Idosos: " + quantiIdoso
    );

}
function exercicio24() {

    let indice = 1;
    let reprovados = 0;
    let recuperacao = 0;
    let aprovados = 0;

    while (indice < 11) {
        let nota = parseInt(prompt(`
Informe a nota de 10 alunos
        - Digite a ` + indice + "ª nota"));
        indice++;

        if (nota < 5) {
            reprovados++;
        } else if (nota >= 5 && nota < 7) {
            recuperacao++;
        } else {
            aprovados++;
        }
    }
    alert("Aprovados: " + aprovados +
        "\nRecuperação: " + recuperacao +
        "\nReprovados: " + reprovados);

}

function exercicio25() {

    let indice = 0;
    let salarioBaixo = 0;
    let salarioMedio = 0;
    let salarioAlto = 0;

    while (indice < 7) {
        let salario = parseFloat(prompt("Digite o salario de 7 funcionarios: "))
        indice++;

        if (salario <= 2000) {
            salarioBaixo++;
        } else if (salario > 2001 && salario < 5000) {
            salarioMedio++;
        } else {
            salarioAlto++;
        }
    }
    alert("Salarios até R$2.000: " + salarioBaixo +
        "\nSalarios entre R$2.001 e R$5.000: " + salarioMedio +
        "\nSalarios acima de R$5.000: " + salarioAlto);

}

function exercicio26() {
    let indice = 1;
    let tempFrio = 0;
    let tempAgradavel = 0;
    let tempQuentes = 0;

    while (indice < 7) {
        let temperatura = parseFloat(prompt(`
Previsão do tempo para os proximos 7 dias:
            -Digite a temperatura ` + indice + "º dia"));

        indice = indice + 1;

        if (temperatura < 15) {
            tempFrio++;
        } else if (temperatura > 15 && temperatura < 25) {
            tempAgradavel++;
        } else {
            tempQuentes++;
        }
    }
    alert("Quantidade de dias Frios: " + tempFrio +
        "\nQuantidade de dias Agradáveis: " + tempAgradavel +
        "\nQuantidade de dias Quentes: " + tempQuentes);

}
function exercicio27() {
    let indice = 0;
    let avRuim = 0;
    let avRegular = 0;
    let avBom = 0;

    while (indice < 10) {
        let avaliacao = parseInt(prompt("Qual sua avaliação de 0 a 5 de nosso sistema"));

        indice = indice + 1;

        if (avaliacao <= 2) {
            avRuim++;
        } else if (avaliacao === 3) {
            avRegular++;
        } else {
            avBom++;
        }

    }
    alert("Quantidade de Avaliações Boas: " + avBom +
        "\nQuantidade de Avaliações Regular: " + avRegular +
        "\nQuantidade de Avaliações Ruim: " + avRuim);
}

function exercicio28() {
    let indice = 0;
    let numNegativos = 0;
    let numZero = 0;
    let numPositivos = 0;

    while (indice < 8) {
        let numeros = parseInt(prompt("Solicitar 8 numeros inteiros (negativos e pesitivos)"));
        indice++

        if (numeros < 0) {
            numNegativos++;
        } else if (numeros === 0) {
            numZero++;
        } else {
            numPositivos++;
        }
    }
    alert("Quantidade de Numeros Negativos: " + numNegativos +
        "\nQuantidade de Numeros Zero: " + numZero +
        "\nQuantidade de Numeros Positivos: " + numPositivos);
}

function exercicio29() {
    let indice = 0;
    let quantLeve = 0;
    let quantMedio = 0;
    let quantPesado = 0;

    while (indice < 5) {
        let peso = parseInt(prompt("Digite o peso de 5 encomendas: "));
        indice++
        if (peso <= 2) {
            quantLeve++;
        } else if (peso > 2 && peso < 10) {
            quantMedio++;
        } else {
            quantPesado++;
        }
    }
    alert("Quantidade de Encomendas Leves: " + quantLeve +
        "\nQuantidade de Encomendas Medias: " + quantMedio +
        "\nQuantidade de Encomendas Pesadas: " + quantPesado);
}

function exercicio30() {
    let indice = 0;
    let quantPelucias = parseInt(prompt("Digite a quantidade de pelúcias da Disney que deseja cadastrar"));
    let peluMickey = 0;
    let peluMinnie = 0;
    let peluDonald = 0;

    while (indice < quantPelucias) {
        let personagem = prompt(`
Informe qual o personagem:
    [MICKEY/MINNIE/DONALD]`);
        indice++

        if (personagem === "Mickey") {
            peluMickey++;
        } else if (personagem === "Minnie") {
            peluMinnie++;
        } else if (personagem === "Donald") {
            peluDonald++
        } else {
            alert("Personagem Invalido")
        }
    }
    alert("Quantidade de pelúcias Mickey: " + peluMickey +
        "\nQuantidade de pelúcias Minnie: " + peluMinnie +
        "\nQuantidade de pelúcias Donald: " + peluDonald);
}
function exercicio31() {
    let indice = 0;
    let quantClientes = parseInt(prompt("Digite a quantidade de clientes que irão responder a pesquisa"));
    let pagCredito = 0;
    let pagDebito = 0;
    let pagDinheiro = 0;

    while (indice < quantClientes) {
        let formaPag = prompt(`
Pesquisa de Formas de Pagamento,qual você mais ultiza?
        - [CRÉDITO/DÉBITO/DINHEIRO]`);
        indice++

        if (formaPag === "crédito") {
            pagCredito++;
        } else if (formaPag === "débito") {
            pagDebito++;
        } else if (formaPag === "dinheiro") {
            pagDinheiro++
        } else {
            alert("Forma de Pagamento Invalida")
        }
    }
    alert("Quantidade que pagaram no crédito: " + pagCredito +
        "\nQuantidade que pagaram no débito: " + pagDebito +
        "\nQuantidade que pagaram dinheiro: " + pagDinheiro);
}

function exercicio32() {
    let indice = 0;
    let quantIngressos = parseInt(prompt("Digite a quantidade de ingressos vendidos"));
    let inteira = 0;
    let meia = 0;
    let cortesia = 0;

    while (indice < quantIngressos) {

        let tipoIngresso = prompt("Informe o tipo de ingresso[INTEIRA/MEIA/CORTESIA]: ");
        indice++

        if (tipoIngresso === "inteira") {
            inteira++;
        } else if (tipoIngresso === "meia") {
            meia++;
        } else if (tipoIngresso === "cortesia") {
            cortesia++
        } else {
            alert("Forma de Pagamento Invalida")
        }
    }
    alert("Quantidade de ingressos inteiros: " + inteira +
        "\nQuantidade de ingressos meia: " + meia +
        "\nQuantidade de ingressos cortesia: " + cortesia);
}

function exercicio33() {
    let indice = 0;
    let quantHamburger = 0;
    let quantPizza = 0;
    let quantHot = 0;
    let quantPedidos = parseInt(prompt("Quantos pedidos foram vendidos hoje?"));

    while (indice < quantPedidos) {
        let tipoPedido = prompt(`
Qual o tipo des lanche deste pedido?
        - [HAMBURGUER/PIZZA/HOTDOG]`);

        indice++

        if (tipoPedido === "hamburguer") {
            quantHamburger++;
        } else if (tipoPedido === "pizza") {
            quantPizza++;
        } else if (tipoPedido === "hotdog") {
            quantHot++
        }
    }
    alert("Quantidade de hamburguer: " + quantHamburger +
        "\nQuantidade de pizza: " + quantPizza +
        "\nQuantidade de hotdog: " + quantHot);
}

function exercicio34() {
    let indice = 0;
    let lvFiccao = 0;
    let lvEstudo = 0;
    let lvInfantil = 0;

    let quantLivro = parseInt(prompt("Digite a quantidade livros que você deseja cadastrar"));

    while (indice < quantLivro) {
        let tipoLivro = prompt(`Digite o tipo de livro que você gostaria de cadastrar
           - [FICÇÃO/ESTUDO/INFANTIL]`);

        indice++
        if (tipoLivro === "ficção") {
            lvFiccao++;
        } else if (tipoLivro === "estudo") {
            lvEstudo++;
        } else if (tipoLivro === "infantil") {
            lvInfantil++
        }
    }
    alert("Quantidade de livros de Ficção: " + lvFiccao +
        "\nQuantidade de livros de Estudo: " + lvEstudo +
        "\nQuantidade de livros de Infantis: " + lvInfantil);
}

function exercicio35() {
    let nome = " ";
    let quantPersonagem = 0;
    alert("Digite seu personagens de anime favoritos ");

    while (nome != "sair") {
        nome = prompt("Digite o nome do personagem ou 'sair' para encerrar");

        if (nome != "sair") {
            quantPersonagem++;
            alert("Personagem Cadastrado")
        }
    }
    alert("A quantidade de Personagem casdastrados é: " + quantPersonagem);

}
function exercicio36() {
    let jogo = " ";
    let quantRpg = 0;
    let quantJogos = 0;
    alert("Lista de Jogos Favoritos");

    while (jogo != "sair") {
        jogo = prompt("Digite o nome de seus jogos favoritos ou 'sair' para encerrar");

        if (jogo != "sair") {
            quantJogos++;

            let generoJogo = prompt("Digite o genero desse jogo")

            if (generoJogo === "RPG") {
                quantRpg++
            }
        }
    }
    alert("A quantidade de jogos cadastrados é: " + quantJogos +
        "\nA quantidade de jogos que são do genero RPG: " + quantRpg);
}

function exercicio37() {
    let nome = " ";
    let quantPersonagem = 0;
    let poderBaixo = 0;
    let poderMedio = 0;
    let poderAlto = 0;

    alert("Digite seu personagens da Marvel favoritos ");

    while (nome != "sair") {
        nome = prompt("Digite o nome do personagem ou 'sair' para encerrar");

        if (nome != "sair") {
            quantPersonagem++;

            let nivelPoder = prompt(`Digite o nível de poder desse personagem: 
                    - [BAIXO/MEDIO/ALTO]`);

            if (nivelPoder === "baixo") {
                poderBaixo++
            } else if (nivelPoder === "medio") {
                poderMedio++
            } else if (nivelPoder === "alto") {
                poderAlto++
            }
        }
    }
    alert("A quantidade de Personagem casdastrados é: " + quantPersonagem +
        "\nQuantidade de personagem de nivel de pode Baixo: " + poderBaixo +
        "\nQuantidade de personagem de nivel de pode Medio: " + poderMedio +
        "\nQuantidade de personagem de nivel de pode Alto: " + poderAlto);


}
function exercicio38() {
    let nome = " ";
    let quantCad = 0;
    let media = 0;
    let somaNota = 0;

    alert("Digite suas séries geeks favoritas ");

    while (nome != "sair") {
        nome = prompt("Digite o nome da série ou 'sair' para encerrar");

        if (nome != "sair") {
            quantCad++;

            let nota = parseInt(prompt("De uma nota de 0 a 10 para essa série"));

            somaNota = somaNota + nota;
            media = somaNota / quantCad

        }
    }
    alert("A quantidade de series cadastradas é: " + quantCad +
        "\nA média da notas é: " + media.toFixed(2));

}
function exercicio39() {
    debugger
    let nome = " ";
    let quantCad = 0;
    let quantNao = 0;

    alert("Digite nome de consoles/jogos retrô (ex: SNES, Mega Drive)");

    while (nome != "sair") {
        nome = prompt("Digite o nome de consoles/jogos retrô (ex: SNES, Mega Drive) ou 'sair' para encerrar");

        if (nome != "sair") {
            quantCad++;

            let jogou = prompt("Você ja jogou? [SIM/NÃO] ");

            if (jogou === "não") {
                quantNao++
            }
        }
    }
    alert("A quantidade cadastradas é: " + quantCad +
        "\nQuantos o usuario não jogou: " + quantNao);
}

function exercicio40() {
    let distancia = parseInt(prompt("Digite a distância percorrida em km"));
    let combustivel = parseInt(prompt("Digite o consumo de combustível em litros"));

    let menu = undefined;

    while (menu != 10) {
        menu = parseInt(prompt(`
MENU:

    1 - Calcular consumo médio (km/l)
    2 - Calcular custo da viagem
    3 - Alterar distância percorrida
    4 - Alterar consumo em litros    
    10 - Sair`));

        if (menu === 1) {
            let consumoMedio = distancia / combustivel;
            alert("O consumo médio é " + consumoMedio);

        } else if (menu === 2) {
            let precoLitro = parseFloat(prompt("Digite o valor do litro do combustivel"));
            let custoViagem = combustivel * precoLitro;
            alert("O custo da viagem foi " + custoViagem);

        } else if (menu === 3) {
            distancia = parseInt(prompt("Digite a distância percorrida em km"));

        } else if (menu === 4) {
            combustivel = parseInt(prompt("Digite o consumo de combustível em litros"));
        }
    }
}

function exercicio41() {
    let saldo = parseInt(prompt("Digite o saldo na conta"));
    let menu = undefined;

    while (menu != 10) {
        menu = parseInt(prompt(`
MENU:

    1 - Depositar
    2 - Sacar
    3 - Consultar saldo
    10 - Sair`));

        if (menu === 1) {
            let deposito = parseFloat(prompt("Digite o valor que gostaria depositar"));
            saldo = saldo + deposito;
            alert("O saldo atualizado é R$ " + saldo.toFixed);

        } else if (menu === 2) {
            let saque = parseFloat(prompt("Digite o valor que gostaria sacar"));
            saldo = saldo - saque;
            alert("O saldo atualizado é R$ " + saldo.toFixed);

        } else if (menu === 3) {
            alert("O saldo atualizado é R$ " + saldo.toFixed);
        }

    }
}
function exercicio42() {
    let menu = undefined;

    while (menu != 10) {

        menu = parseInt(prompt(`
MENU de conversão de temperaturas:
1 - Celsius para Fahrenheit
2 - Fahrenheit para Celsius
10 - Sair
        `));

        if (menu === 1) {
            let tempCelsius = parseFloat(prompt("Digite a temperatura em Celsius"));
            let temp = (tempCelsius * 9 / 5) + 32;
            alert("A temperatura em Celsius = " + tempCelsius + "°C para Fahrenheit é " + temp.toFixed(2) + "°F");

        } else if (menu === 2) {
            let tempFahr = parseFloat(prompt("Digite a temperatura em Fahrenheit"));
            let temp = (tempFahr - 32) * 5 / 9;
            alert("A temperatura em Fahrenheit = " + tempFahr + "°F para Celsius é " + temp.toFixed(2) + "°C");

        } else if (menu === 10) {
            alert("Saindo do programa...");

        } else {
            alert("Opção inválida!");
        }
    }
}

function exercicio43() {
    let menu = undefined;

    while (menu != 10) {

        menu = parseInt(prompt(`
MENU de calculo do IMC:
1 - Calcular IMC
2 - Ver instruções de uso
10 - Sair
        `));

        if (menu === 1) {
            let peso = parseFloat(prompt("Digite seu peso: "))
            let altura = parseFloat(prompt("Digite sua altura: "))
            let imc = peso / (altura * altura);

            let classificacao = "";

            if (imc < 18.5) {
                classificacao = "Abaixo do peso ideal";
            } else if (imc < 25) {
                classificacao = "Peso normal (Eutrofia)";
            } else if (imc < 30) {
                classificacao = "Sobrepeso";
            } else {
                classificacao = "Obesidade";
            }

            alert("Seu IMC é: " + imc.toFixed(2) +
                "\nClassificação: " + classificacao
            );

        } else if (menu === 2) {
            alert("O IMC (Índice de Massa Corporal) é uma métrica internacional adotada pela Organização Mundial da Saúde (OMS) para avaliar se uma 		pessoa 	está em um peso saudável em relação à sua altura." +
                "\nClassificação para Adultos" +
                "\n-  Abaixo de 18,5: Abaixo do peso ideal." +
                "\n-  18,5 a 24,9: Peso normal (Eutrofia)." +
                "\n-  25,0 a 29,9: Sobrepeso." +
                "\n-  30,0 ou mais: Obesidade (dividida em graus I, II e III).");

        } else if (menu === 10) {
            alert("Saindo do programa...");

        } else {
            alert("Opção inválida!");
        }
    }
}

function exercicio44() {
    let menu = undefined;
    let estoque = 0;

    while (menu != 10) {

        menu = parseInt(prompt(`
MENU de controle de estoque:
1 - Adicionar item ao estoque
2 - Remover item do estoque
3 - Consultar quantidade em estoque
10 - Sair
        `));

        if (menu === 1) {
            let addEstoque = parseInt(prompt("Digite quantos produtos quer adicionar no estoque"));
            estoque = estoque + addEstoque

        } else if (menu === 2) {
            let removeEstoque = parseInt(prompt("Digite quantos produtos quer remover do estoque"));

            if (removeEstoque > estoque) {
                alert("Esse valor é maior que a quantidade em estoque");

            } else {
                estoque = estoque - removeEstoque
            }

        } else if (menu === 3) {
            alert("O estoque atual é " + estoque);

        } else if (menu === 10) {
            alert("Saindo do programa...");

        } else {
            alert("Opção inválida!");
        }

    }
}

function exercicio45() {

    let menu = undefined;
    let totalPedido = 0;
    let quantHamburguer = 0;
    let quantPizza = 0;
    let quantRefri = 0;
    const refri = 8;
    const pizza = 25;
    const hamburguer = 15;

    while (menu != 10) {
        menu = parseInt(prompt(`
MENU de lanche:
1 - Adicionar Hambúrguer (R$ 15,00)
2 - Adicionar Pizza (R$ 25,00)
3 - Adicionar Refrigerante (R$ 8,00)
4 - Ver total parcial
10 - Finalizar pedido 
        `));

        if (menu === 1) {
            alert("Um hamburguer foi adicionado ao seu pedido");
            totalPedido = totalPedido + hamburguer;
            quantHamburguer++;

        } else if (menu === 2) {
            alert("Uma pizza foi adicionada ao seu pedido");
            totalPedido = totalPedido + pizza;
            quantPizza++;

        } else if (menu === 3) {
            alert("Um refrigerante foi adicionado ao seu pedido");
            totalPedido = totalPedido + refri;
            quantRefri++

        } else if (menu === 4) {
            alert("Resumo Pedido" +
                "\n    - Quantidade de Hamburguer: " + quantHamburguer +
                "\n    - Quantidade de Pizza: " + quantPizza +
                "\n    - Quantidade de Refrigerente: " + quantRefri +
                "\n    - VALOR TOTAL:R$ " + totalPedido.toFixed(2));

        } else if (menu === 10) {
            alert("PEDIDO FINALIZADO" +
                "\n    - Quantidade de Hamburguer: " + quantHamburguer +
                "\n    - Quantidade de Pizza: " + quantPizza +
                "\n    - Quantidade de Refrigerente: " + quantRefri +
                "\n    - VALOR TOTAL:R$ " + totalPedido.toFixed(2));

        } else {
            alert("Opção inválida!");
        }
    }
}

function exercicio46() {

    let menu = undefined;
    let media = 0;
    let somaNota = 0;
    let quantNota = 0;

    while (menu != 10) {
        menu = parseInt(prompt(`
MENU de notas de alunos:
1 - Cadastrar nota
2 - Ver média das notas
3 - Ver quantidade de notas cadastradas
10 - Sair 
        `));

        if (menu === 1) {
            let nota = parseFloat(prompt("Digite a nota que deseja cadastrar:"));
            somaNota = somaNota + nota;
            quantNota++;

        } else if (menu === 2) {

            if (quantNota === 0) {
                alert("Nenhuma nota cadastrada ainda!");
            } else {
                media = somaNota / quantNota;
                alert("A média das notas cadastradas é " + media.toFixed(2));
            }

        } else if (menu === 3) {
            alert("A quantidade de notas cadastradas é " + quantNota);

        } else if (menu === 10) {
            alert("Saindo do programa...");

        } else {
            alert("Opção inválida!");
        }
    }
}

function exercicio47() {

    let menu = undefined;
    let quantBom = 0;
    let quantRegular = 0;
    let quantRuim = 0;
    let totalPesquisa = 0;

    while (menu != 10) {
        menu = parseInt(prompt(`
MENU pesquisa de satisfação:
1 - Registrar resposta "Bom"
2 - Registrar resposta "Regular"
3 - Registrar resposta "Ruim"
4 - Ver resumo da pesquisa
10 - Encerrar pesquisa 
        `));

        if (menu === 1) {
            quantBom++;

        } else if (menu === 2) {
            quantRegular++;

        } else if (menu === 3) {
            quantRuim++;

        } else if (menu === 4) {
            totalPesquisa = quantBom + quantRegular + quantRuim;
            alert("Resumo Pesquisa" +
                "\n    - Quantidade de Bom: " + quantBom +
                "\n    - Quantidade de Regular: " + quantRegular +
                "\n    - Quantidade de Ruim: " + quantRuim +
                "\n    - QUANTIDADE TOTAL DE RESPOSTAS: " + totalPesquisa);

        } else if (menu === 10) {
            alert("Saindo do programa...");

        } else {
            alert("Opção inválida!");
        }
    }
}

function exercicio48() {

    let indice = 0;
    let quantPedido = parseInt(prompt("Quantos pedidos você deseja cadastrar?"));
    let maiorCompra = 0;
    let menorCompra = Infinity;
    let totalCompras = 0;
    let mediaCompras = 0;
    let quantCredito = 0;
    let quantDebito = 0;
    let quantPix = 0;

    while (indice < quantPedido) {

        let nomeCliente = prompt("Digite o nome do cliente");
        let valorCompra = parseFloat(prompt("Digite o valor da compra"));

        totalCompras += valorCompra;

        if (valorCompra < menorCompra) {
            menorCompra = valorCompra;
        }

        if (valorCompra > maiorCompra) {
            maiorCompra = valorCompra;
        }

        let formPagamento = prompt("Forma de pagamento [CRÉDITO/DÉBITO/PIX]").toLowerCase();

        if (formPagamento === "crédito" || formPagamento === "credito") {
            quantCredito++;
        } else if (formPagamento === "débito" || formPagamento === "debito") {
            quantDebito++;
        } else if (formPagamento === "pix") {
            quantPix++;
        }

        indice++;
    }

    mediaCompras = totalCompras / quantPedido;

    alert(
        "Resumo Vendas" +
        "\n- Maior valor de compra: R$ " + maiorCompra.toFixed(2) +
        "\n- Menor valor de compra: R$ " + menorCompra.toFixed(2) +
        "\n- Média de compra: R$ " + mediaCompras.toFixed(2) +
        "\n- Quantidade de pagamentos no CRÉDITO: " + quantCredito +
        "\n- Quantidade de pagamentos no DÉBITO: " + quantDebito +
        "\n- Quantidade de pagamentos no PIX: " + quantPix
    );
}


function exercicios49() {

    let indice = 0;
    let quantAlunos = parseInt(prompt("Quantos alunos você deseja cadastrar?"));

    let somaIdade = 0;
    let pesoBaixo = 0;
    let pesoNormal = 0;
    let pesoAcima = 0;

    let menorImc = 999;
    let maiorImc = 0;
    let nomeMenor = "";
    let nomeMaior = "";

    while (indice < quantAlunos) {

        let nome = prompt("Digite o nome do aluno:");
        let idade = parseInt(prompt("Digite a idade do aluno"));
        somaIdade = somaIdade + idade;

        let peso = parseFloat(prompt("Digite seu peso: "));
        let altura = parseFloat(prompt("Digite sua altura: "));

        let imc = peso / (altura * altura);

        if (imc < menorImc) {
            menorImc = imc;
            nomeMenor = nome;
        }

        if (imc > maiorImc) {
            maiorImc = imc;
            nomeMaior = nome;
        }

        if (imc < 18.59) {
            pesoBaixo++;
        } else if (imc >= 18.59 && imc <= 24.99) {
            pesoNormal++;
        } else {
            pesoAcima++;
        }

        indice++;
    }

    let mediaIdade = somaIdade / quantAlunos;

    alert(
        "O aluno com maior IMC é " + nomeMaior + " com IMC de " + maiorImc.toFixed(2) +
        "\nO aluno com menor IMC é " + nomeMenor + " com IMC de " + menorImc.toFixed(2) +
        "\n\nResumo IMC - Alunos" +
        "\n- Abaixo do peso: " + pesoBaixo +
        "\n- Peso normal: " + pesoNormal +
        "\n- Sobrepeso: " + pesoAcima +
        "\n\nA média de idade dos alunos é: " + mediaIdade.toFixed(1) +
        " de " + quantAlunos + " alunos cadastrados"
    );
}
function exercicios50() {

    let indice = 0;
    let quantMaratona = parseInt(prompt("Quantos títulos deseja em uma maratona geek?"));

    let somaNota = 0;
    let mediaNota = 0;
    let maiorNota = 0;
    let nomeMaiorNota = "";
    let menorNota = 999;
    let nomeMenorNota = "";
    let quantFilme = 0;
    let quantAnime = 0;
    let quantSerie = 0;

    while (indice < quantMaratona) {

        let nome = prompt("Digite o nome do titulo:");
        let tipo = prompt("Tipo [FILME/SÉRIE/ANIME]:");

        if (tipo === "filme") {
            quantFilme++
        } else if (tipo === "série" || tipo === "serie") {
            quantSerie++
        } else if (tipo === "anime") {
            quantAnime++
        }

        let nota = parseInt(prompt("Digite a nota [0 a 10] "));

        somaNota = somaNota + nota;

        if (nota > maiorNota) {
            maiorNota = nota;
            nomeMaiorNota = nome;
        }

        if (nota < menorNota) {
            menorNota = nota;
            nomeMenorNota = nome;
        }

        indice++

    }

    mediaNota = somaNota / quantMaratona;

    alert(
        "A maior nota é " + maiorNota + " de " + nomeMaiorNota +
        "\nA menor nota é " + menorNota + " de " + nomeMenorNota +
        "\nA média de notas dos titulos é: " + mediaNota.toFixed(1) +
        "\n\nResumo Notas - Maratona " +
        "\n- Quantidade De Filmes: " + quantFilme +
        "\n- Quantidade De Animes: " + quantAnime +
        "\n- Quantidade De Séries: " + quantSerie +
        "\n- QUANTIDADE TOTAL DA MARATONA: " + quantMaratona
    );

}



function exercicio52() {
    let indice = 0;
    let quantidade = parseInt(prompt("Informe a quantidade de abastecimentos:"));

    let totalAlcool = 0;
    let totalGasolina = 0;
    let maiorCusto = 0;
    let menorCusto = 999999;

    while (indice < quantidade) {
        let tipo = prompt("Tipo de combustível (ALCOOL ou GASOLINA):").toUpperCase();
        let litros = parseFloat(prompt("Quantidade de litros:"));
        let preco = parseFloat(prompt("Preço por litro:"));

        let custo = litros * preco;

        indice = indice + 1;

        if (tipo === "ALCOOL") {
            totalAlcool = totalAlcool + litros;
        } else if (tipo === "GASOLINA") {
            totalGasolina = totalGasolina + litros;
        }

        if (custo < menorCusto) {
            menorCusto = custo;
        } else if (custo > maiorCusto) {
                maiorCusto = custo;
        }
    }

    alert(
        "Total de litros com ÁLCOOL: " + totalAlcool +
        "\nTotal de litros com GASOLINA: " + totalGasolina +
        "\nMaior custo de abastecimento: R$ " + maiorCusto.toFixed(2) +
        "\nMenor custo de abastecimento: R$ " + menorCusto.toFixed(2)
    );
}






