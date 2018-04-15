const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/key');
const app = express();

mongoose.connect(keys.mongoKey);

require('./routes/homeRoutes')(app);

const PORT = process.env.NODE_ENV || 5000;
app.listen(PORT);
