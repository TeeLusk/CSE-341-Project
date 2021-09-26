const express = require('express');
const router = express.Router();

let books = ["The Way of Kings", "Words of Raidance", "Oathbringer"];

// MAIN PAGE
router.get('/', (req, res, next) => {
  res.render('pages/prove02', {
    title: 'Prove 02',
    path: '/prove02', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
    message: "",
  });
});

router.get('/showBooks', (req, res, next) => {
  res.render('pages/showBooks', {
    title: 'Prove 02',
    path: '/prove02', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
    books: books,
    message: "",
  });
});

router.get('/addBooks', (req, res, next) => {
  res.render('pages/addBooks', {
    title: 'Prove 02',
    path: '/prove02', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
    books: books,
    message: "",
  });
});

// Add Book POST Request
router.post('/addBook', (req, res, next) => {
  let bookExists = books.includes(req.body.title);
  if (bookExists == true) {
    res.render('pages/showBooks', {
      title: 'Prove02',
      path: '/prove02', // For pug, EJS
      activeTA03: true, // For HBS
      contentCSS: true, // For HBS
      books: books,
      message: 'Sorry, that book already exists. Please try again'
    });
  } else {
    books.push(req.body.title);
    res.redirect('/prove02/showBooks');
  }

});

module.exports = router;