const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const blogRouter = require('./routes/blogs.routes');

const app = express();

app.use(cors({
    origin:'http://localhost:3000' //whitelist this url
}));

app.use(morgan('combined'));

app.use(express.json());

app.use(blogRouter);

module.exports = app;