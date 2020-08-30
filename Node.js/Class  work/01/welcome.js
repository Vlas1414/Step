function sayHi() {
    return 'Hi';
}

function sayWelcome() {
    return 'Welcome';
}

//module.exports = sayHi;
module.exports = {
    sayHi: sayHi,
    sayWelcome: sayWelcome
};