let express = require("express");
let routes = express.Router();
let path = require("path")
let dirRoot = require('../util/path')

routes.get("/", (req, res, next) => {
    res.sendFile(path.join(dirRoot, "views", "index.html"))
})


module.exports = routes;