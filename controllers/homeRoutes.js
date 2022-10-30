const router = require("express").Router();
const { Book, User, Review, BorrowHistory } = require("../models");

const sequelize = require("../config/connection");

// getall posts for home page
router.get("/", async (req, res) => {
  try {
    res.render("homepage", { loggedIn: req.session.loggedIn, admin:req.session.admin });
  } catch (err) {
    res.status(500).json(err);
  }
});

// accessing admin login page
router.get("/adminlogin", (req, res) => {
  try {
    res.render("adminlogin", { loggedIn: req.session.loggedIn, admin:req.session.admin });
  } catch (err) {
    res.status(500).json(err);
  }
});

// accessing user login page
router.get("/userlogin", (req, res) => {
  try {
    res.render("userlogin", { loggedIn: req.session.loggedIn, admin:req.session.admin });
  } catch (err) {
    res.status(500).json(err);
  }
});

// adding new book page
router.get("/addbook", (req, res) => {
  try {
    res.render("new-book", {loggedIn: req.session.loggedIn, admin:req.session.admin });
  } catch (err) {
    res.status(500).json(err);
  }
});

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
      loggedIn: req.session.loggedIn, admin:req.session.admin 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// access user dashboard
router.get("/user", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { id: req.session.user_id },
      include: [
        {
          model: Book,
          BorrowHistory,
        },
      ],
    });

    // Serialize data so the template can read it
    const user = userData.get({ plain: true });
    console.log(req.session.user_id);
    console.log(user);
    console.table(user);
    // Pass serialized data and session flag into template
    res.render("user-dashboard", {
      user,
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
