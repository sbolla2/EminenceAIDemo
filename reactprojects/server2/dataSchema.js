const { Int32 } = require('mongodb');
const mongoose = require('mongoose');

const ReactFormDataSchema = new mongoose.Schema({
    topic: {
        type: String,
        required: true
    },
    keyword: {
        type: String,
        required: true
    }
});

const Category = mongoose.model('Category', ReactFormDataSchema);
module.exports = Category;