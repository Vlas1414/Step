const peopleService = require('../services/people.service')
const Person = require('../models/person')
const Position = require('../models/position')

class HomeController {
    async index(req, resp) {
        // await peopleService.create({
        //     firstname: 'Vasya',
        //     lastname: 'Pupkin',
        //     age: 20
        // }, '5f54d9e9d8e60d9a1fd001e1')
        const result = await peopleService.findAll()
        let people = []
        result.forEach(element => {
            //console.log(element)
            people.push(new Person(element.firstname, element.lastname, element.age, new Position(element.position.name)))
        });
        console.log(people)
        resp.render('index', {
            title: 'Home',
            message: 'How are you?',
            arr: ['First', 'Second', 'Third'],
            people: people
        })
    }
    contacts(req, resp) {
        resp.render('contacts', {
            title: 'Contacts'
        })
    }
}

module.exports = new HomeController();