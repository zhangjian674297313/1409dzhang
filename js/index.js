require(["jquery.sea1.9.1","ajax","clickdt"],function($,change,clickdt){
	
	var flag=!0,fla=!0;
	$(".btn").on("click",function(){
		if(flag){
			$(".list").slideDown();
			flag=!flag;
		}else{
			$(".list").slideUp();
			flag=!flag;
		}
		
	});
	
	/*$("dt").on("click",function(){
		$(this).next().slideToggle();
		$(this).parent().siblings().find("dd").slideUp();
	});*/
	var dts = new clickdt("dt");
	
	$(".daohang").on("click",function(){
		$(".big_nav").slideToggle();
	});
	
	$("#wltp").on("click",function(){
		if(fla){
			$(".tuo").css({'-webkit-transform': 'translate3d(0,0,0)'});
			fla=!fla;
		}else{
			$(".tuo").css({'-webkit-transform': 'translate3d(-200%,0,0)'});
			fla=!fla;
		}
	});
	
	var change = new change(".sousuo");
});
