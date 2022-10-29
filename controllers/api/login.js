const router = require('express').Router();
const {User, Book, Review, BorrowHistory} = require('../../models');

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
        req.session.admin = dbUserData.dataValues.admin
        res.status(200).json({ user: dbUserData, message: 'You are now logged in!' });
      });
  
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});


module.exports = router