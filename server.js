const express = require('express');
const mongoose = require('mongoose');
const Fruit = require('./model/fruitModel');
const app = express();

mongoose.connect('mongodb://localhost:27017/fruitLiveSearch', { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Connected to database!');
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/views/index.html`);
});

app.post('/fruitSearch', async(req, res) => {
    let fruitQuery = req.body.fruitExample.trim();
    let results = await Fruit.find({ name: { $regex: new RegExp('^' + fruitQuery + '.*', 'i') } }).exec();
    res.send({ foundValues: results })
})



app.listen(1717, () => {
    console.log('Server is now listening on port 1717!');
})