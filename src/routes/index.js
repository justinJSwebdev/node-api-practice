const router = require('express').Router();
const routes = (app) => {
    app.use("/api/v1", () => {
        console.log(1);
    })
}
module.exports = routes