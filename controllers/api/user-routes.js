const router = require('express').Router();
const {User, Book, Review} = require('../../models');

router.get ('/', async (req, res) => {
    try {
        const userData = await User.findAll({include: [
            { model: Book, attributes: ['title', 'author', 'rating']},
            { model: Review, attributes: ['content']}]
        })
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router