layui.use(['layer', 'element'], function() {
	var element = layui.element,
		layer = layui.layer,
		$ = layui.$;
	$(function() {
		init();
		//open-all close-all
		var open=$('.content .layui-collapse .layui-colla-title');
		$('#open-all').click(function(){
			if($(this).hasClass('yes')){
				//open all
				$.each(open, function(idx,obj) {
					if($(obj).next().hasClass('layui-show')){
						$(obj).trigger('click')
					}
				});
				$(this).removeClass('yes')
				$(this).html("展开所有月份")
			}else{
				//close all
				$.each(open, function(idx,obj) {
					if(!$(obj).next().hasClass('layui-show')){
						$(obj).trigger('click')
					}
				});
				$(this).addClass('yes')
				$(this).html("收缩所有月份")
			}
		})
		
		function init(){
			$('#article_nums').html($('.layui-collapse ul').children('li').length)
		}
	})
});