$(document).ready(function(){
    $("#a").click(function(){
        $.ajax({url:'/add_card/add' , type:'post' , dataType:'json' , data:$('form').serialize() , async:'false' , success:function(data){
            $("p").hide();
            $("p").html(data.return);
            $("p").show(200);
        }});
    });
    $("#b").click(function(){
        $.ajax({url:'add_card/delete' , type:'post' , dataType:'json' , data:$("form").serialize() , async:'false' , success:function(data){
            $("p").hide();
            $("p").html(data.return);
            $("p").show(200);
        }});
    });
})