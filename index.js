let routes1 = require('./routes/home')
let routes2 = require('./routes/users.js')
var bodyParser = require('body-parser')
let path = require('path')
let express = require('express')
let app = express();


app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes2)
app.use(routes1)

app.listen(3000)

