var fs = require('fs');
var path = require('path');
var admin_html = async (ctx , next) => {
    var html_file = fs.readFileSync(path.resolve(__dirname ,'..') +  '/views/admin.html');
    ctx.response.type = 'text/html';
    ctx.response.status = 200;
    ctx.response.body = html_file;
    await next();
}

var admin_css = async (ctx , next) => {
    var css_file = fs.readFileSync(path.resolve(__dirname , "..") + '/views/admin.css');
    ctx.response.type = 'text/css';
    ctx.response.status = 200;
    ctx.response.body = css_file;
    await next();
}

var admin_js = async (ctx , next) => {
    var js_file = fs.readFileSync(path.resolve(__dirname , "..") + '/views/admin.js');
    ctx.response.type = 'text/javascript';
    ctx.response.status = 200;
    ctx.response.body = js_file;
    await next();
}

var admin_image = async (ctx , next) => {
    var js_file = fs.readFileSync(path.resolve(__dirname , "..") + '/views/logo3.jpg');
    ctx.response.type = 'image';
    ctx.response.status = 200;
    ctx.response.body = js_file;
    await next();
}

module.exports = {
    "GET /admin" : admin_html,
    "GET /admin.css" : admin_css,
    "GET /admin.js" : admin_js,
    "GET /logo3.jpg" : admin_image
};
