const proveRoutes = require('express').Router();

proveRoutes
    .use('/prove02', require('./prove02'))
    .use('/prove03', require('./prove03'))
    // .get('/', (req, res, next) => {
    //     res.render('pages/proveAssignments/prove03')
    // })


module.exports = proveRoutes;
