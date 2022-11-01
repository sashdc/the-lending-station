
const adminAuth = (req, res, next) => {
    // If the user is not an admin, redirect the user to the home page
    if (!req.session.admin){
      res.redirect('/')
    // If the user is admin, allow them to access admin pages
  }else {
    next()
  }
  
  };
  

  module.exports = adminAuth;
