$(function(){
	let objCenter = $('.pages').eq(1);
	
	$('.pages').addClass('pages-original');
	objCenter.addClass('pages-trans');
	$('.header-li').each(function(index){
		$(this).attr('index', index);
	})
	
	$('.header-li').click(function(){
			objCenter.removeClass('pages-trans');
		 $('.pages').eq($(this).attr('index')).addClass('pages-trans');
	
		objCenter =  $('.pages').eq($(this).attr('index'));
	})
})
