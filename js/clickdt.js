define(["jquery.sea1.9.1"],function($){
	
	var clicks=function(ele){
		this.ele=ele;
		this.init();
	}
	clicks.prototype={
		init:function(){
			this.clicka();
		},
		clicka:function(){
			$(this.ele).on("click",function(){
				$(this).next().slideToggle();
				$(this).parent().siblings().find("dd").slideUp();
			});
		}
	}
	return clicks;
});