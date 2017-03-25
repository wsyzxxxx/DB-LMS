var borrow_data = async (ctx , next) => {
    var connection = require('./login.js')();
    connection.connect();
    var cno = ctx.request.body.cno || "";
    var bno = ctx.request.body.bno || "";
    var sql = 'select bno,type,name,press,year,author,price,total,stock from book natural join borrow where cno = ?';
    var map = new Map();
    var query = connection.query(sql , [cno] , function(err , results , fields){
        if(err){
            console.log("query error!");
            return;
        }
        else{
            console.log(results);
            map['bno'] = [];
            map['type'] = [];
            map['name'] = [];
            map['press'] = [];
            map['year'] = [];
            map['author'] = [];
            map['price'] = [];
            map['total'] = [];
            map['stock'] = [];
            for (var row of results){
                for (var key in row){
                    map[key].push(row[key]);
                }
            }
            console.log(map);
            ctx.response.status = 200;
            ctx.response.type = 'application/json';
            ctx.response.body = JSON.stringify(map);
            return;
        }
    });
    await next();
    console.log(query.sql);
    console.log(i);
}

module.exports = {
    "POST /bo" : borrow_data
};