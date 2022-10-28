const router = require('express').Router();
const {User, Book, Review, BorrowHistory} = require('../../models');

let today = new Date ()

// book by id, maybe move to site route
// router.get('/:id', async (req, res) => {
//     try {
//         const bookData = await Book.findAll({ where: {id: req.params.id}, include: [{
//             model: Review}]})

//         const userData = await BorrowHistory.findAll({ where: {book_id: req.params.id}})

//         const book = bookData.map((b) => b.get({ plain: true}))
//         const reviews = bookData[0].reviews

//         req.session.save(() => {
//             req.session.book_id = req.params.id

//             res.json(book, reviews, userData)
//             //res.render('single-book', {book, reviews, loggedIn: req.session.loggedIn, user_id: req.session.user_id, post_id: req.session.post_id})
//         })
//     } catch (err) {
//         res.status(500).json(err)
//     }
// })

// user & borrow history (for review authentication)

//update book
router.put('/:id', async (req, res) => {
    try {
        const bookData = await Book.update(
            {
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
            },
            {where: {id: req.params.id}})

        if (!bookData){
            res.status(404).json({message: 'No book with this id found'})
        }
            res.status(200).json({message: `Successfully updated book`})
              
    } catch (err) {
        res.status(500).json(err);
    }
})

//del book
router.delete('/:id', async(req, res) => {
    try {
        const bookData = await Book.destroy({
          where: {
            "id": req.params.id
          },
        });
    
        if (!bookData) {
          res.status(404).json({ message: 'No book found with that id!' });
          return;
        }
    
        res.status(200).json({message: `Successfully deleted book`});
      } catch (err) {
        res.status(500).json(err);
      }
});

//post review
router.post('/:id/review', async (req, res) => {
    try {
        const reviewData = await Review.create({
            "content": req.body.content,
            "rating": req.body.rating,
            "user_id": 2,
            "book_id": req.params.id
        });
        res.status(200).json({message: `Successfully wrote review`})
    }catch (err) {
        res.status(500).json(err);
      }
})

module.exports = router