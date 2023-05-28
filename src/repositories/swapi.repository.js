const { db } = require('../config/db.config');
const AWS = require('aws-sdk');
class SwapiRepository {
    dynamodb;
    constructor() {
        this.dynamodb = new AWS.DynamoDB.DocumentClient();
    }

    async getSwapiDb(id) {
        const item = await this.dynamodb.get({
            TableName: db.swapiTable,
            Key: {
                id
            }
        }).promise();
        return item;
    }

    async createSwapiDb(data) {
        await this.dynamodb.put({
            TableName: db.swapiTable,
            Item: data
        }).promise();
    }

}


const swapiRepository = new SwapiRepository();

module.exports = {
    swapiRepository
}



