function login(){
    var mysql = require('mysql');
    var wrapper = require('co-mysql');
    var pool = mysql.createPool({
        host : 'localhost',
        user : 'root',
        password : '645658325',
        database : 'testhys'
    });
    var p = wrapper(pool);
    return p;
}

module.exports = login;
