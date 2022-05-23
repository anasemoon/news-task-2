const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')

const port = process.env.PORT || 3000

const apiAccess = require('./apiAccess')
const viewsPath = path.join(__dirname,'../hbs')
app.set('view engine', 'hbs');
app.set('views',viewsPath)
app.get('/',(req,res)=>{
  console.log('success')
  res.render('index',{
    data:apiAccess
  })
  console.log(apiAccess)
})

app.listen(port, () => {
    console.log(`Examplee app listening on port ${port}`)
  })
  