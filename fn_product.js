const serverless = require("serverless-http")
const express = require('express')
const productRouter = require('./src/routes/product.routes')
const app = express()

const swaggerUi = require('swagger-ui-express')
const path = require('node:path'); 
const file = path.resolve(process.env.LAMBDA_TASK_ROOT, '_optimize', process.env.AWS_LAMBDA_FUNCTION_NAME, './swagger.yaml');
const YAML = require('yaml')
const swaggerDocument = YAML.parse(file)
 
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use("/api", productRouter)
app.use((req, res) => {
  res.status(404).json({
    error: "Not Found",
    statusCode: 404
  })
})

module.exports.handler = serverless(app);
