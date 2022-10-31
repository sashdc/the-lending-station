const router = require('express').Router();
const {User, Book, Review, BorrowHistory} = require('../../models');

//get users
router.get('/user', async (req, res) => {
    try {
        userData = await User.findAll({include: [
            { model: Book, attributes: ['title', 'author']}
        ], where: {id: req.session.user_id}})
        res.status(200).json(userData)
    } catch (err) {
        res.status(500).json(err);
    }
})

//get book where user_id = req.session.user_id
// router.get('/book', async (req,res) => {
//     try {
//         bookData = await Book.findOne({where: {borrowed_user: req.session.user_id}})
//         const borrowebook = bookData.get({ plain: true });
//         console.log(borrowebook)
        

//         res.status(200).json(bookData)
//     } catch (err) {
//         res.status(500).json(err);
//     }
// })


module.exports = router