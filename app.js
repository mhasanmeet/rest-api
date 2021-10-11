const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

//Import Routes
const postsRoutes = require('./routes/posts');

app.use('/posts', postsRoutes);

app.get('/', (req, res) => {
    res.send('Hello there');
})


//Connect to database
mongoose.connect(process.env.DB_CONNECT, () => {
    console.log('connected to DB!')
});

app.listen(3000);