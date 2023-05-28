const swapi = require('swapi-node')
const polyglot = require('./helpers/dictionaryHelper')
const swapiHelper  = require('./helpers/swapiHelper')

class SwapiService {
    constructor() { }

    async getDataOfSWAPI(id) {
        const swapiDataDb = await swapiHelper.existSwapiDb(id)
        if (swapiDataDb) {
            return {
                status: 200,
                data: swapiDataDb
            }
        }

        const swapiData = await swapi.people({ id })
        const props = Object.keys(swapiData)
        const values = Object.values(swapiData)
        let newData = {}
        for (let i = 0; i < props.length; i++) {
            newData[polyglot.t(props[i])] = values[i]
        }
        await swapiHelper.registerSwapiDb(newData, id)

        return {
            status: 200,
            data: newData
        }
    }

}

const swapiService = new SwapiService()


module.exports = {
    swapiService
}