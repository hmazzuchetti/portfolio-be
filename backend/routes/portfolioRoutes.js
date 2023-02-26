const express = require('express');
const router = express.Router();
const { getPortfolio, setPortfolio } = require('./controllers/portfolioController');

router.route('/').get(getPortfolio).post(setPortfolio);

module.exports = router;