const router = require('express').Router();
const {User, Book, Review, BorrowHistory} = require('../../models');

//test
// router.get ('/', async (req, res) => {
//     try {
//         const userData = await User.findAll({include: [
//             { model: Book, attributes: ['title', 'author', 'rating'] },
//             { model: Review, attributes: ['content', 'book_id'] },
//         ]
//         })
//         res.status(200).json(userData);
//     } catch (err) {
//         res.status(500).json(err)
//     }
// })

router.post('/signup', async (req, res) => {
    // create a new user
    console.log("--------------------------trying to sign up")
    try {
      const userData = await User.create({
        "username": req.body.username,
        "password": req.body.password,
        "email": req.body.email,
        "first_name": req.body.firstname,
        "last_name": req.body.lastname,
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
module.exports = router