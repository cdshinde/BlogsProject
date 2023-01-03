const http = require('http');

const app = require('./app');

const { loadBlogData } = require('./models/blogs.model');

const PORT = process.env.PORT || 9000;

const server = http.createServer(app);

async function startServer(){

    await loadBlogData();
    
    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}...`);
    });
}

startServer();



