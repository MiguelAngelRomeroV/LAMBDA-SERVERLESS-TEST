const  { productRepository } = require('../repositories/product.repository');
const { v4 } = require('uuid');

class ProductService {
   
    constructor(){}

    async createProduct(product){
        const { name, description, price } = product;
        const createAt = new Date().getTime();
        const id = v4();

        const newProduct = {
            productId: id,
            name,
            description,
            price,
            createAt
        }

        await productRepository.createProduct(newProduct);

        return {
            status: 200,
            product
        }

    }
    
    async deleteProduct(id){
        const { Item } = await productRepository.getProduct(id);
      
        if(!Item) {
          return {
            status: 400,
            msg: `We can't find the product with this id, ${id}`
          }
        }
        
        await productRepository.deleteProduct(id)
      
        return {
          status: 200,
          msg: 'Product deleted'
        }
    }
    
    async getProducts(){
        const { Items } = await productRepository.getProducts();
        return {
            status: 200,
            ...((Items.length > 0) ? { products: Items } : {msg: `We don't have products in our database`})
        }
    }
    
    async getProduct(id){
        const { Item } = await productRepository.getProduct(id);
        if(!Item) {
            return {
                status: 400,
                msg: `We can't find the product with this id, ${id}`
            }
        }

        return {
            status: 200,
            product: Item
        }
    }
    
    async updateProduct(id, description){
      
        const { Item } = await productRepository.getProduct(id);
      
        if(!Item) {
          return {
            status: 400,
            msg: `We can't find the product with this id, ${id}`
          }
        }
        await productRepository.updateProduct(id, description);
        
        return {
          status: 200,
          msg: 'Product Updated!!!'
        }
    }

}


const productService = new ProductService();

module.exports = {
  productService
}
