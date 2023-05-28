const { swapiRepository } = require('../../repositories/swapi.repository');

const existSwapiDb = async (id) => {
    const { Item } = await swapiRepository.getSwapiDb(id);
    return (Item) ? Item : false
}

const registerSwapiDb = async (spanishData, id) => {
    const data = { id, ...spanishData }
    await swapiRepository.createSwapiDb(data);
}

module.exports = {
    existSwapiDb,
    registerSwapiDb
}