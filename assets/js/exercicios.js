function exercicio01(){
    let indice = 0;

    while (indice < 5) {

        const nome = prompt("Informe o nome do aluno:");

        indice = indice + 1 ;

        alert("Aluno Cadastrado: " + nome);
    
    }

    alert("Cadastro Finalizado")

}

function exercicio02(){
    let indice = 0;

    
    while (indice <= 3){
        let cor = prompt(`
Digite Suas Cores Favoritas:
        - Digite uma cor:`);

         indice = indice + 1;
    }
    alert("Obrigado por informar suas cores favoritas");
}

function exercicio03(){
    debugger
    let indice = 0;

    while (indice <= 2){

    let destino = prompt(`
Digite 3 cidade para onde você gostaria de viajar:
        - Digite o nome da cidade:`);

        indice = indice + 1;
        
        alert("Destino " + indice + ": " + destino);
    }

    alert("Planejamento de viagem concluído");
   

}