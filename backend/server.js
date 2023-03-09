const express = require('express');
const cors = require('cors');
const {errorHandler} = require('./middleware/errorMiddleware'); // Load the error middleware
const port = process.env.PORT || 5000; // Search for the port in the environment variables, if not found, use 5000
const connectDB = require('./config/db'); // Load the database connection

connectDB(); // Connect to the database

const app = express(); // Initialize the express app
app.use(cors({origin: 'https://hmazzuchetti.com/'})); // Allow requests from the portfolio frontend
app.use(express.json()); // Parse the body of the request
app.use(express.urlencoded({ extended: false})); 

app.use('/api/portfolio', require('./routes/portfolioRoutes')); // Use the portflioRoutes.js file for the /api/portfolio route

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});