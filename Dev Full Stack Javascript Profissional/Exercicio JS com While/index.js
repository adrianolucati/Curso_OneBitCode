var navName = prompt("Qual é o ome da nave?")

var choseOption = confirm("Deseja entrar em dobra espacial?")

var warpCout = 0

while (choseOption == true) {
    warpCout += 1
    choseOption = confirm("Deseja realizar a próxima dobra?")
}

alert("Nome da nave: " + navName + "\nQuantidade de dobras realizadas: " + warpCout)