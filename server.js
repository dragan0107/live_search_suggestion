const express = require('express');
const mongoose = require('mongoose');
const Fruit = require('./model/fruitModel');
const app = express();


app.get('/', (req, res) => {
    res.send('henlo!')
});



app.listen(1717, () => {
    console.log('Server is now listening on port 1717!');
})