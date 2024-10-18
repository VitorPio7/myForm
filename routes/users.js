let path = require("path");

let express = require("express")
let routes2 = express.Router();
let rootPath = require('../util/path')




routes2.get('/users', (req, res) => {
    res.sendFile(path.join(rootPath, 'views', 'users.html'))
})
routes2.post('/adduser', (req, res) => {
    console.log(req.body.text)
    res.redirect('/')
})


module.exports = routes2;
