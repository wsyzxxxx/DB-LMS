var fs = require('fs');
var path = require('path');
var add_card_html = async (ctx , next) => {
    var html_file = fs.readFileSync(path.resolve(__dirname ,'..') +  '/views/add_card.html');
    ctx.response.type = 'text/html';
    ctx.response.status = 200;
    ctx.response.body = html_file;
    await next();
}

var add_card_css = async (ctx , next) => {
    var css_file = fs.readFileSync(path.resolve(__dirname , "..") + '/views/add_card.css');
    ctx.response.type = 'text/css';
    ctx.response.status = 200;
    ctx.response.body = css_file;
    await next();
}

var add_card_js = async (ctx , next) => {
    var js_file = fs.readFileSync(path.resolve(__dirname , "..") + '/views/add_card.js');
    ctx.response.type = 'text/javasrcipt';
    ctx.response.status = 200;
    ctx.response.body = js_file;
    await next();
}

module.exports = {
    "GET /add_card" : add_card_html,
    "GET /add_card.css" : add_card_css,
    "GET /add_card.js" : add_card_js
};