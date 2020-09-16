const Person = require('../database/models/person')
const PositionsService = require('../services/positions.service')

class PeopleService {
    async findAll() {
        return Person.find().populate('position')
    }
    async create(person, positionId) {
        const pos = await PositionsService.findOne(positionId)
        person.position = pos
        const createdPerson = new Person(person);
        return createdPerson.save()
    }
}

module.exports = new PeopleService()