const exp = require('express')
const hbs = require('hbs')

var app = exp();

app.set('view engine','hbs');

app.get('/',(req,res) => {

    res.render("index.hbs");

});

app.get('/home',(req,res) => {

    res.send("Welcome to my homepage");

});

app.get('/contacts',(req,res) => {

    res.send("Welcome to my contacts page");

});

app.get('/about',(req,res) => {

    res.send("<h1><i>About the website</i></h1>");

});

app.listen(3002);