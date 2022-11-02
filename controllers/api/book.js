const router = require("express").Router();
const { User, Book, Review, BorrowHistory, Cover } = require("../../models");
const withAuth = require("../../utlis/auth");
const adminAuth = require("../../utlis/admin");

let today = new Date();
let nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

//update book
router.put("/:id", adminAuth, async (req, res) => {
  try {
    const bookData = await Book.update(
      {
        title: req.body.title,
        year: req.body.year,
        synopsis: req.body.synopsis,
        author: req.body.author,
        isbn: req.body.isbn,
        available: req.body.available,
        available_next: nextWeek,
        borrowed_user: req.body.borrowed_user,
      },
      { where: { id: req.params.id } }
    );

    if (!bookData) {
      res.status(404).json({ message: "No book with this id found" });
    }
    res.status(200).json({ message: `Successfully updated book` });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/:id/bh", adminAuth, async (req, res) => {
  const bhData = await BorrowHistory.create({
    user_id: req.body.borrowed_user,
    book_id: req.params.id,
  });

  res.status(200).json({ message: `Added borrow history` });
});

//del borrow history
router.delete("/:id/bh", adminAuth, async (req, res) => {
  const bhData = await BorrowHistory.destroy({
    where: { book_id: req.params.id },
  });

  if (!bhData) {
    res.status(404).json({ message: "No book found with that id!" });
    return;
  }

  res.status(200).json({ message: `Successfully deleted borrow history` });
});

//del cover
router.delete("/:id/cover", adminAuth, async (req, res) => {
  const coverData = await Cover.destroy({
    where: { book_id: req.params.id },
  });

  if (!coverData) {
    res.status(404).json({ message: "No cover found with that id!" });
    return;
  }

  res.status(200).json({ message: `Successfully deleted cover` });
});

//del reviews
router.delete("/:id/reviews", adminAuth, async (req, res) => {
  const reviewData = await Review.destroy({
    where: { book_id: req.params.id },
  });

  if (!reviewData) {
    res.status(404).json({ message: "No review found with that id!" });
    return;
  }

  res.status(200).json({ message: `Successfully deleted reviews` });
});

//del book
router.delete("/:id", adminAuth, async (req, res) => {
  //try {
  const bookData = await Book.destroy({
    where: {
      id: req.params.id,
    },
  });

  if (!bookData) {
    res.status(404).json({ message: "No book found with that id!" });
    return;
  }

  res.status(200).json({ message: `Successfully deleted book` });
  // } catch (err) {
  //   res.status(500).json(err);
  // }
});

//post review
router.post("/review", withAuth, async (req, res) => {
  console.log("><><><><><><><><><trying to post a review");
  try {
    const reviewData = await Review.create({
      content: req.body.content,
      rating: req.body.rating,
      user_id: req.session.user_id,
      book_id: req.body.book_id,
    });
    res.status(200).json({ message: `Successfully wrote review` });
  } catch (err) {
    res.status(500).json(err);
  }
});

//get review ratings

router.get("/ratings", async (req, res) => {
  const ratings = await Book.findOne({
    include: { model: Review, attributes: ["rating"] },
    where: { id: req.session.book_id },
  });

  let e = ratings.reviews.map((f) => f.rating);

  res.json({ e });
});

//update rating
router.put("/review/update", async (req, res) => {
  const bookData = await Book.update(
    { rating: req.body.shikigami },
    { where: { id: req.session.book_id } }
  );

  res.status(200).json({ message: "successfully updated rating" });
});

//delete review
router.delete("/review/:id", async (req, res) => {
  try {
    const reviewData = await Review.destroy({ where: { id: req.params.id } });
    if (!reviewData) {
      res.status(404).json({ message: "No review found" });
      return;
    }

    res.status(200).json({ message: "Successfully deleted review" });
  } catch (err) {
    res.status(500).json(err);
  }
});

//testing code
router.get("/testing/:id", async (req, res) => {
  const data = await Cover.findOne({ where: { id: req.params.id } });
  res.status(200).json(data);
});

module.exports = router;
