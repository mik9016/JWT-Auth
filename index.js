const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()

const app = express();
//import routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');
//Port and URL
const PORT = process.env.PORT || 3000;
const URL = process.env.URL;

//connect to db 

mongoose.connect(URL,{ useNewUrlParser: true, useUnifiedTopology: true }, ()=> {console.log('conntected with DB')})



app.use(express.json());

//route middlewares
app.use('/api/user', authRoute);
app.use('/api/posts',postRoute);

app.listen(PORT, ()=>{
    console.log(`Listening to the port: ${PORT}`)
} )