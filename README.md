
## SRC FILE
You can find the code in the src file. 

In the service folder you can see the business logic, in the repository layer you can see the connections with the database about a little CRUD using SERVERLESS FRAMEWORK. 

***
## RUN PROJECT
You can run the project on your local to do this run install the dependencies with __'npm install'__ , set your __AWS_ACCESS_KEY_ID__ and __AWS_SECRET_ACCESS_KEY__,(you can use a local environment variable by adding an __.env__ file) and run the command __npm run dev__

## ENDPOINTS
You have to know this concepts
1. __BASE_URL:__ _https://sx2s9792u8.execute-api.us-west-2.amazonaws.com_
2. __ID_SWAPI:__ _this is the person's id from SWAPI API_
3. __UID:__ _this is a unique id of a product in DynamoDB_

To request information in spanish about a person using SWAPI API, the route is: __BASE_URL/swapi/ID_SWAPI__ the method for this route is GET. This api first validates the existence of the person in DynamoDB and if it does not find it, it proceeds to consult the api, translate the information and store it in DynamoDB

## UNIT TEST
The test folder has the unit tests with jest : __TEST/SWAPPI.TEST__ AND __TEST/PRODUCT.TEST__

## DOCUMENTATION
To create a Product and save this information in DynamoDB, the route is: __BASE_URL/product__ the method for this route is POST and you have to send a body, similar like this:
```
{
  "name": "name_of_product",
  "description": "description_of_product",
  "price": "price_of_product"
}
```

To get all products from DynamoDB, the route is: ___BASE_URL/products__ the method for this route is GET

To find a product by id from DynamoDB, the route is: __BASE_URL/product/find/UID__ the method for this route is GET

To update product's information by id from DynamoDB, the route is: ___BASE_URL/product/update/UID__ the method for this route is PUT

To delete product's information by id from DynamoDB, the route is: ___BASE_URL/product/delete/UID__ the method for this route is DELETE


