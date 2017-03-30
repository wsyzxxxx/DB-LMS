$(document).ready(function(){
    $("button").click(function(){
        $.ajax({url:"/borrow/bo" , data:$("form").serialize() , type:"post" , dataType:"json" , async:"false" , success:function(data){
            $("p").hide();
            if(data.error != ""){
                $("p").html(data.error);
            }
            else{
                $("p").html(data.return);
            }
            $("p").show(300);
        }})
    })
})