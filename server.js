const express = require('express')
const app = express()

myport = process.env.PORT || 3000

app.use(express.static('public'));
app.set('view engine','ejs')

app.get('/', function (req, res) {
  res.render('index')
})

app.listen(myport, function () {
  console.log('Example app listening on port ' + myport + '!')
})
