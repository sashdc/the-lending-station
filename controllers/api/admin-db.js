const router = require('express').Router();
const {User, Book, Review, BorrowHistory} = require('../../models');

let today = new Date()

// all books
router.get('/book', async (req,res) => {
    try {
        bookData = await Book.findAll()

        res.status(200).json(bookData)
    } catch (err) {
        res.status(500).json(err);
    }
})

// post book
router.post('/new-book', async (req, res) => {
    try {
        bookData = await Book.create({
            "title": req.body.title,
            "year": req.body.year,
            "synopsis": req.body.synopsis,
            "author": req.body.author,
            "isbn": req.body.isbn,
            "rating": 0,
            "available": true,
            "available_next": today,
            "borrowed_user": null,
            "cover_link": req.body.cover
        })

        res.status(200).json({ bookData })
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router