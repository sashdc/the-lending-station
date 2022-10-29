const BorrowHistory = require('../models/borrowHistory')

const borrowHistoryData = [
    {
        id: 1,
        user_id: 1,
        book_id: 3
    },
    {
        id: 2,
        user_id: 1,
        book_id: 2
    },
    {
        id: 3,
        user_id: 2,
        book_id: 1
    },
    {
        id: 4,
        user_id: 3,
        book_id: 2
    },
    {
        id: 5,
        user_id: 4,
        book_id: 1
    },
    {
        id: 6,
        user_id: 5,
        book_id: 3
    },
    {
        id: 7,
        user_id: 5,
        book_id: 4
    },
    {
        id: 8,
        user_id: 5,
        book_id: 5
    },
    {
        id: 9,
        user_id: 3,
        book_id: 6
    },
    {
        id: 10,
        user_id: 1,
        book_id: 9
    },
    {
        id: 11,
        user_id: 2,
        book_id: 10
    },
    {
        id: 12,
        user_id: 4,
        book_id: 11
    },

]
    

const seedbHistory = () => BorrowHistory.bulkCreate(borrowHistoryData);
module.exports = seedbHistory;