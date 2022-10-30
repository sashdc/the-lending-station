const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes.js');
const bookRoutes = require('./book-routes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/book', bookRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;