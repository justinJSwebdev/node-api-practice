const express = require("express")
const cors = require("cors")
const routerMethod = require("./src/routes")
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
//Route
app.use("/", () => {

})
routerMethod(app)
const Port = process.env.PORT || 5500

const server = app.listen(Port, () => {
    console.log(`Listening on port ${server.address().port}`);
})

app.all("*", (req, res, next) => {
    const err = new Error(`Can not find ${req.originalUrl} on this server!`);
    err.status = "fail";
    err.statusCode = 404;
    next(err)
});

//Error detect middleware
app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "Error"
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message
    })
});