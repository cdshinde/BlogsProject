const https = require('https');
const fs = require('fs');

const app = require('./app');

const options = {
    key: fs.readFileSync('./.cert/privatekey.key'),
    cert: fs.readFileSync('./.cert/certificate.crt')
  };

const { loadBlogData } = require('./models/blogs.model');

const PORT = process.env.PORT || 8000;

const server = https.createServer(options, app);

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});


