const http = require('http');
const os = require('os');
const welcome = require('./welcome');
const settings = require('./settings');
const express = require('express');
const app = express();

//регистрация папки public
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: false}));

// http.createServer((req, resp)=>{
//     console.log(welcome.sayHi())
//     console.log(welcome.sayWelcome())
//     resp.end('Hello world!');
// }).listen(settings.port, settings.host, ()=>{
//     console.log('Success start');
// });

app.use((req, resp, next) => {
    console.log('Use moddleware');
    if(req.url === '/'){
        resp.send('Denied');
    }
    next();
})

app.get('/', (req, resp) => {
    resp.send('<h1>Home page</h1>');
})

app.get('/about', (req, resp) => {
    //resp.send('<h1>About page</h1>');
    //resp.sendFile(__dirname + '/index.html');
})
app.get('/registration', (req, resp) => {
    resp.sendFile(__dirname + '/registration.html')
});

app.post('/registration', (req, resp) => {
    console.log(req.body);
    resp.redirect('/registration');
});

app.get('/welcome', (req, resp) => {
    resp.send('Hello, ' + req.query.name)
})
app.get('/show/:id', (req, resp) => {
    resp.send(`<h1>Show - #${req.params.id}</h1>`)
})


app.listen(settings.port, settings.host)