function exemploVariaveisCharizard(){

    const nome = "Charizard" ;
    const numero =  6;
    const descricao = "Se Charizard ficar realmente irritado, a chama na ponta de sua cauda queima em um tom azul claro.";
    const altura = 1.70;
    const peso = 90.5;
    const categoria = "Chama";
    const habilidades = "Chama";

    const imc = peso / (altura*altura);
    
    const imcArredondado = imc.toFixed(2)
    alert(
        "Nome: " + nome +
        "\nNumero: " + numero +
        "\nDescrição: " + descricao +
        "\nAltura: " + altura +
        "\nPeso: " + peso +
        "\nCategoria: " + categoria +
        "\nHabilidades: " + habilidades +
        "\nIMC: " + imcArredondado

    );
}

    function exemploVariaveisPikachu(){

    const nome = "Pikachu " ;
    const numero =  25;
    const descricao = "Quando se irrita, descarrega imediatamente a energia armazenada nas bolsas em suas bochechas";
    const altura = 0.4;
    const peso = 6.0;
    const categoria = "Rato";
    const habilidades = "Estático";

    const imc = peso / (altura*altura)
    const imcArredondado = imc.toFixed(2)


    alert(
        "Nome: " + nome +
        "\nNumero: " + numero +
        "\nDescrição: " + descricao +
        "\nAltura: " + altura +
        "\nPeso: " + peso +
        "\nCategoria: " + categoria +
        "\nHabilidades: " + habilidades +
        "\nIMC: " + imcArredondado

    );
}
    

    
