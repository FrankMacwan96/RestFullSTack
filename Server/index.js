const express = require('express');
const mongoose = require('mongoose');
const parser = require('body-parser');
const app = express();
const cors = require('cors');
require('dotenv/config');

app.use(parser.json());
app.use(cors())

//importing routes
const postroute = require('./Posts/posts');

//posts route
app.use('/posts',postroute);


const db = process.env.DB_CONN;
const port = process.env.PORT || 3000;
mongoose.connect(db,{useNewURLParser:true},()=>console.log("Connected to DB.."));
app.listen(port, () => console.log('listnening on port 3000...'));
