const { productService } = require('../services/product.service.js')
const router = require('express').Router()

router.get('/products', async (req, res) => {
    try {
       const products = await productService.getProducts();
       res.send({products});
    } catch (error) {
        return res.send({
            status: 500,
            error
        })  
    }
})

router.get('/product/find/:productId' , async (req , res)=> {
    try {
       const product = await productService.getProduct(req.params.productId);
       res.send({product});
    } catch (error) {
        return res.send({
            status: 500,
            error
        })
    }
})

router.put('/product/update/:productId', async (req, res) => {
    try {
        const product = await productService.updateProduct(req.params.productId, req.body.description);
        res.send({product});
    } catch (error) {
         return res.send({
            status: 500,
            error
         })
    }
})

router.delete('/product/delete/:productId', async (req, res) => {
    try {
        const product = await productService.deleteProduct(req.params.productId);
        res.send({product});
    } catch (error) {
         return res.send({
            status: 500,
            error
         })
    }
})

router.post('/product/create', async (req, res) => {
    try {
        const product = await productService.createProduct(req.body);
        res.send({product});
    } catch (error) {
         return res.send({
            status: 500,
            error
         })
    }
})

module.exports  = router