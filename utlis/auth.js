const withAuth = (req, res, next) => {
  //If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn){
    res.redirect('/userlogin')
  // If the user is logged in, allow them to view the books and other user pages
}else {
  next()
}

};


module.exports = withAuth;

