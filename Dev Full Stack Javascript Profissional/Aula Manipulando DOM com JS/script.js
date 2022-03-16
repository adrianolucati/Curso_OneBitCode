//SELETORES
const buttonExtrato = document.querySelector(".secaoDetalhesConta")

const button = document.querySelector(".btnExtrato")
button.innerText = "Adriano"
let msg = "Ana Paula Borges Lucati"
console.log(button)

// button.innerHTML = "Lucati"
button.style.background = "red"
button.style.color = "white"
button.style.border = "0px"

const lista = document.querySelector("body")

lista.innerHTML += "<ul><li>Adriano</li><li>Ferraz</li><li>Lucati</li><li>1992</li></ul>\n" + msg
+ "\n<input type='password'></input>"

const tagButton = document.createElement("button")
tagButton.innerText = "extrato 2"
lista.appendChild(tagButton)

function addLinha(){
    const liNome = document.createElement("li")
    liNome.inn
}

// adicionar um evento no botão/clique
let btnAdicionar = document.querySelector(".btnAdicionar")
console.log(btnAdicionar)

let listaExcluir = document.querySelector("ol li")

btnAdicionar.addEventListener("click", pegarValores)
listaExcluir.addEventListener("click", apagarValor)

function apagarValor(event){
    console.log(event)
}

function pegarValores(event){
    console.log(event)
    // selecionar campo input e pegar valor do campo
    const inputTexto = document.querySelector(".inputTexto")
    const valorInput = inputTexto.value
    console.log(valorInput)
    const li = document.createElement("li")
    li.innerHTML = valorInput

    ol.appendChild(li)
    console.log(listaExcluir)
}
// guardar o valor em algum lugar
// selecionar a lista
const ol = document.querySelector("ol")

// criar um LI (item da lista)
// alimentar com o valor do input
// jogar ele pra dentro da lista
alert("oi")