const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const User = require('../../src/models/user')
const Task = require('../../src/models/task')

const userOneId = new mongoose.Types.ObjectId()
const userOne = {
    _id: userOneId,
    name: 'Joe',
    email: 'joe@somedomain.com',
    password: 'jker43kfofsd',
    tokens: [{
        token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET)
    }]
}

const userTwoId = new mongoose.Types.ObjectId()
const userTwo = {
    _id: userTwoId,
    name: 'George',
    email: 'george@somedomain.com',
    password: 'gfdgfrets',
    tokens: [{
        token: jwt.sign({ _id: userTwoId }, process.env.JWT_SECRET)
    }]
}
const taskOne = {
    _id: new mongoose.Types.ObjectId(),
    description: "Task One",
    completed: false,
    owner: userOneId
}

const taskTwo = {
    _id: new mongoose.Types.ObjectId(),
    description: "Task Two",
    completed: true,
    owner: userTwoId
}

const taskThree = {
    _id: new mongoose.Types.ObjectId(),
    description: "Task Three",
    completed: true,
    owner: userOneId
}

const setUpDatabase = async () => {
    await User.deleteMany()
    await Task.deleteMany()

    await new User(userOne).save()
    await new User(userTwo).save()

    await new Task(taskOne).save()
    await new Task(taskTwo).save()
    await new Task(taskThree).save()
}

module.exports = {
    userOneId,
    userOne,
    userTwo,
    taskOne,
    setUpDatabase
}