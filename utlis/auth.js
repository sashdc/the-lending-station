const withAuth = (req, res, next) => {
  // TODO: If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn){
    res.redirect('/')
  // TODO: If the user is logged in, allow them to view the paintings
}else {
  next()
}

};

const adminAuth = (req, res, next) => {
  // TODO: If the user is not logged in, redirect the user to the login page
  if (!req.session.admin){
    res.redirect('/')
  // TODO: If the user is admin, allow them to view the paintings
}else {
  next()
}

};


module.exports = withAuth;
