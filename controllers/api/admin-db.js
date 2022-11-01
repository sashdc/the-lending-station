const router = require("express").Router();
const fs = require("fs");
const { User, Book, Review, BorrowHistory } = require("../../models");

let today = new Date();

// all books
router.get("/book", async (req, res) => {
  try {
    bookData = await Book.findAll();

    res.status(200).json(bookData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// add a book
router.post("/new-book", async (req, res) => {
  console.log("trying to add a new book");

  try {
    let bookData = await Book.create({
      title: req.body.title,
      year: req.body.year,
      synopsis: req.body.synopsis,
      author: req.body.author,
      isbn: req.body.isbn,
      rating: 0,
      available: true,
      available_next: today,
      borrowed_user: null,

      // req.body.cover
    });

    req.session.save(() => {
      req.session.book_id = bookData.dataValues.id;
      res.status(200).json(bookData);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/new-book-cover", async (req, res) => {
  console.log(req.file);
  console.log("mundo file");
  try {
    let buff = new Buffer.from(req.file.buffer);
    let b64im = buff.toString("base64");
    const imageData = await Image.create({
      image: b64im,
      book_id: req.session.book_id,
      type: req.file.mimetype,
    });

    console.log(b64im);

    res.status(200).json(imageData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// update book borrowed status
router.put("/:id", async (req, res) => {
  try {
    let bookData = await Book.update({
      borrowed_user: req.body.user_id,
    });

    res.status(200).json(bookData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//create borrow history
router.post("/:id", async (req, res) => {
  try {
    let bhData = await BorrowHistory.post({
      user_id: req.session.user_id,
      book_id: req.params.id,
    });
    res.status(200).json(bhData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
