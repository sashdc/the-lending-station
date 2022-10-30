const router = require("express").Router();
const { User, Book, Review, BorrowHistory } = require("../models");

// book by id, maybe move to site route
router.get("/:id", async (req, res) => {
  try {
    const bookData = await Book.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: Review
        },
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    // const userData = await BorrowHistory.findOne({
    //   where: { book_id: req.params.id },
    // });

    const book = bookData.get({ plain: true });
    const reviews = bookData.reviews;

    req.session.save(() => {
      req.session.book_id = req.params.id;

      // res.json(book, reviews, userData)
      res.render("single-book", {
        book,
        reviews,
        loggedIn: req.session.loggedIn,
        admin:req.session.admin, 
        user_id: req.session.user_id,
        post_id: req.session.post_id,
      });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


// getting book to edit by id - loading all current info into 
router.get("/edit/:id", async (req, res) => {
  console.log("trying to edit the book but in the route bit")
  try {
    const bookData = await Book.findOne({
      where: { id: req.params.id },
         });

    const book = bookData.get({ plain: true });

    req.session.save(() => {
      req.session.book_id = req.params.id;

      res.render("edit-book", {
        book,
        loggedIn: req.session.loggedIn,
        admin:req.session.admin, 
          });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
