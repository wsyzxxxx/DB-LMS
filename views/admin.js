$(document).ready(function(){
    $("button").click(function(){
        $.ajax({url:"/admin/ad" , type:"post" , dataType:"json" , data:$("#data").serialize() , async:"false" , success:function(data){
            if(data.error != ""){
                $("p").hide();
                $("p").html("账号或密码错误！");
                $("#button").show(200);
            }
            else{
                $("p").hide();
                $("#form").hide();
                $("#button").hide();
                s = "<div><button class='b' formaction='/in_book'>图书入库</button></div><div><button class='b' formaction='/add_card'>借书证管理</button></div>";
                $("#button").append(s);
                $("#button").show(200);
            }
        }});
    });
})