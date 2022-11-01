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
        admin: true
    },
    {
        id: 2,
        username: "pang",
        password: bcrypt.hashSync('thebigpang', 10),
        email: `psychicsurge@gmail.com`,
        first_name: 'Myste',
        last_name: 'Matthews',
        admin: false
    },
    {
        id: 3,
        username: "fekles",
        password: bcrypt.hashSync('betterthanr', 10),
        email: `justicekick@gmail.com`,
        first_name: 'Ethan',
        last_name: 'Fraiser',
        admin: false
    },
    {
        id: 4,
        username: "wwilsonn",
        password: bcrypt.hashSync('fororiath', 10),
        email: `gohanblanco@gmail.com`,
        first_name: 'Leticia',
        last_name: 'Chen',
        admin: false
    },
    {
        id: 5,
        username: "sairaorg",
        password: bcrypt.hashSync('backtohighschool', 10),
        email: `melonlord@gmail.com`,
        first_name: 'Sarah',
        last_name: 'Simmons',
        admin: false
    },
    {
        id: 6,
        username: "kellyhanson",
        password: bcrypt.hashSync('happyalways', 10),
        email: `khanson@gmail.com`,
        first_name: 'Kelly',
        last_name: 'Hanson',
        borrowed_book: 14,
        admin: false
    },
    {
        id: 7,
        username: "charolotee",
        password: bcrypt.hashSync('happyalways', 10),
        email: `ctaylor@gmail.com`,
        first_name: 'Charolotee',
        last_name: 'Taylor',
        borrowed_book: 15,
        admin: false
    },
     
]

const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;