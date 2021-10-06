//TA03 PLACEHOLDER
const express = require('express');
const router = express.Router();

const Product = require('../models/product');

router.get('/', (req, res, next) => {
  Product.fetchAll(products => {
    res.render('pages/ta03', {
      title: 'Team Activity 03',
      path: '/ta03', // For pug, EJS
      activeTA03: true, // For HBS
      contentCSS: true, // For HBS
      prods: products,
      searchTerm: ''
    });
  });
});

router.post('/filterItems', (req, res, next) => {
  Product.filter(req.body.searchTerm, products => {
    res.render('pages/ta03', {
      title: 'Team Activity 03',
      path: '/ta03',
      prods: products,
      searchTerm: req.body.searchTerm
    });
  });
});

module.exports = router;