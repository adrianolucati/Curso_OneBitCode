function pegaDados() {
    alert("Bem vindo");
    var nome = prompt("Informe seu nome: ");
    var idade = prompt("Idade: ");
    var confirmaIdade = prompt("Confieme sua idade: ");
    while (idade != confirmaIdade) {
        alert("Erro na confirmação da idade: ");
        idade = prompt("Informe sua idade: ");
        confirmaIdade = prompt("Confieme sua idade: ");
    }
    alert("Muto bem " + nome + "!\nA idade informada é " + idade)
}

var nameOlderPerson = prompt("Informe o nome da pessoa mais velha")
var ageOlderPerson = prompt("Informe a idade da pessoa mais velha")
var nameYoungerPerson = prompt("Informe o nome da pessoa mais nova")
var ageYoungerPerson = prompt("Informe a idade da pessoa mais nova")

while (isNaN(ageOlderPerson)) {
    ageOlderPerson = prompt("Informe a idade de " + nameOlderPerson)
}

while (isNaN(ageYoungerPerson)) {
    ageYoungerPerson = prompt("Informe a idade de " + nameYoungerPerson)
}

var ageDifference = ageOlderPerson - ageYoungerPerson

alert(nameOlderPerson + " é a pessoa mais velha. Ela tem " + ageOlderPerson + " anos\n" +
nameYoungerPerson + " é a pessoa mais nova. Ela tem " + ageYoungerPerson + " anos\n" +
nameOlderPerson + " é " + ageDifference + " anos mais velho(a) que " +nameYoungerPerson)