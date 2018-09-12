const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('projects', { title: 'Jose de Llanza' });
});

module.exports = router;
