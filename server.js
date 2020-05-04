const express = require('express')
const app = express()
const ports = process.env.port || 3000;

app.use(express.static('public'));
app.set('view engine','ejs')

app.get('/', function (req, res) {
  res.render('index')
})

app.listen(ports, function () {
  console.log('Example app listening on port 3000!')
})