class Spaceship{
    constructor(name, maxCrew, maxRecommendedVelocity){
        this.name = name
        this.maxCrew = maxCrew
        this.maxRecommendedVelocity = maxRecommendedVelocity
        this.currentVelocity = 0
    }

    speedUp(acceleration){
        this.currentVelocity += acceleration
        if(this.currentVelocity > this.maxRecommendedVelocity){
            alert("VELOCIDADE MÁXIMA ULTRAPASSADA!!\nDiminua ou causará danos à nave.")
        }
    }
}

class BattleSpaceship extends Spaceship {
    stop(){
        this.currentVelocity = 0
        alert("Recolhendo armas e parando nave de batalha")
    }
}

class DiscoverySpaceship extends Spaceship {
    stop(){
        this.currentVelocity = 0
        alert("Recolhendo equipamento de amostras e parando nave de descoberta")
    }
}

let darvin = new DiscoverySpaceship("Darvin", 10, 200)

let fenix = new BattleSpaceship("Fenix", 8, 240)

console.log(darvin)

console.log(fenix)

darvin.speedUp(210)

fenix.speedUp(230)

darvin.stop()

fenix.stop()


// SOBRESCRITA DE MÉTODO
class TransportSpaceship extends Spaceship {
    speedUp() {
        alert("Naves de transporte só aumentam a velocidade em 1km/s")
        this.currentVelocity += 1
    }
}

let transporteSpaceship = new TransportSpaceship("Transportadora", 4, 100)

transporteSpaceship.speedUp(130)

// SUPER
class TransportSpaceshipSuper extends Spaceship {
    constructor(name, maxCrew, maxRecommendedVelocity, maxLoadWeight){
        super(name, maxCrew, maxRecommendedVelocity)
        this.maxLoadWeight = maxLoadWeight
    }

    speedUp(acceleration){
        acceleration /= 2
        alert("Incrementando velocidade em " + acceleration + "km/s")
        super.speedUp(acceleration)
    }
}

let transporteSpaceshipSuper = new TransportSpaceshipSuper("Transportadora Super", 4, 100, 400)
console.log(transporteSpaceshipSuper)
transporteSpaceshipSuper.speedUp(210)