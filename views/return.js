$(document).ready(function(){
    $("button").click(function(){
        $.ajax({url:"/return/re" , data:$("form").serialize() , type:"post" , dataType:"json" , async:"false" , success:function(data){
            $("P").hide();
            if(data.error != ""){
                $("p").html(data.error);
            }
            else{
                $("p").html(data.return);
            }
            $("p").show(500);
        }})
    })
})