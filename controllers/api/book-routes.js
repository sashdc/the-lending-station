const router = require('express').Router();
const {User, Book, Review, BorrowHistory } = require('../../models');

router.get ('/', async (req, res) => {
    try {
        const userData = await Book.findAll({include: [
            { model: User, attributes: ['username'] },
            { model: Review, attributes: ['content'] },
        ]
        })
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router