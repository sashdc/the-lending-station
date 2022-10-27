const router = require('express').Router();
//const bookRoutes = require('./book-routes.js');
//const reviewRoutes = require('./review-routes');
const userRoutes = require('./user-routes.js');

//router.use('/book', bookRoutes);
//router.use('/review', reviewRoutes);
router.use('/user', userRoutes);

module.exports = router;
