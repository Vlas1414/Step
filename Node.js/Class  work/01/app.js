const http = require('http');
const os = require('os');
const welcome = require('./welcome');
const settings = require('./settings');
const express = require('express');
const app = express();
const ipFilter = require('express-ipfilter').IpFilter;
const ips = ['127.0.0.1'];


//регистрация папки public
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));
//app.use(ipFilter(ips));


/*http.createServer((req, resp) => {
    //console.log(req);
    //console.log(resp);
    //console.log(welcome());
    //console.log(welcome.sayHi());
    //console.log(welcome.sayWelcome());
    resp.end('Hello world!');
}).listen(settings.port, settings.host, () => {
    console.log('Success start!');
});*/

/*app.use((req, resp, next) => {
    console.log('Use middleware');
    if (req.url == '/') {
        resp.send('Denied');
    }
    next();
});*/

app.use('/about', (req, resp, next) => {
    console.log('About middleware');
    next();
});

app.get('/', (req, resp) => {
    console.log(req.connection.remoteAddress);
    resp.send('<h1>Home 1page</h1>');
});

app.get('/about', (req, resp) => {
    //resp.send('<h1>About page</h1>');
    //console.log(__dirname);
    //resp.sendFile(__dirname + '/index.html');
    //resp.s
});

app.get('/welcome', (req, resp) => {
    //получение GET параметров
    console.log(req.query.name);
    resp.send(`Hello, ${req.query.name}`);
});

app.get('/registration', (req, resp) => {
    resp.sendFile(__dirname + '/registration.html');
});

app.post('/registration', (req, resp) => {
    console.log(req.body.login);
    console.log(req.body.password);
    resp.redirect('/registration');
});

// параметры маршрута
app.get('/show/:id', (req, resp) => {
    resp.send(`<h1>Show - #${req.params['id']}</h1>`);
});

app.listen(settings.port, settings.host);


/**
 * запуск приложения - node app.js, если описан скрипт то npm [script], если скрипт кастомный то npm run [script]
 * удаление пакета - npm uninstall [package_name]
 * установка пакета - npm install [package_name] --save (установка скрипта с сохранением)
 *                  - npm install [package_name] -g (установка пакета в систему)
 *                  - npm install [package_name] --save-dev
 */

/**
 * nodemon - позволяет автоматически перезапускать приложение в случае изменений файлов
 * express - фреймворк для упрощений серверной логики
 */