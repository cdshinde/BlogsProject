const express = require('express');

const { httpGetAllBlogs, httpGetBlogsByCategory, httpGetBlogsByLanguage, httpGetBlogsByHashtag, httpGetBlogsByMonth } = require('./blogs.controller');

const blogsRouter = express.Router();

blogsRouter.get('/blogs/query=all', httpGetAllBlogs);
blogsRouter.get('/blogs/queryByCategory', httpGetBlogsByCategory);
blogsRouter.get('/blogs/queryByLanguage', httpGetBlogsByLanguage);
blogsRouter.get('/blogs/queryByHashtag', httpGetBlogsByHashtag);
blogsRouter.get('/blogs/queryByMonth', httpGetBlogsByMonth);

module.exports = blogsRouter;