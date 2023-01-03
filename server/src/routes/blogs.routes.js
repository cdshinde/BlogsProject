const express = require('express');

const { httpGetAllBlogs, httpGetBlogsByCategory, httpGetBlogsByLanguage, httpGetBlogsByHashtag, httpGetBlogsByMonth } = require('./blogs.controller');

const blogsRouter = express.Router();

blogsRouter.get('/blogs/query=all', httpGetAllBlogs);
blogsRouter.get('/blogs/query=category', httpGetBlogsByCategory);
blogsRouter.get('/blogs/query=language', httpGetBlogsByLanguage);
blogsRouter.get('/blogs/query=hashtag', httpGetBlogsByHashtag);
blogsRouter.get('/blogs/query=month', httpGetBlogsByMonth);

module.exports = blogsRouter;