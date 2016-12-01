//淡入淡出轮播
function Container(container) {
	this.container = container;
	this.left = this.container.find('.left');
	this.right = this.container.find('.right');
	this.imgs = this.container.find('.img-wrapper img');
	this.circles = this.container.find('.circle-item');
	this.now = 0;
	this.next = 0;
	this.timer = null;
	this.interval = 1400;
}
Container.prototype = {
	constructor: Container,
	init: function() {
		this.imgs.eq(0).show();
		this.autoPlay();
		this.hover();
		this.leftClick();
		this.rightClick();
		this.circleClick();
	},
	autoPlay: function() {
		var that = this;
		this.timer = setInterval(function() {
			that.next++;
			that.imgSwitch();
		}, this.interval)

	},
	hover: function() {
		var that = this;
		this.container.hover(function() {
			clearInterval(that.timer);
		}, function() {
			that.autoPlay();
		})
	},
	leftClick: function() {
		var that = this;
		this.left.click(function() {
			that.next--;
			that.imgSwitch();
		})
	},
	rightClick: function() {
		var that = this;
		this.right.click(function() {
			that.next++;
			that.imgSwitch();
		})
	},
	circleClick: function() {
		var that = this;
		this.circles.click(function() {
			that.next = $(this).index();
			that.imgSwitch();
		})
	},
	imgSwitch: function() {
		if (this.next >= this.imgs.length) {
			this.next = 0;
		}
		if (this.next < 0) {
			this.next = this.imgs.length - 1;
		}
		this.imgs.eq(this.now).fadeOut(1000);
		this.imgs.eq(this.next).fadeIn(1000);
		this.circles.eq(this.next).siblings().removeClass('current');
		this.circles.eq(this.next).addClass('current');
		this.now = this.next;
	}
}
//hover 浮起
function Content(content) {
	this.content = content;
	this.leftImg = this.content.find('.main-one-l img');
	this.rightLi = this.content.find('.main-one-r ul li');
}
Content.prototype = {
	constructor: Content,
	init: function() {
		this.leftHover();
		this.rightHover();
	},
	leftHover: function() {
		var that = this;
		that.leftImg.hover(function() {
			$(this).animate({
				top: -2
			});
			$(this).css('box-shadow', '0 15px 15px #e0e0e0');
		}, function() {
			$(this).stop(true).animate({
				top: 0
			});
			$(this).css('box-shadow', 'none');
		});
	},
	rightHover: function() {
		var that = this;
		that.rightLi.hover(function() {
			$(this).animate({
				top: -2
			});
			$(this).css('box-shadow', '0 15px 15px #e0e0e0');
		}, function() {
			$(this).stop(true).animate({
				top: 0
			});
			$(this).css('box-shadow', 'none');
		});
	}
}