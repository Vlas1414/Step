//npm i mongoose --save - библиотека для работы с MongoDB

const mongoose = require('mongoose')
const Schema = mongoose.Schema


//объявление схемы
const positionScheme = new Schema({
    name: String
})

const personScheme = new Schema({
    firstname: String,
    lastname: String,
    age: Number,
    positions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Position'}],
}, {
    //versionKey: false
})


//создание модели
const Person = mongoose.model('Person', personScheme)
const Position = mongoose.model('Position', positionScheme)

//подключение к базе данных 
mongoose.connect('mongodb://localhost:27017/firstdbdemo', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, async () => {
    console.log('Success connection')

    // const position = new Position({
    //     name: 'Director'
    // })
    // await position.save();
    //добавление связанных данных
    // const pos = await Position.findById('5f54d9e9d8e60d9a1fd001e1')
    // console.log(pos)
    // const person = new Person({
    //     firstname: 'Vasya',
    //     lastname: 'Pupkin',
    //     age: 20
    // })

    // person.save((err) => {
    //     console.log('Success');
    // })

    // получение связанных данных
    // const res = await Person.find().populate('position')
    // console.log(res)

    
    //добавление связанных данных в массив
    // const pos1 = await Position.findById('5f54d9e9d8e60d9a1fd001e1')
    // const pos2 = await Position.findById('5f54db91a6f47a9bef1a6103')
    // await Person.findOneAndUpdate({_id: '5f54dd2e34649d9d4f44dcab'}, { $push: { positions: pos1 } }, { new: true } )
    // await Person.findOneAndUpdate({_id: '5f54dd2e34649d9d4f44dcab'}, { $push: { positions: pos2 } }, { new: true } )

    const people = await Person.findOne({_id: '5f54dd2e34649d9d4f44dcab'}).populate('positions')
    console.log(people)
})