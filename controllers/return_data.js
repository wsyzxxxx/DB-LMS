var return_data = async (ctx , next) => {
    var connection = require('./login.js')();
    var cno = ctx.request.body.cno || "";
    var bno = ctx.request.body.bno || "";

    var sql = 'select * from card where cno = ?';
    var rows = await connection.query(sql , [cno]);
    var map = new Map();
    map['bno'] = [];
    map['type'] = [];
    map['title'] = [];
    map['press'] = [];
    map['year'] = [];
    map['author'] = [];
    map['price'] = [];
    map['total'] = [];
    map['stock'] = [];
    map["error"] = "";
    map["return"] = "";
    if(rows.length == 0){
        map["error"] = "借书证不存在！";
    }
    else{
        sql = 'select bno,type,title,press,year,author,price,total,stock from book natural join borrow where cno = ? order by title limit 50';
        rows = await connection.query(sql , [cno]);
        for (var row of rows){
            for (var key in row){
                map[key].push(row[key]);
            }
        }
        sql = 'select * from borrow where cno = ? and bno = ?';
        var result = await connection.query(sql , [cno,bno]);
        if(result.length == 0){
            map["error"] = '没有借过此书！';
        }
        else{
            sql = 'delete from borrow where cno = ? and bno = ?';
            await connection.query(sql , [cno,bno]);
            sql = 'update book set stock = stock + 1 where bno = ?';
            await connection.query(sql , [bno]);
            map["return"] = '还书成功！';
        }
    }
    ctx.response.status = 200;
    ctx.response.type = 'application/json';
    ctx.response.body = JSON.stringify(map);
    await next();
}


module.exports = {
    "POST /return/re" : return_data
};