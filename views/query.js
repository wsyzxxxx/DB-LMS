$(document).ready(function(){
    $("button").click(function(){
        $.ajax({url:"/query/qu" , data:$("form").serialize() , dataType : 'json' , type : 'post' , async : 'flase' , success : function (data){
            if(data.error != ""){
                $("#data").html("未找到符合条件的图书。");
            }
            else{
                $("#data").hide();
                $("#data").html("");
                for(var i = 0;i < data.bno.length;i++){
                    var s = '<p class="data">书号:' + data.bno[i] + ", 书名:" + data.title[i] + ', 类型:' + data.type[i] + ", 作者:" + data.author[i] + ", 出版社:" + data.press[i] + ", 出版日期:" + data.year[i] + ", 价格:" + data.price[i].toString() + ", 总量:" + data.total[i].toString() + ", 库存:" + data.stock[i].toString() + "</p>";
                    $("#data").append(s);
                }
                $("#data").show(1000);
            }
        }});
    });
});