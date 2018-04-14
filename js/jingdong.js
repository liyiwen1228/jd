var i=0;
var j=0;
var timer;
$(function(){
$(".fl li,#box").mouseover(function(){
$(".city li").addClass("licolor");
$("#box,.list").show();;

});
$("#box").mouseout(function(){
$(".city li").removeClass("licolor");
$("#box").hide();
});

$(".tab").hover(function(){
j=$(this).index();
Show();
clearInterval(timer);
},function(){
ShowTime();
});
$(".itemlist li").eq(j).show().siblings().hide();
ShowTime();
   if($.cookie("btext")==""||$.cookie("btext")==null){
		$(".city a").text("北京");
	}else{
		$(".city a").text('$.cookie("btext")');
	}
$(".list a").click(function(){
var text=$(this).text();
$(".city a").text(text);
$.cookie("btext",text);	
});
});
/*function Change(){
i=$(".list").index();
var val=$(".list a").eq(i).text();
$(".city a").text(val);
}*/
function ShowTime(){
timer=setInterval(function(){
	j++;
	if(j==8){
		j=0;
	}
Show();
},3000);
}
function Show(){
$(".itemlist li").eq(j).fadeIn().siblings().fadeOut();
$(".tab").eq(j).addClass("bg").siblings().removeClass("bg");
}