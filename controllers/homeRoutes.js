const router = require("express").Router();
const { Book } = require("../models");

const sequelize = require('../config/connection');


// getall posts for home page
router.get("/", async (req, res) => {
      try{res.render("homepage");
}catch (err) {
    res.status(500).json(err);
  }}
);

// accessing admin login page
router.get("/adminlogin", (req, res) => {
  try{res.render("adminlogin");
}catch (err) {
    res.status(500).json(err);
  }}
);

// accessing user login page
router.get("/userlogin", (req, res) => {
  try{res.render("userlogin" );
}catch (err) {
    res.status(500).json(err);
  }}
);

// accessing admin dahsboard page
router.get("/admin", async (req, res) => {
  try {
    // Get all books and JOIN with user data
    const bookData = await Book.findAll();
    console.log(bookData);
    // Serialize data so the template can read it
    const books = bookData.map((book) => book.get({ plain: true }));
    console.log(books);
    // Pass serialized data and session flag into template
    res.render("admin-dashboard", {
      books,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// accessing library page
router.get("/library", async (req, res) => {
  try {
    // Get all books and JOIN with user data
    const bookData = await Book.findAll();
    console.log(bookData);
    // Serialize data so the template can read it
    const books = bookData.map((book) => book.get({ plain: true }));
    console.log(books);
    // Pass serialized data and session flag into template
    res.render("library", {
      books,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});




module.exports = router;
