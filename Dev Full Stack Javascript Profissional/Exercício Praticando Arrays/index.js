const hitchedSpaceships = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwth", 15, false]
  ];

  let crewGreaterThan9 = hitchedSpaceships.filter(spaceship => {
      return spaceship[1] > 9
  }).map(spaceship => {
      return spaceship[0]
  })

//   retorna a posição da nave que não está acoplada  ["Helmet", 5, false],
  let ongoingHitchPlatform = hitchedSpaceships.findIndex(spaceship =>{
      return spaceship[2] == false
  })

//   percorre a lista de nave, e o metodo .map pega todos os valores da posição 0 e retorna com UpperCase
  let highlightedSpaceships = hitchedSpaceships.map(spaceship =>{
      return spaceship[0].toUpperCase()
  })

let message = "Espaçonaves com mais de 9 tripulantes: " + crewGreaterThan9.join(", ")
console.log(message)
message += "\nPlataforma com processo de engate: " + (ongoingHitchPlatform +1)
console.log(message)
message += "\nEspaçonaves destacadas: " + highlightedSpaceships.join(", ")
alert(message)