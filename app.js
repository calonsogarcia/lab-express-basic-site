// Require express, here you can require any package you want to use
const express = require('express')

//Call express to use it, you call it as a function, from here you use app.something because you "replace" express for app.
const app = express()

app.use(express.static('public'))

// Create the routes

app.get('/views/home.html', (request, response, next) => {
    response.sendFile(__dirname + '/views/home.html');
})

app.get('/views/about.html', (request, response, next) => {
    response.sendFile(__dirname + '/views/about.html');
})

app.get('/views/works.html', (request, response, next) => {
    response.sendFile(__dirname + '/views/works.html');
})

app.get('/views/photoGallery.html', (request, response, next) => {
    response.sendFile(__dirname + '/views/photoGallery.html');
})

app.listen(8000, () => console.log("I'm listening on port 8000!"));