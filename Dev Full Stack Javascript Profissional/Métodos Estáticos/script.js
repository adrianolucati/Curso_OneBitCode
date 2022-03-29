class RessourceProcessorStation {
    constructor(name, monthlyProcessing){
        this.name = name
        this.monthlyProcessing = monthlyProcessing
    }

    static calculateProcessInHours(monthlyProcessing, hours){
        return monthlyProcessing / 720 * hours
    }
}

let totalProcessing = RessourceProcessorStation.calculateProcessInHours(500, 6)

console.log(totalProcessing)

let processor = new RessourceProcessorStation("Gaia", 2000)
let totalProcessed = RessourceProcessorStation.calculateProcessInHours(processor.monthlyProcessing, 7)
console.log(totalProcessed)