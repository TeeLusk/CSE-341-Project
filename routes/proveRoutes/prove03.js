//TA03 PLACEHOLDER
const express = require('express');
const router = express.Router();

const Product = require('../../models/product');

router.get('/', (req, res, next) => {
  Product.fetchAll(products => {
    res.render('pages/proveAssignments/prove03', {
      title: 'Prove 03',
      path: '/proveAssignments', // For pug, EJS
      activeTA03: true, // For HBS
      contentCSS: true, // For HBS
      prods: products,
      message: '',
      searchTerm: ''
    });
  });
});

router.post('/filterItems', (req, res, next) => {
  Product.filter(req.body.searchTerm, products => {
    res.render('pages/proveAssignments/prove03', {
      title: 'Prove 03',
      path: '/proveAssignments',
      prods: products,
      message: '',
      searchTerm: req.body.searchTerm
    });
  });
});

router.post('/filterById/:productId', (req, res, next) => {
  let productId = req.params.productId;
  Product.getProudctById(productId, product => {
    res.render('pages/proveAssignments/prove03', {
      title: 'Prove 03',
      path: '/proveAssignments',
      prods: product,
      message: '',
      searchTerm: '',
    });
  });
})


module.exports = router;