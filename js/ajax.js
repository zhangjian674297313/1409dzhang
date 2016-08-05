define(["jquery.sea1.9.1","clickdt"],function($,clickdt){
	var ajax=function(ele){
		this.ele = ele;
		this.init();
	};
	ajax.prototype={
		init:function(){
			this.change();
		},
		change:function(){
			$(this.ele).on("change",function(){
				var id = $(this).val();
				var str="";
				$.ajax({
					type:"get",
					url:"./data.json",
					async:true,
					success:function(e){
						var obj = e[id]["matter"];
						var str="";
						for(var i in obj){
							str += "<dl>\
										<dt><span>"+obj[i].title+"</span></dt>\
										<dd>";
							var ob = obj[i].details;
								for(var j in ob){
									str +=	"<p>"+ob[j]+"</p>";
								}
							
							str +=		"</dd>\
									</dl>";
							/*obj[i].title
							obj[i].details;*/
							
						}
						$('.list_box').html(str);
						var dts = new clickdt("dt");
					}
				});
			});
		}
	}
	return ajax;
});