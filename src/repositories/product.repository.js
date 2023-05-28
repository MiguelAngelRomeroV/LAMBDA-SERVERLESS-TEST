const { db } = require('../config/db.config');
const AWS = require('aws-sdk');


class ProductRepository {
    dynamodb;
    constructor(){
        this.dynamodb = new AWS.DynamoDB.DocumentClient();
    }

    async createProduct(product){
        await this.dynamodb.put({
            TableName: db.productTable,
            Item: product
        }).promise();
    }
    
    async deleteProduct(id){
        await this.dynamodb.delete({
            TableName: db.productTable,
            Key: { productId:id }
        }).promise();
    }
    
    async getProducts(){
        const items = await this.dynamodb.scan({
            TableName: db.productTable
        }).promise();
        return items;
    }
    
    async getProduct(id){
        const item = await this.dynamodb.get({
            TableName: db.productTable,
            Key: {
                productId: id
            }
        }).promise();
        return item;
    }
    
    async updateProduct(id, description){
        await this.dynamodb.update({
            TableName: db.productTable,
            Key: { productId: id },
            UpdateExpression: "set description = :description",
            ExpressionAttributeValues: {
              ":description": description
            },
            ReturnValues: "ALL_NEW"
        }).promise();
    }

}


const productRepository = new ProductRepository();

module.exports = {
    productRepository
}



