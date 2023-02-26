const asyncHandler = require('express-async-handler');
const Portfolio = require('../../models/portfolioModel');

// @desc Get portfolio
// @route GET /api/portfolio
// @access Private
const getPortfolio = asyncHandler (async (req, res) => {
    const portfolioData = await Portfolio.find();
    res.status(200).json(portfolioData);
})

// @desc Set Goal
// @route POST /api/goals
// @access Private
const setPortfolio = asyncHandler(async (req, res) => {
    // if(!req.body.text){
    //     // 400 is a bad request, which means that the request is missing something
    //     res.status(400)
    //     throw new Error('Please add a text field');
    // }
    console.log(req.body);
    const portfolio = await Portfolio.create({
        name: req.body.name,
        description: req.body.description,
        professionalTitle: req.body.professionalTitle,
        birthday: req.body.birthday,
        city: req.body.city,
        phone: req.body.phone,
        email: req.body.email,
        socialMedias: req.body.socialMedias,
        projects: req.body.projects,
    });

    res.status(200).json(portfolio);
})

module.exports = {
    getPortfolio,
    setPortfolio
}