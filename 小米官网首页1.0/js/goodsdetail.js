$(function(){
	$('#footer').load('foot.html');
	$('#content .content-item').eq(0).show()
	$('#nav .nav li').on('click',function(){
		var i = $(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		$('#content .content-item').eq(i).show().siblings().hide();
	});
	//选择型号
	var choose =$('#content .content-item .content-item-info .type .version-1-item li');
	var suit = $('#content .content-item .content-item-info .type .suit .version-1-item li');
	var val1= $('.border').eq(0).text();
	var val2= $('.border').eq(1).text();
	var price = $('#content .title span').html();
	var val3;
	$('#content .content-item .content-item-info .choosedtype').html(val1+val2+'&nbsp;'+price+'</br>')	
	choose.on('click',function(){
		$(this).addClass('border').siblings().removeClass('border')		
		var val1= $('.border').eq(0).text();
		var val2= $('.border').eq(1).text();
		$('#content .content-item .content-item-info .choosedtype').html(val1+val2+'&nbsp;'+price+'</br>')
	})
	
	suit.on('click',function(){
		$(this).addClass('border').siblings().removeClass('border')
		val3= $('.border em').text();
		$('#content .content-item .content-item-info .type .suit .suit-item').show();
		$('#content .content-item .content-item-info .choosedtype').html(val1+val2+'&nbsp;'+price+'</br>'+val3);
	});

	$('#content .content-item .content-item-info .buy').click(function(){
		alert('已加入购物车')
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})