const express = require('express');
const cors = require('cors');
const ErrorHandler = require('./middleware/error')

const app = express();

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(cors({ origin: true, credentials: true }));

// Load Route Files

// Mount Routes

// Error Handler
app.use(ErrorHandler);

module.exports = app;