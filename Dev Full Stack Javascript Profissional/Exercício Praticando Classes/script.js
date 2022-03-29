class Spaceship {
    constructor(nome, qtdeTripulantes){
        this.name = nome;
        this.quantity = qtdeTripulantes;
        this.isHitched = false;
        this.entraceDoorsOpen = false;
    }

    engatar(){
        if (this.isHitched = true){
            alert("Aviso. A nave já está engatada no terminal!");
        }else{
            this.isHitched = true;
            this.abrirPorta();
            alert("Sucesso. Nave engatada no terminal e a porta está aberta!")
        }
    }

    desengatar(){
        if (this.entraceDoorsOpen = true){
            alert("Atenção. Feche a porta antes de desengatar a nave do terminal!");
        }else{
            this.isHitched = false;
            alert("Sucesso. Nave desengatada do terminal!");
        }
    }

    abrirPorta(){
        if (this.isHitched = false){
            alert("Atenção. Engate a nave no terminal para poder abrir a porta!");
        }else{
            this.entraceDoorsOpen = true;
            alert("Sucesso. Porta aberta!");
        }
    }
}

function createSpaceship(){
    let spaceshipName = prompt("Informe o nome da nave!")
    let crewQuantity = prompt("Informe a quantidade de tripulantes!")
    let spaceship = new Spaceship(spaceshipName, crewQuantity)
}

function printSpaceshipList(espaconaves){
    let spaceshipList = ""
    spaceshipList.forEach((spaceship, index) =>{
        spaceship += (index +1) + " - " + spaceship.name + " (" + spaceship.crewQuantity + " tripulantes)\n"
    })
    alert(spaceshipList)
}

let opcao;

let espaconaves = [];

while (opcao != "3"){
    opcao = prompt("O que deseja fazer?\n 1. Realizar engate\n 2. Imprimir naves\n 3. Sair do programa")

    switch(opcao){
        case '1': 
            alert("Realizar engate")
            let spaceshipToAdd = createSpaceship()
            spaceshipToAdd.engatar()
            espaconaves.push(spaceshipToAdd)
        case '2': 
            alert("Imprimir naves")
            printSpaceshipList(espaconaves)
        case '3':
            alert("Bye!!!")
            break;
        default: 
            alert("Atenção. Escolha uma opção do menu!")
    }
}
