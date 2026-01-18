function exemplo(){
    let indice = 0;

    while(indice < 4){
        let nome = prompt("Digite o nome");
    }

    indice = indice + 1;

}
// só pode ser usado quando sabemos a quantidade(predefinida ou quatidade digitada pelo usuario), não pode se usado quando pedimos para o usuario algo para sair(ex: sair)

//declara variavel; condição ;
    for (let indice = 0; indice < 4; indice = indice + 1){
        let nome = prompt ("Digite o nome: ");
    }

function relogio(){
    for (let hora = 0;hora < 24; hora = hora + 1){
        for (let minuto =0; minuto < 60;minuto = minuto + 1 ){
           for (let segundo =0; segundo < 60;segundo = segundo + 1 ){
                alert (hora + ":" + minuto + ":" + segundo);
           }
        }
    }
}

function solicitarDadosPaciente() {
    let quantidadePacientes = parseInt(prompt("Digite a quantidade"));

    for (let indice = 0; indice < quantidadePacientes; indice = indice + 1) {
        let nome = prompt("Digite o nome do paciente");
        let idade = parseInt(prompt("Digite a idade do paciente"));
        let peso = parseFloat(prompt("Digite o peso do paciente"));
        let altura = parseFloat(prompt("Digite a altura do paciente"));
    }
}
    for(let indice = 0; indice < quantidadePacientes ; indice = indice + 1) {
        let nome = prompt("Digite o nome do paciente");
        let 
    }


function exemploContagemRegressiva() {
    // declarar variável; condição; decrementar
    for (let indice = 10; indice >= 0; indice = indice - 1) {
        alert(indice);
    }
    alert('feliz ano novo!')
}

function apresentarNumerosParesAte1000(){
    for(let i = 0; i <= 1000; i = i + 1){
        if (i % 2 == 0){
            alert(i);
        }
    }

    for(let i = 0; i <= 1000; i = i + 1){
        alert(i);
    }
}
