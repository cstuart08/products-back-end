require('dotenv').config()
const express = require('express')
const massive = require('massive')
const productsController = require('./product controllers/productsController')
const app = express()

app.use(express.json())

const {SERVER_PORT, CONNECTION_STRING} = process.env

app.get('/api/products', productsController.getAllProducts)
app.get('/api/products/:id', productsController.getProduct)
app.post('/api/products', productsController.createProduct)
app.put('/api/products/:id', productsController.updateProduct)
app.delete('/api/products/:id', productsController.deleteProduct)

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then( dbInstance => {
    app.set('db', dbInstance)
    app.listen(SERVER_PORT, () => {
        console.log(`Listening on Port: ${SERVER_PORT}`)
    })
}).catch(error => {
    console.log('Ran into an error setting the dbInstance.')
})