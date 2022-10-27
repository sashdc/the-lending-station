const router = require('express').Router();
const {User, Book, Review, BorrowHistory} = require('../../models');

router.get ('/', async (req, res) => {
    try {
        const userData = await User.findAll({include: [
            { model: Book, attributes: ['title', 'author', 'rating'] },
            { model: Review, attributes: ['content', 'book_id'] },
        ]
        })
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err)
    }
})

router.post('/signup', async (req, res) => {
    // create a new user
    try {
      const userData = await User.create({
        "username": req.body.username,
        "password": req.body.password,
        "email": req.body.email,
        "first_name": req.body.first_name,
        "last_name": req.body.last_name,
        "admin": false
      });
      
      req.session.save(() => {
        req.session.loggedIn = true
        req.session.user_id = userData.dataValues.id
        res.status(200).json(userData);
      })
    } catch (err) {
      res.status(500).json(err);
    }
});
  
router.post('/login', async (req, res) => {
    try {
      const dbUserData = await User.findOne({
        where: {
          username: req.body.username,
        },
      });
      if (!dbUserData) {
        res
          .status(400)
          .json({ message: 'Incorrect username or password. Please try again!' });
        return;
      }
      const validPassword = dbUserData.checkPassword(req.body.password);
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password. Please try again!' });
        return;
      }
      req.session.save(() => {
        req.session.loggedIn = true
        req.session.user_id = dbUserData.dataValues.id
        res.status(200).json({ user: dbUserData, message: 'You are now logged in!' });
      });
  
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

module.exports = router