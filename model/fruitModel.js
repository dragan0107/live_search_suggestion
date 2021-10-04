//Our super simple model we use in this practice example. It will be a fruit document with only a name property we will query.
// const fruitArray = [{ name: 'Apple' }, { name: 'Peach' }, { name: 'Pear' }, { name: 'Apricot' }, { name: 'Banana' }, { name: 'Pineapple' }, { name: 'Watermelon' }, { name: 'Orange' }, { name: 'Strawberry' }];

const mongoose = require('mongoose');

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

const Fruit = mongoose.model('Fruit', fruitSchema);


module.exports = Fruit;