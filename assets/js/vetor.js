// var = variavel global, ou seja, existe em todos os arquivos (inseguro)
// let = variavel que possui escopo, ou seja, existe dentro do if,while, function...
// const = variavel que não permite alteração, ou seja, uma vez que foi danificado o valor não é possivel alterara.Tem a mesma caracteristica do let em relação a escopo, existe dentro do if, while, function, fora deixa de existir (ela morre)

function exemplo01(){
// criando um vetor
let frutas = [];
// adicionando os itens no vetor
frutas.push("Maça");
frutas.push("Pera");
frutas.push("Totamte");
frutas.push("Rucula");

// Alterando valor no vetor]
frutas[2] = "Tomate";

// Removendo 'Rucula' da lista de frutas
frutas.splice(3,1); // 3 é a posição da rucula no vetor

console.log("Tamanho do vetor:" + frutas.length);

// Acessando uma posição especifica do vetor, ou seja, acessando  o valor de armazenamento naquela posição

console.log("Fruta 1:" + frutas[0]);
console.log("Fruta 2:" + frutas[1]);
console.log("Fruta 3:" + frutas[2]);

} 

function exemplo02(){

    let jogos = [];

    jogos.push("Tibia");
    jogos.push("Bettlefied 4");
    jogos.push("League of Legends");
    jogos.push("Metal of Honor");
    jogos.push("GTA 6");
    
    console.log("Tamanho do vetor:" + jogos.length);
    console.log("Jogo 1:" + jogos[0]);
    console.log("Jogo 2:" + jogos[1]);
    console.log("Jogo 3:" + jogos[2]);
    console.log("Jogo 4:" + jogos[3]);
    console.log("Jogo 5:" + jogos[4]);
    
    // Removendo Lol da lista
    jogos.splice(2,1);
    console.log(" ")
    console.log("Removendo Lol da lista")
    console.log("Jogo 1:" + jogos[0]);
    console.log("Jogo 2:" + jogos[1]);
    console.log("Jogo 3:" + jogos[2]);
    console.log("Jogo 4:" + jogos[3]);
    console.log("Jogo 5:" + jogos[4]);

    // Alterando nome de GTA 6 para GTA IV
    jogos [3] = "GTA IV";
    console.log(" ");
    console.log("Alterando nome de GTA 6 para GTA IV")
    console.log("Jogo 1:" + jogos[0]);
    console.log("Jogo 2:" + jogos[1]);
    console.log("Jogo 3:" + jogos[2]);
    console.log("Jogo 4:" + jogos[3]);
    console.log("Jogo 5:" + jogos[4]);
    
}

function exemplo03(){

    let pratos = [];

    pratos.push("Strognoff")
    pratos.push("Panqueca")
    pratos.push("Salada")

    console.log("Tamanho do vetor:" + pratos.length);
    console.log("Prato 1:" + pratos[0]);
    console.log("Prato 2:" + pratos[1]);
    console.log("Prato 3:" + pratos[2]);

    // Removendo Salada da lista
    pratos.splice(2,1);
    console.log(" ")
    console.log("Removendo Salada da lista")
    console.log("Tamanho do vetor:" + pratos.length);
    console.log("Prato 1:" + pratos[0]);
    console.log("Prato 2:" + pratos[1]);


    // Adicionando Risoto e Sopa na Lista
    pratos.push("Risoto")
    pratos.push("Sopa")

    console.log(" ")
    console.log("Adicionando Risoto e Sopa na Lista")
    console.log("Tamanho do vetor:" + pratos.length);
    console.log("Prato 1:" + pratos[0]);
    console.log("Prato 2:" + pratos[1]);
    console.log("Prato 3:" + pratos[2]);
    console.log("Prato 4:" + pratos[3]);

    // Alterando nome de 'Panqueca' para 'Panqueca de Carne'
    pratos[1] = "Panqueca de Carne";
    console.log(" ");
    console.log("Alterando nome de 'Panqueca' para 'Panqueca de Carne'")

    console.log("Prato 1:" + pratos[0]);
    console.log("Prato 2:" + pratos[1]);
    console.log("Prato 3:" + pratos[2]);
    console.log("Prato 4:" + pratos[3]);

}



