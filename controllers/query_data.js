var query_data = async (ctx , next) => {
    var connection = require('./login.js')();
    var bno = ctx.request.body.bno || "%";
    var type = ctx.request.body.type || "%";
    var title = ctx.request.body.title || "%";
    var press = ctx.request.body.press || "%";
    var year = ctx.request.body.year || "%";
    var author = ctx.request.body.author || "%";
    var order = ctx.request.body.order;
    console.log(year);

    if(ctx.request.body.fuzzy_bno==1)
        bno='%'+bno+'%';
    if(ctx.request.body.fuzzy_type==1)
        type='%'+type+'%';
    if(ctx.request.body.fuzzy_title==1)
        title='%'+title+'%';
    if(ctx.request.body.fuzzy_press==1)
        press='%'+press+'%';
    if(ctx.request.body.fuzzy_author==1)
        author='%'+author+'%';
    if(ctx.request.body.fuzzy_year==1)
        year='%'+year+'%';

    var  addSql = 'select * from book where bno like ? and type like ? and title like ? and press like ? and year like ? and author like ? order by '+order+' limit 50';
    var  addSqlParams = [bno, type,title,press,year,author];
    var rows = await connection.query(addSql , addSqlParams);
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
    var flag = 0;
    for (var row of rows){
        for (var key in row){
            map[key].push(row[key]);
            flag = 1;
        }
    }
    if(flag == 0){
        map["error"] = "不存在！";
    }
    console.log(map);
    ctx.response.status = 200;
    ctx.response.type = 'application/json';
    ctx.response.body = JSON.stringify(map);
    await next();
}

module.exports = {
    "POST /query/qu" : query_data
};