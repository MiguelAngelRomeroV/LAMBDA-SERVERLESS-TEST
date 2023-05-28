const { v4 } = require("uuid");
const { productService } = require("../services/product.service");

describe("product test", () => {
    test("create product", async () => {
        const product = { name: 'TV', description: 'JIMENEZ', price: "123232111" }
        
        const createAt = new Date().getTime();
        const id = v4();

        const newProduct = {
            productId: id,
            name : product.name,
            description: product.lastName,
            price: product.dni,
            createAt
        }

        const result = {
            ...product,
            createAt,
            productId: id,
        }

        expect(result).toStrictEqual(newProduct);
    });

    test("find product", async () => {
        let result = await productService.getProduct('d18d7997-1b18-4704-89bc-0982cd89216c')
        expect(result).toBe({
            "product": {
              "status": 200,
              "product": {
                "createAt": 1654567006075,
                "name": "TV",
                "description": "TV of 23''",
                "productId": "e28debad-adfb-46f1-bf2d-6756fcc048b0",
                "price": 111111
              }
            }
          });
    });

    test("get products", async () => {
        let result = await productService.getProducts()
        expect(result).toBe({
            "products": {
              "status": 200,
              "products": [
                {
                  "name": "TV",
                  "createAt": 1654561328276,
                  "description": "TV 23''",
                  "productId": "d18d7997-1b18-4704-89bc-0982cd89216c",
                  "price": 3000
                },
                {
                  "name": "SMARTWATCH",
                  "createAt": 1654567006075,
                  "description": "SMARTWATCH color white",
                  "productId": "e28debad-adfb-46f1-bf2d-6756fcc048b0",
                  "price": 500
                },
                {
                  "createAt": 1654558865706,
                  "name": "RADIO",
                  "description": "RADIO SONY",
                  "productId": "5e1e1038-acca-4746-9901-1db392f3489d",
                  "price": 2000
                }
              ]
            }
          });
    });

    test("delete product", async () => {
        let result = await productService.deleteProduct('e28debad-adfb-46f1-bf2d-6756fcc048b0')
        expect(result).toBe({
            status: 200,
            msg: 'Product deleted'
          });
    });

    test("update product",async  () => {
        let result = await productService.updateProduct({
            "description": "TV 58''"
          })
        expect(result).toBe({
            "product": {
            "status": 200,
            "msg": "Product Updated"
            }
        });
    });


})