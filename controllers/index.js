var fs = require('fs');
var path = require('path');
var index_html = async (ctx , next) => {
    var html_file = fs.readFileSync(path.resolve(__dirname ,'..') +  '/views/index.html');
    ctx.response.type = 'text/html';
    ctx.response.status = 200;
    ctx.response.body = html_file;
    await next();
}

var index_css = async (ctx , next) => {
    var css_file = fs.readFileSync(path.resolve(__dirname , "..") + '/views/index.css');
    ctx.response.type = 'text/css';
    ctx.response.status = 200;
    ctx.response.body = css_file;
    await next();
}

module.exports = {
    "GET /" : index_html,
    "GET /index.css" : index_css
};