const router = require('express').Router();
const signupRoutes = require('./signup.js');
const loginRoutes = require('./login')
const adbRoutes = require('./admin-db')
const bookRoutes = require('./book')
const udbRoutes = require('./user-db')

router.use('/login', loginRoutes);
router.use('/signup', signupRoutes);
router.use('/adb', adbRoutes);
router.use('/book', bookRoutes);
router.use('/udb', udbRoutes);

module.exports = router;
