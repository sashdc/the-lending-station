const withAuth = (req, res, next) => {
  // TODO: If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn){
    res.redirect('/userlogin')
  // TODO: If the user is logged in, allow them to view the paintings
}else {
  next()
}

};


module.exports = withAuth;

