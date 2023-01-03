const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
//const csvdb = require('csv-database');

var blog_data = [];
//var count_data = 0;


function loadBlogData(){
    return new Promise((resolve, reject) => {
        fs.createReadStream(path.join(__dirname, '..', '..','data', 'blog.csv'))
        .pipe(csv())
        .on('data', (data) => {
            blog_data.push(JSON.stringify(data));
            //console.log(data['month']);
        })
        .on('error', (err) => {
            console.log(err);
            reject(err);
        })
        .on('end', () => {
            console.log("All data loaded "+ blog_data);
            resolve();
        });
    });
    
}


/* function loadBlogData1(key, value){
    return new Promise((resolve, reject) => {
        fs.createReadStream(path.join(__dirname, '..', '..','data', 'blog.csv'))
        .pipe(csv())
        .on('data', function(chunk){
            //console.log("1 " +chunk[key]);
            //console.log("2 " +value);
            if(chunk[key] == value) count_data++;
        })
        .on('error', (err) => {
            console.log(err);
            reject(err);
        })
        .on('end', () => {
            console.log(count_data);
            resolve();
        });
    });    
} */

/* async function loadBlogDataByCategory(item){
    blog_data.length = 0;
    const db = await csvdb(path.join(__dirname, '..', '..','data', 'blog.csv'), ["id","month","category","language","hashtag"], ",");
    const result = await db.get(item); 
    return result;
}

async function loadBlogDataByHashTag(item){
    blog_data.length = 0;
    const db = await csvdb(path.join(__dirname, '..', '..','data', 'blog.csv'), ["id","month","category","language","hashtag"], ",");
    const result = await db.get(item); 
    return result;
}

async function loadBlogDataByLanguage(item){
    blog_data.length = 0;
    const db = await csvdb(path.join(__dirname, '..', '..','data', 'blog.csv'), ["id","month","category","language","hashtag"], ",");
    const result = await db.get(item); 
    return result;
} */



module.exports = {
    loadBlogData,
    // loadBlogDataByCategory,
    // loadBlogDataByHashTag,
    // loadBlogDataByLanguage,
    // loadBlogData1,
    blogs: blog_data,
    // count: count_data,
  };

