$(document).ready(function(){
    $("button").click(function(){
        $.ajax({url:'/in_book/in' , type:'post' , dataType:'json' , data:$("form").serialize() , async:'false' , success:function(data){
            $("p").hide();
            if(typeof(data.error) == 'string'){
                if(data.error != ""){
                    $("p").html(data.error);
                }
                else{
                    $("p").html("书本已入库！");
                }
            }
            else{
                $("p").html("");
                for(var i = 0;i < data.error.length;i++){
                    if(data.error[i] == ""){
                        $("p").append("插入成功</br>");
                    }
                    else{
                        $("P").append(data.error[i] + '</br>');
                    }
                }
            }
            $("p").show(100);
        }});
    });
})