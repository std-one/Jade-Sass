var hogehoge = (function(){

	// 変数宣言
	var point_sp = 768;
	var $nav;

	function prepareDom(){
		$nav = $('.nav-global');
	}

	// このJSのinit
	function init(){
		prepareDom();
		onResize();
		menuTrigger();
	}

	// 関数 ------------------------------------
	function onResize(){
		$(window).on('load resize', function(){
			var winWidth = $(window).width();
			if(winWidth > point_sp && $nav.is(':hidden')){
				$nav.removeAttr('style');
			}
		});
	}

	function menuTrigger(){
		$('.menu-trigger').on('click', function(){
			$(this).toggleClass('is-active');
			$nav.slideToggle();
			return false;
		});
	}
	// -----------------------------------------

	return {
		init : init
	};

})();

// このタイミングで実行
$(function(){
	hogehoge.init();
});
