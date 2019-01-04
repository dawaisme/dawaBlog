layui.use(['layer', 'element'], function() {
	var element = layui.element,
		layer = layui.layer,
		$ = layui.$
	$(function() {
		
		try{
			var classifyName=($('#classifyName').html()).trim();
			var classifyList=$('.classify .content a');
			var labels=$('.flag .content a');
			$.each(classifyList, function(idx,obj) {
				if($(this).attr('href')=="/classify/"+classifyName){
					$('#classifyName').html($(this).attr('title'))
				}
			});
			$.each(labels, function(idx,obj) {
				if($(this).attr('href')=="/label/"+classifyName){
					$('#classifyName').html($(this).attr('title'))
				}
			});
		}catch(e){
			//TODO handle the exception
		}
		
		
		//showmusic
		$('#music163').click(function() {
			if($(this).hasClass('show')) {
				$(this).css({
					left: '-320px'
				})
				$(this).removeClass('show')
			} else {
				$(this).css({
					left: '-5px'
				})
				$(this).addClass('show')
			}
		})
	})
});