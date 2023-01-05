const { loadAllBlogDataCountByKey } = require('../models/blogs.model');

const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

function httpGetAllBlogs(req, resp){
    resp.status(200).json(blogs);
}

async function httpGetBlogsByCategory(req, res){
    const result = await loadAllBlogDataCountByKey('category');
    res.status(200).json(result);
     
 }

 async function httpGetBlogsByLanguage(req, res){
    const result = await loadAllBlogDataCountByKey('language');
     res.status(200).json(result);
 }

 async function httpGetBlogsByHashtag(req, res){
    const result = await loadAllBlogDataCountByKey('hashtag');
     res.status(200).json(result);
 }

 async function httpGetBlogsByMonth(req, res){
    const result = await loadAllBlogDataCountByKey('month');
     res.status(200).json(result);
 }

module.exports = {
    httpGetAllBlogs,
    httpGetBlogsByCategory,
    httpGetBlogsByLanguage,
    httpGetBlogsByHashtag,
    httpGetBlogsByMonth,
}