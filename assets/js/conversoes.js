function converterStringParaInt(){
    const numeroTexto1 = "19";
    const numero1 = parseInt(numeroTexto1);
    

    const numeroTexto2 = "81";
    const numero2 = parseInt(numeroTexto2);

    const soma = numero1 + numero2;
    alert("Soma: " + soma)
}

function converterStringParaFloat(){
    const valorHora = parseFloat("55.91");

    const quantidade = parseFloat("220");

    const valorBruto = valorHora + quantidade;

    const valorBrutoArredondado = valorBruto.toFixed(2)
    alert("Valor Bruto: " + valorBrutoArredondado);
}