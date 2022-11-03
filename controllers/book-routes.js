const router = require("express").Router();
const { User, Book, Review, BorrowHistory } = require("../models");
const withAuth = require("../utlis/auth");
const adminAuth = require("../utlis/admin");


// book by id, maybe move to site route
router.get("/:id", withAuth, async (req, res) => {
  try {
    const bookData = await Book.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: Review,
        },
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    // const reviews = await Review.findAll({
    //   where: {book_id:req.params.id},
    //   include: [
    //            {
    //       model: User,
    //       attributes: ["username"],
    //     },
    //   ],
    // })
    const book = bookData.get({ plain: true });
    const reviews = book.reviews;
    // const review = reviews.map((x)=> x.get({ plain: true }));
    // console.log(review)
    // const review = reviews.get({ plain: true }));

    starRating = Math.ceil(book.rating);
    console.log(starRating);
    console.log(reviews);
    reviews.map((review) => {
      review.admin = req.session.admin;
    });
    // console.log(review)
       req.session.save(() => {
      req.session.book_id = req.params.id;
      res.render("single-book", {
        book,
        reviews,
        // review,
        starRating,
        loggedIn: req.session.loggedIn,
        admin: req.session.admin,
        user_id: req.session.user_id,
        book_id: req.session.book_id,
      });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// getting book to edit by id - loading all current info into the edit form
router.get("/edit/:id", adminAuth, async (req, res) => {
  console.log("trying to edit the book but in the route bit");
  try {
    const bookData = await Book.findOne({
      where: { id: req.params.id },
    });

    const book = bookData.get({ plain: true });
    //console.log(book)
    req.session.save(() => {
      req.session.book_id = req.params.id;

      res.render("edit-book", {
        book,
        loggedIn: req.session.loggedIn,
        admin: req.session.admin,
      });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
