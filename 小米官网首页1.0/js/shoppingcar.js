$(function(){
	$('#footer').load('foot.html');
	var check = $('.list input');
	var checks = $('.content .checkbox input');
	check.click(function(){
		if(checks.attr('checked') == 'checked'){
			checks.removeAttr('checked');
		}else{
			checks.attr('checked','checked');
		}
		
	})
	checks.click(function(){
		if($(this).attr('checked') == 'checked'){
			$(this).removeAttr('checked');
		}else{
			$(this).attr('checked','checked');
		}
	})
	function Goods(content){
		this.content = content;		
		this.increase = this.content.find('.increase');
		this.decrease = this.content.find('.decrease');
		this.input = this.content.find('.gamount input');
		this.amount = 1 ||this.content.find('.gamount input').val();
		this.gprice = this.content.find('.gprice b').html();
		this.del = this.content.find('.delete');
		
	}
	Goods.prototype = {
		constructor: Goods,
		init:function(){
			this.Increase();
			this.Decrease();
			this.Delete();
			this.Blur();
			this.input.val(1)
			
		},
		Increase:function(){
			var that = this;
			this.increase.click(function(){
				that.amount++;
				if(that.amount>=10){
					that.amount = 10
				}
				that.input.val(that.amount);
				that.content.find('.gtotal b').html(that.amount*that.gprice);
			})
		},
		Decrease:function(){
			var that = this;
			this.decrease.click(function(){
				that.amount--;
				if(that.amount<=1){
					that.amount = 1
				}
				that.input.val(that.amount);
				that.content.find('.gtotal b').html(that.amount*that.gprice);
			})
		},
		Delete:function(){
			var that = this;
			this.del.click(function(){
				if(confirm('确定删除宝贝吗？')){
					$(this).parent().parent().remove();
				}				
			})
		},
		Blur: function(){
			var that = this;
			this.input.blur(function(){
				that.amount = parseInt( that.input.val() )
				that.input.val(that.amount)
			})
		}
		
	}
	

//	console.log(total.eq(0).html());
//	for(var i = 0; i++;i<total.length){
//		totalprice = parseInt(total.eq(i).html());
//		totalPrice += totalprice;
//		console.log(totalprice);
//	}
 var goods0 = new Goods($('.content').eq(0));
   goods0.init();
   var goods1 = new Goods($('.content').eq(1));
   goods1.init();
   var goods2 = new Goods($('.content').eq(2));
   goods2.init();
   
	$.getJSON('js/data.json',function(data){
		console.log(data)
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})