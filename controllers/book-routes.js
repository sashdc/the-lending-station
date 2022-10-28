const router = require('express').Router();
const {User, Book, Review, BorrowHistory} = require('../models');


// accessing individualbook page
// router.get("/:id", async (req, res) => {
//   try {
//     // Get all books and JOIN with user data
//     const bookData = await Book.findOne({
//       where: {
//         id: req.params.id,
//       },
//       include: [
//         {
//           model: User,
//           attributes: ["username"],
//         },
//         {
//             model: Review,
//           },
//       ],
//     });
//     console.log(bookData);
//     // Serialize data so the template can read it
//     const book = bookData.get({ plain: true });
//     console.log(book);
//     // Pass serialized data and session flag into template
//     res.render("single-book", {
//       book,
//       loggedIn: req.session.loggedIn,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });




// const book = bookData.map((b) => b.get({ plain: true}))
// // Alastair's
// book by id, maybe move to site route
router.get("/:id", async (req, res) => {
  try {
    const bookData = await Book.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: Review,
        },
        {
            model: User,
          },
      ],
    });
    console.log(bookData);
    // const userData = await BorrowHistory.findOne({
    //   where: { book_id: req.params.id },
    // });

    const book = bookData.get({ plain: true });
    console.log(book);
    const reviews = bookData.reviews;
    console.log("--------------" + reviews)

    req.session.save(() => {
      req.session.book_id = req.params.id;

      // res.json(book, reviews, userData)
      res.render("single-book", {
        book, reviews,
                loggedIn: req.session.loggedIn,
        user_id: req.session.user_id,
        post_id: req.session.post_id,
      });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router