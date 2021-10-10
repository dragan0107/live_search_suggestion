const express = require('express');
const mongoose = require('mongoose');
const Fruit = require('./model/fruitModel');
const app = express();

mongoose.connect('mongodb://localhost:27017/fruitLiveSearch', { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Connected to database!');
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`public`)); // All static files for the browser and the client side will be read from 'public' folder.


app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/views/index.html`); // We serve our main html file.
});

app.post('/fruitSearch', async(req, res) => {
    let fruitQuery = req.body.fruitExample.trim(); // we trim for spaces before and after the input.
    let results = await Fruit.find({ name: { $regex: new RegExp('^' + fruitQuery + '.*', 'i') } }).exec(); // This regex help us to make case insensitive queries,and it will also return every result after the initial letter(s)
    res.send({ foundValues: results }); // We send response obj to the client, and results under the foundValues property.
});



app.listen(1717, () => {
    console.log('Server is now listening on port 1717!');
})