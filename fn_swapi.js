const serverless = require("serverless-http")
const express = require('express')
const swapiRouter = require('./src/routes/swapi.routes')
const app = express()

app.use(express.json());
app.use("/swapi", swapiRouter)
app.use((req, res) => {
  res.status(404).json({
    error: "Not Found",
    statusCode: 404
  })
})

module.exports.handler = serverless(app);
