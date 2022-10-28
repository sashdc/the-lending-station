const router = require("express").Router();
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
router.get("/admin", (req, res) => {
  try{res.render("admin-dashboard" );
}catch (err) {
    res.status(500).json(err);
  }}
);



module.exports = router;
