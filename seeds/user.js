const User = require('../models/user')
const bcrypt = require('bcrypt')

const userData = [
    {
        id: 1,
        username: "meer",
        password: bcrypt.hashSync('dasamsam', 10),
        email: `thunderlordsdecree@gmail.com`,
        first_name: 'Samwell',
        last_name: 'Rogers',
        borrowed_book: null,
        admin: true
    },
    {
        id: 2,
        username: "pang",
        password: bcrypt.hashSync('thebigpang', 10),
        email: `psychicsurge@gmail.com`,
        first_name: 'Harbin',
        last_name: 'Matthews',
        borrowed_book: 1,
        admin: false
    },
    {
        id: 3,
        username: "fekles",
        password: bcrypt.hashSync('betterthanr', 10),
        email: `justicekick@gmail.com`,
        first_name: 'Ethan',
        last_name: 'Fraiser',
        borrowed_book: 2,
        admin: false
    },
    {
        id: 4,
        username: "wwilsonn",
        password: bcrypt.hashSync('fororiath', 10),
        email: `gohanblanco@gmail.com`,
        first_name: 'Leticia',
        last_name: 'Chen',
        borrowed_book: null,
        admin: false
    },
    {
        id: 5,
        username: "sairaorg",
        password: bcrypt.hashSync('backtohighschool', 10),
        email: `melonlord@gmail.com`,
        first_name: 'Sarah',
        last_name: 'Simmons',
        borrowed_book: 4,
        admin: false
    },
]

const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;