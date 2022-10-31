const router = require('express').Router();
const {User, Book, Review, BorrowHistory, Cover} = require('../../models');

let today = new Date ()


//update book - cover_link dummy needs to be replaced
router.put('/:id', async (req, res) => {
    try {
        const bookData = await Book.update(
            {
            "title": req.body.title,
            "year": req.body.year,
            "synopsis": req.body.synopsis,
            "author": req.body.author,
            "isbn": req.body.isbn,
            "available": req.body.available,
            "available_next": today,
            "borrowed_user": req.body.borrowed_user,
            "cover_link": 7
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
router.post('/review', async (req, res) => {
  console.log("><><><><><><><><><trying to post a review")
    try {
        const reviewData = await Review.create({
            "content": req.body.content,
            "rating": req.body.rating,
            "user_id": req.session.user_id ,
            "book_id": req.body.book_id
        });
        res.status(200).json({message: `Successfully wrote review`})
    } catch (err) {
        res.status(500).json(err);
    }
})

//get review ratings

router.get('/ratings', async (req, res) => {
  const ratings = await Book.findOne({include: {model: Review, attributes: ['rating']}, where: {id: req.session.book_id}})
  let e = ratings.reviews.map((f) => f.rating)
  res.status(200).json({e})
})

//update rating
router.put('/review/update', async (req, res) => {
  const bookData = await Book.update({"rating": req.body},
    {where: {id: req.session.book_id}})

    res.status(200).json({message: 'successfully updated rating'})
})

//delete review
router.delete('/review/:id', async(req,res) => {
  id = req.params.id
  try {  
    const reviewData = await Review.destroy({where: {"id": req.params.id}})
      if (!reviewData) {
        res.status(404).json({ message: 'No review found'})
        return;
      }

      res.status(200).json({message: 'Successfully deleted review'})
    } catch (err) {
      res.status(500).json(err);
    }
  })

module.exports = router