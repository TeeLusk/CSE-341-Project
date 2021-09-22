//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself!
const express = require('express');
const router = express.Router();

let users = ["Derrik", "Tyler", "Trevor"];

// MAIN PAGE
router.get('/', (req, res, next) => {
  res.render('pages/ta02', {
    title: 'Team Activity 02',
    path: '/ta02', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
    users: users,
    message: "",
  });
});

// ADD USER
router.post('/addUser', (req, res, next) => {
  let userExists = users.includes(req.body.username);
  if (userExists == true) {
    res.render('pages/ta02', {
      title: 'Team Activity 02',
      path: '/ta02', // For pug, EJS
      activeTA03: true, // For HBS
      contentCSS: true, // For HBS
      users: users,
      message: 'Sorry, user already exists. Please try again'
    });
  } else {
    users.push(req.body.username);
    res.redirect('/ta02');
  }

});

// REMOVE USER
router.post('/removeUser', (req, res, next) => {
  let userNotFound = users.includes(req.body.username);

  if (!userNotFound) {
    res.render('pages/ta02', {
      title: 'Team Activity 02',
      path: '/ta02', // For pug, EJS
      activeTA03: true, // For HBS
      contentCSS: true, // For HBS
      users: users,
      message: 'User not found. Please check user list and try again'
    });
  } else {
    users = users.filter(user => user !== req.body.username);
    res.redirect('/ta02');
  }


});

module.exports = router;