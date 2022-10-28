const router = require('express').Router();
const {User, Book, Review, BorrowHistory} = require('../../models');

router.get('/:id', async (req, res) => {
    try {
        const bookData = await Book.findAll({ where: {id: req.params.id}, include: [{
            model: Review}]})

        const userData = await BorrowHistory.findAll({ where: {book_id: req.params.id}})

        const book = bookData.map((b) => b.get({ plain: true}))
        const reviews = bookData[0].reviews

        req.session.save(() => {
            req.session.book_id = req.params.id

            res.json(book, reviews, userData)
            //res.render('single-book', {book, reviews, loggedIn: req.session.loggedIn, user_id: req.session.user_id, post_id: req.session.post_id})
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router