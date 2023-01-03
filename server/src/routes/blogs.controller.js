const { blogs} = require('../models/blogs.model');

const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

function httpGetAllBlogs(req, resp){
    resp.status(200).json(blogs);
}

async function httpGetBlogsByCategory(req, res){
    const result = await loadAllBlogDataCountByKey('category')
     res.status(200).json(result)
 }

 async function httpGetBlogsByLanguage(req, res){
    const result = await loadAllBlogDataCountByKey('language')
     res.status(200).json(result)
 }

 async function httpGetBlogsByHashtag(req, res){
    const result = await loadAllBlogDataCountByKey('hashtag')
     res.status(200).json(result)
 }

 async function httpGetBlogsByMonth(req, res){
    const result = await loadAllBlogDataCountByKey('month')
     res.status(200).json(result)
 }

/**
 * This generic function counts occurances of data by specific column and returns that as a JSON data.
 * @param {*} key -> the column name that will be used for the processing
 * @returns 
 */
function loadAllBlogDataCountByKey(key){
    let rowArr = [];
    let occurrences;

    return new Promise((resolve, reject) => {
        fs.createReadStream(path.join(__dirname, '..', '..','data', 'blog.csv'))
        .pipe(csv())
        .on('data', function(chunk){
            rowArr.push(chunk[key]);
        })
        .on('error',(err) => {
            console.log(err);
            reject(err);
        })
        .on('end', () => {
            occurrences = rowArr.reduce(function (acc, curr) {
                return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
            }, {});
            console.log(occurrences);
            resolve(occurrences);
        });
    });    
}

//Not used
function loadBlogDataCountByKeyValue(key, value){
    return new Promise((resolve, reject) => {
        fs.createReadStream(path.join(__dirname, '..', '..','data', 'blog.csv'))
        .pipe(csv())
        .on('data', function(chunk){
            if(chunk[key] == value) count++;
        })
        .on('error', (err) => {
            console.log(err);
            reject(err);
        })
        .on('end', () => {
            console.log(count);
            resolve();
        });
    });    
}




module.exports = {
    httpGetAllBlogs,
    httpGetBlogsByCategory,
    httpGetBlogsByLanguage,
    httpGetBlogsByHashtag,
    httpGetBlogsByMonth,
    loadAllBlogDataCountByKey


}