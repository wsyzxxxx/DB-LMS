var Koa = require('koa');

var app = new Koa();

app.use(async (ctx , next) => {
    console.log("the path is " , ctx.request.path);
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello world!</h1>';
});

app.listen(8080);

console.log("The server is running!");

