const express = require('express');

const getProduct = require('../getProduct')

const products = require('../products.json');

const app = express();

const port = 3005;

app.get('/api/products', products)

app.get('/api/products/:id', getProduct)

app.listen(port,() => {
    console.log(`🏃🏿‍: ${port}`)
})

