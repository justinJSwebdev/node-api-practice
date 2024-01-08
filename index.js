const express = require("express")
const cors = require("cors")
require('dotenv').config();
const app = express();

app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}))

//Read body json 
app.use(express.json());
//convert another field value -> JSON
app.use(express.urlencoded({ extended: true }));
