//npm i mongodb --save

const config = require('./config')
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const mongoClient = new MongoClient(config.connectionString, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoClient.connect((err, client) => {
    if (err) {
        return console.log(err)
    }
    console.log('Success')
    const db = client.db('firstdbdemo')
    const people = db.collection('people')

    //добавление записи
    // people.insertOne({
    //     firstname: 'Vasya',
    //     lastname: 'Pupkin',
    //     age: 20
    // })

    //добавление нескольких записей
    /*people.insertMany([
        {
            firstname: 'Petya',
            lastname: 'Ivanov',
            age: 26
        },
        {
            firstname: 'Masha',
            lastname: 'Stepanova',
            age: 30
        }
    ], (err, results) => {
        //добавленные данные с идентификаторами
        console.log(results.ops);
        //идентификаторы новых записей
        console.log(results.insertedIds);

        console.log(results);
    })*/
    
    //выборка всех данных
    // people.find().toArray((err, results) => {
    //     console.log(results);
    // })

    //поиск по _id
    // people.findOne({
    //     _id: mongodb.ObjectID('5f54d2ac9993459263d47b6d')
    // }).then((res) => {
    //     console.log(res)
    // })

    // people.find({
    //     age: {
    //         $gt: 20
    //     }
    // }).toArray((err, res) => {
    //     console.log(res)
    // })

    //удаление одного
    // people.deleteOne({
    //     _id: mongodb.ObjectID('5f54d39bc509a69393a2c783')
    // }).then((err) => {
        
    // })

    // people.updateOne({
    //     _id: mongodb.ObjectID('5f54d39bc509a69393a2c784')
    // }, {
    //     $set: {
    //         firstname: 'New Masha'
    //     }
    // }, () => {
    //     console.log('Success')
    // })

    //client.close()
})