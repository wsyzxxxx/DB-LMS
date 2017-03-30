var fs = require('fs');
var path = require('path');
var borrow_html = async (ctx , next) => {
    var html_file = fs.readFileSync(path.resolve(__dirname ,'..') +  '/views/borrow.html');
    ctx.response.type = 'text/html';
    ctx.response.status = 200;
    ctx.response.body = html_file;
    await next();
}

var borrow_css = async (ctx , next) => {
    var css_file = fs.readFileSync(path.resolve(__dirname , "..") + '/views/borrow.css');
    ctx.response.type = 'text/css';
    ctx.response.status = 200;
    ctx.response.body = css_file;
    await next();
}

var borrow_js = async (ctx , next) => {
    var js_file = fs.readFileSync(path.resolve(__dirname , "..") + '/views/borrow.js');
    ctx.response.type = 'text/javascript';
    ctx.response.status = 200;
    ctx.response.body = js_file;
    await next();
}

module.exports = {
    "GET /borrow" : borrow_html,
    "GET /borrow.css" : borrow_css,
    "GET /borrow.js" : borrow_js
};