const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')

const viewsPath = path.join(__dirname,'../hbs')
console.log('vewpath is',viewsPath)

app.set('view engine', 'hbs');
app.set('views',viewsPath)

const request = require('request')
const apiAccess=()=>{
const newsUrl="https://newsapi.org/v2/everything?q=keyword&apiKey=ea73c75385f6430b87e578169e1930cb"
// console.log(newsUrl)
request({url:newsUrl,json:true},(error,response)=>{
    if(error){
        return('an error occured')
        // return('an error occured')
    }
    else if(response.body.code=="apiKeyInvalid"){
        return('invalid ip address')
        // return('invalid ip address')

    }
    else if(response.body.code=="apiKeyMissing"){
        return('you missed the key')
        // return('you missed the key')

    }
    else {
        
        // return(response.body.articles)
        var data=response.body.articles
        const titles=data[1].title
        const description=data[1].description
        const image=data[1].urlToImage
        console.log('title is',titles)
        console.log('description is',description)
        console.log('image is',image)
        console.log('all data',data)

        return data




    }
 })
}

// apiAccess()

 module.exports = apiAccess