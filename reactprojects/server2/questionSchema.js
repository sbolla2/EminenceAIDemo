const { Decimal128 } = require('mongodb');
const mongoose = require('mongoose');


const QuestionSchema = new mongoose.Schema({
    topic: {
        type: String,
        required: true
    },
    keyword: {
        type: String,
        required: true
    },
    correct: {
        type: Decimal128,
        required: true
    },
    options: {
        type: [String],
        required: true
    },
    explanation: {
        type: String,
        required: true
    },
    question: {
        type: String,
        required: true
    },
});

const Question = mongoose.model('Question', QuestionSchema);
module.exports = Question;