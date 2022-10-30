const router = require('express').Router();
const {User, Book, Review, BorrowHistory, Cover} = require('../../models');

let today = new Date ()


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
            "content": req.body.review,
            "rating": req.body.rating,
            "user_id": req.session.user_id ,
            "book_id": req.params.id
        });
        res.status(200).json({message: `Successfully wrote review`})
    }catch (err) {
        res.status(500).json(err);
      }
})


//delete review
router.delete('/review/:id', async(req,res) => {
    const reviewData = await Review.delete({where: {"id": req.params.id}})
    if (!reviewData) {
      res.status(404).json({ message: 'No review found'})
      return;
    }

    res.status(200).json({message: 'Successfully deleted review'})
})

module.exports = router