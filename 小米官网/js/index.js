$(function() {
	//购物车hover
	$('#head .head-right .shoppingcar').mouseenter(function() {
		$('#head .head-right .shoppingcar').addClass('hover');
		$('#head .head-right .shoppingcar img').attr('src', 'img/shoppingcar2.jpg');
		$('#head .shoppingcar-content').stop().slideDown(200);
	});
	$('#head .head-right .shoppingcar').mouseleave(function() {
		$('#head .head-right .shoppingcar').removeClass('hover');
		$('#head .head-right .shoppingcar img').attr('src', 'img/shoppingcar1.jpg');
		$('#head .shoppingcar-content').stop().slideUp(200);
	});
	//搜索框获焦
	$('.search .input input').on('focus', function() {
		$('.search .input-item').hide();
		$('#nav .search').addClass('onfoucs');
		$('#nav .search .search-icon').addClass('onfoucs');
		$('#nav .search .input .search-content .search-list').stop().show();

	});
	//搜索框失去焦点
	$('.search .input input').on('blur', function() {
		$('.search .input-item').show();
		$('#nav .search').removeClass('onfoucs');
		$('#nav .search .search-icon').removeClass('onfoucs');
		$('#nav .search .input .search-content .search-list').stop().hide();

	});
	$('.goods-list>li').hover(function() {
		var length = $(this).find('.goods-right .goods-list-item').length;
		$(this).find('.goods-right').css('width', 250 * length);
		$(this).find('.goods-right').stop().show();
	}, function() {
		$(this).find('.goods-right').stop().hide();
	});
	var widthL = $(window).width();
	$('#nav .nav .nav-list .nav-content-item').css('width', widthL);

	//导航页内容显示与消失
	var flag = true;
	var index = 0;
	$('#nav .nav .nav-list>li:lt(7)').hover(function() {
		if (flag) {
			$(this).find('.nav-content-item').stop(true).slideDown(200);
			flag = false;
		} else {
			$(this).find('.nav-content-item').stop(true).show();
		}
	}, function() {
		index = $(this).index();
		$(this).find('.nav-content-item').stop(true).hide();
	});
	$('#nav .nav .nav-list').mouseleave(function() {
			$('#nav .nav .nav-list>li').eq(index).find('.nav-content-item').stop(true).show().slideUp();
			flag = true;
		})
		//轮播
	var banner = new Container($('#banner .container'));
	banner.interval = 5000;
	banner.init();

	//小米明星单品轮播
	var stars = {
		starsContent: $('#stars .stars-content'),
		starsLeft: $('#stars .title .stars-btn .btn-left'),
		starsRight: $('#stars .title .stars-btn .btn-right'),
		width: $('#stars .stars-content .stars-item').width(),
		length: $('#stars .stars-content .stars-item').length,
		starsBtn: $('#stars .title .stars-btn'),
		timer: null,
		index: 0,
		init: function() {
			this.autoPlay();
			this.leftClick();
			this.rightClick();
			this.hover();
		},
		imgSwitch: function() {
			if (this.index >= this.length) {
				this.index = 0;
			}
			if (this.index < 0) {
				this.index = this.length - 1;
			}
			this.starsContent.stop(true).animate({
				marginLeft: -this.width * this.index
			}, 1000)
		},
		autoPlay: function() {
			var that = this;
			timer = setInterval(function() {
				that.index++;
				that.imgSwitch();
			}, 5000)
		},
		leftClick: function() {
			var that = this;
			this.starsLeft.click(function() {
				that.index--;
				console.log(that.index);
				that.imgSwitch();
			})
		},
		rightClick: function() {
			var that = this;
			this.starsRight.click(function() {
				that.index++;
				that.imgSwitch();
			})

		},
		hover: function() {
			var that = this;
			this.starsBtn.hover(function() {
				clearInterval(timer);
			}, function() {
				that.autoPlay();
			})
		}
	}
	stars.init();
	//商品hover
	var main1 = new Content($('.main-one').eq(0));
	main1.init();
	var main2 = new Content($('.main-two').eq(0));
	main2.init();
	var main3 = new Content($('.main-three').eq(0));
	main3.init();
	var main4 = new Content($('.main-four').eq(0));
	main4.init();
	$('#main .main-one-r ul li').hover(function() {
		$(this).find('.comment').stop(true).slideDown();
	}, function() {
		$(this).find('.comment').stop(true).slideUp();
	});
	//导航滑动
	$('#main .main-two .main-one-r').eq(0).show();
	$('#main .main-two .parts li').hover(function(){
		var index = $(this).index();
		$('#main .main-two .main-one-r').eq(index).show().siblings('.main-two .main-one-r').hide();
	})
	$('#main .main-three .main-one-r').eq(0).show();
	$('#main .main-three .parts li').hover(function(){
		var index = $(this).index();
		$('#main .main-three .main-one-r').eq(index).show().siblings('.main-three .main-one-r').hide();
	})
	$('#main .main-four .main-one-r').eq(0).show();
	$('#main .main-four .parts li').hover(function(){
		var index = $(this).index();
		$('#main .main-four .main-one-r').eq(index).show().siblings('.main-four .main-one-r').hide();
	})
	
	//为你推荐轮播
	var recommend = {
		recommendContent: $('#main .main-five .main-one-r'),
		recommendLeft: $('#main .main-five .btn-left'),
		recommendRight: $('#main .main-five .btn-right'),
		recommendLi: $('#main .main-five .main-one-r ul li'),
		width: $('#main .main-five .main-one-r ul').width(),
		length: $('#main .main-five .main-one-r ul').length,
		timer: null,
		index: 0,
		init: function() {
			this.leftClick();
			this.rightClick();
			this.hover();
		},
		imgSwitch: function() {
			if (this.index >= this.length) {
				this.index = this.length-1;
				return;
			};
			if (this.index < 0) {
				this.index = 0;
				return;
			};
			this.recommendContent.stop(true).animate({
				marginLeft: -this.width * this.index
			}, 500)
		},
		leftClick: function() {
			
			var that = this;
			that.recommendLeft.click(function() {
				clearInterval(this.timer);
				that.index--;
				that.imgSwitch();
			})
		},
		rightClick: function() {
			clearInterval(this.timer)
			var that = this;
			that.recommendRight.click(function() {
				that.index++;
				that.imgSwitch();
			})	
		},
		hover:function(){
			recommengLi.hover(function(){
				$(this).css('top',-2);
			})
		}
	}
	console.log(recommend.width);
	recommend.init();
	
	
	
	
	
	
	
	
	
	
})