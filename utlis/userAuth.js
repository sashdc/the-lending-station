
const userAuth = (req, res, next) => {
    // TODO: If the user is not logged in, redirect the user to the login page
    if (req.session.admin){
      res.redirect('/admin')
    // TODO: If the user is admin, allow them to view the paintings
  }else {
    next()
  }
  
  };
  

  module.exports = userAuth;
