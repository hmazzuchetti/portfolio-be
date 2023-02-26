const mongoose = require ('mongoose');

const portfolioSchema = mongoose.Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    professionalTitle: {
        type: String,
    },
    birthday: {
        type: Date,
    },
    city: {
        type: String,
    },
    phone: {
        type: String,
    },
    email: {
        type: String,
    },
    socialMedias: {
        type: Array
    },
    projects: {
        type: Object
    },
}, {
    timestamps: true
})
 

module.exports = mongoose.model('Portfolio', portfolioSchema, 'professional-data');