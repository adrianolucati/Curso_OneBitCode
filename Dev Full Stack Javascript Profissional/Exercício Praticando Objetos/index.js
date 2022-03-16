document.onkeydown = teclado

let textoVelocidade = document.querySelector('#velocidade')

let spaceshipName = document.querySelector('#spaceshipName')

let spaceshipType = document.querySelector('#spaceshipType')

let spaceshipMaxSpeed = document.querySelector('#maxSpeed')

let btnStart = document.querySelector('#btnStart')

let btnSpeedUp = document.querySelector('#btnSpeedUp')

let btnSlowDown = document.querySelector('#btnSlowDown')

let btnStop = document.querySelector('#btnStop')

let velocidade = -1

let spaceship = {
    velocity: 0,
    speedUp: function(acceleration) {
        this.velocity += acceleration
    }
}
// let selecionado = spaceshipType.options[spaceshipType.selectedIndex].value
// alert(selecionado)
function registerSpaceship() {
    spaceship.Name = prompt("Informe o nome da nave")
    spaceshipName.value = spaceship.Name
    spaceship.type = Number(prompt("Informe o tipo da nave\n1. Pequena\n2. Média\n3. Grande\n4Muito grande"))
    spaceshipType.selectedIndex = spaceship.type - 1
    spaceship.maxVelocity = Number(prompt("Informe a velocidade máxima da nave (km/s)"))
    spaceshipMaxSpeed.value = spaceship.maxVelocity
}

function showMenu() {
    let chosenOption
    do {
        chosenOption = prompt("Voc~e deseja:\n1- Acelerar +10km/s\n2 - Desacelerar -10km/s\n3 - Parar\n4 - Ligar a nave\n5 - Sair")
        switch(chosenOption) {
            case "1":
                acelerar(10)
                break
            case "2":
                desacelerar(10)
                break
            case "3":
                parar()
                break
            case "4":
                break
            case "5":
                break
        }
    } while (chosenOption > 0 && chosenOption < 5)
}

btnStart.addEventListener('click', darPartida)
btnSpeedUp.addEventListener('click', acelerar)
btnSlowDown.addEventListener('click', desacelerar)
btnStop.addEventListener('click', parar)
spaceshipMaxSpeed.addEventListener('click', defineMaxVelocity)

function defineMaxVelocity(){
    spaceship.maxVelocity = spaceshipMaxSpeed.value
    console.log(spaceship.maxVelocity)
}

function darPartida(){
    if(velocidade == -1){
        registerSpaceship()
        alert('Motores da ' + spaceshipName.value + ' ligados')
        velocidade = 0
        textoVelocidade.innerHTML = 'Start'
    }else if (velocidade == 0){
        alert('Motores da ' + spaceshipName.value + ' desligados')
        velocidade = -1
        textoVelocidade.innerHTML = 'Off'
    }else{
        alert('ATENÇÃO, a nave já está em funcionamento!')
    }
}

function acelerar(){
    // while (e.onkeyup){
        if(velocidade == -1){
            alert('Os motores estão desligados. Ligue a nave!')
        }else if (velocidade + 10 < spaceship.maxVelocity){
            velocidade += 10
        }else{
            velocidade = spaceship.maxVelocity
            alert('Velocidade Máxima Atingida: ' + spaceship.maxVelocity + 'km/s')
        }
        textoVelocidade.innerHTML = velocidade
        
}

function desacelerar(){
    if (velocidade > 0){
        velocidade -= 1
        textoVelocidade.innerHTML = velocidade
    }else{
        alert("Nave parada")
    }
}

function parar(){
    while (velocidade > 0){
        setInterval(velocidade -= 1, 1000)
        document.getElementById('velocidade').textContent = velocidade;
        // setInterval(textoVelocidade.innerHTML = velocidade, 9.5*1000)
        console.log(velocidade)
    }
    textoVelocidade.innerHTML = 'Stop'
    alert("Nave parada")
    
    alert('Motores desligados')
}

function teclado(e){
    if (e.keyCode == 38){        //seta para cima
        acelerar()
    }else if(e.keyCode == 40){        //seta para baixo
        desacelerar()
    }else if(e.keyCode == 37){        //seta para esquerda
        const velocida = setInterval(parar(),1000)
    }else if(e.keyCode == 39){        //seta para direita
        darPartida()
    }else if(e.keyCode == 32){        //espaço
        showMenu()
    }else{
        textoVelocidade.innerHTML = e.keyCode
    }
}

//Capturing e Bubbling

// const $divs = document.querySelectorAll('div')

// $divs.forEach(
//     $dir => $div.addEventListener('click', logClass, {
//         capture: true
//     })
// )

// function logClass(e){
//     e.stopPropagation()

//     console.log(this.classList.value)
// }
let teste = 19.5
alert(checkType('19.5'))
function checkType (value){
    let matrix = value && typeof value === 'object' && value.constructor === Array;

    let tipo
    let decimal
    let inteiro

    let texto = typeof value === 'string';
    texto == true ? tipo = 'texto' : ''

    let data =  value instanceof Date;
    data == true ? tipo = 'data' : ''

    let funcao = typeof value === 'function';
    funcao == true ? tipo = 'função' : ''

    let objeto = value && typeof value === 'object' && value.constructor === Object;
    objeto == true ? tipo = 'objeto' : ''

    let nulo = value === null;
    nulo == true ? tipo = 'nulo' : ''

    let indefinido = typeof value === 'undefined';
    indefinido == true ? tipo = 'indefinido' : ''

    let booleano = typeof value === 'boolean';
    booleano == true ? tipo = 'booleano' : ''

    let expressaoRegular = value && typeof value === 'object' && value.constructor === RegExp;
    expressaoRegular == true ? tipo = 'Expressão Regular' : ''

    let erro = value instanceof Error && typeof value.message !== 'undefined';
    erro == true ? tipo = 'Erro' : ''

    let simbolo = typeof value === 'symbol';
    simbolo == true ? tipo = "Simbolo" : ''
    
    if( typeof value === 'number' && isFinite(data)){
        if (value.indexOf(',') > -1 || value.includes('.') ){
            tipo = 'decimal';
        }else{
            tipo = 'inteiro';
        }
    }

    return tipo
}

console.log(CheckDataTypes(teste))

function CheckDataTypes(data) {
    return {
        typeof: (typeof data),
        constructor: (data.constructor),
        isString: (typeof data === 'string' || data instanceof String),
        isNumber: (typeof data === 'number' && isFinite(data)),
        isArray: (data && typeof data === 'object' && data.constructor === Array),
        isFunction: (typeof data === 'function'),
        isObject: (data && typeof data === 'object' && data.constructor === Object),
        isNull: (data === null),
        isUndefined: (typeof data === 'undefined'),
        isBoolean: (typeof data === 'boolean'),
        isRegExp: (data && typeof data === 'object' && data.constructor === RegExp),
        isError: (data instanceof Error && typeof data.message !== 'undefined'),
        isDate: (data instanceof Date),
        isSymbol: (typeof data === 'symbol')
    }
}