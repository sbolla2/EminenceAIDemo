const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const Category = require('./dataSchema.js')
const Question = require('./questionSchema.js')

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;

mongoose.connect('mongodb+srv://sahitbolla27:u0TFJkQHiSJbhNfU@cluster0.yjykeoz.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true });

app.post('/insert', async(req, res) => {
    const newTopic = req.body.topicName
    const newKeyword = req.body.keywordName

    const formData = new Category({
        topic: newTopic,
        keyword: newKeyword
    })

    try {
        await formData.save();
        res.send("inserted data..")
    } catch(err) {
        console.log(err)
    }
});

app.get('/question', function(req, res) {
    Question.find().then((questions) => {
        // Process retrieved books
        console.log('Retrieved questions:', questions);
        res.json(questions);
    });
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});