function slowDown(velocity, printer){
    let deceleration = 20

    while (velocity > 0) {
        printer(velocity)
        velocity -= deceleration
    }

    alert("Nave parada. As comportas podem ser abertas.")
}

let spaceshipVelocity = 150

slowDown(spaceshipVelocity, function(velocity){
    console.log("Velocidade atual: " + velocity)
})


// aula de arryas
let convidados = ["Adriano Lucati", "Cleusa Ferraz", "Ana Paula", "Cidinha", "Aroldo"]

console.log("Posição de Cleusa é: " + convidados.indexOf("Cleusa Ferraz"))
console.log(convidados)
convidados.push("Renato Pelisson")
console.log(convidados)
let novaLista = new Array()
let removedConvidados = convidados.pop()
novaLista.push(removedConvidados)
console.log(novaLista)
console.log(convidados)
removedConvidados = convidados.shift()
novaLista.unshift(removedConvidados)
console.log(novaLista)
convidados.unshift("")
console.log(convidados)

// deixa todos os nomes com letra MAIUSCULA 
let upcasedConvidados = convidados.map(function(currentConvidados){
    let upcased = currentConvidados.toUpperCase()
    return upcased
})
console.log(upcasedConvidados)

// FILTER retorna um novo array, filtra apenas os nomes com 7 caracteres ou mais
let with7Chars = convidados.filter(Element => { return Element.length >= 7})
console.log(with7Chars)

// FIND retorna o elemento. 
let findConvidados = convidados.find(Element => { return Element.length >= 7})
console.log(findConvidados)

convidados.forEach(function(nome, index){
    console.log("Name: " + nome + "\nÍndice: " + index)
})
console.log("Posição de Cleusa é: " + convidados.indexOf("Cleusa Ferraz"))
let dadosConvidados = ["Adriano Lucati", 29, "Magalu"]

// arrays bidimencionais
let hitchedSpaceships = [ ["Elemental", 7], ["Helmet", 13], ["Golias", 5], ["Supernova", 10] ]

let space = [["Cons", 40],["Elem", 20],"Golias","Herlmet"]
console.log(space[2][1])

// console.log(hitchedSpaceships[][1])

// splice e slide
hitchedSpaceships.splice(2, 2, "Elon", "Nav", "Foguete")
console.log(hitchedSpaceships)
hitchedSpaceships.splice(2, "Nav", "Elon", "Nav", "Foguete")
console.log(hitchedSpaceships)
let slicee = hitchedSpaceships.slice(1,5)
console.log(slicee)