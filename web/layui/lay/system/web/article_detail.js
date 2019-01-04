layui.config({
	base: '../lay/system/'
}).use(['layer', 'element', 'edit', 'flow'], function() {
	var element = layui.element,
		layer = layui.layer,
		$ = layui.$,
		edit = layui.edit,
		flow = layui.flow;
	//建立编辑器
	edit.layEditor({
		elem: '.article_editor'
	});
	$(function() {
		var toId;
		var parentId;
		$('#article_editor').val("")
		//提交回复
		$('.layui-submit').click(function() {
			//token，cookie验证登录
			if(!checkLogin()){
				layer.msg("请先登录", {
					icon: 5,
					time: 2000
				});
				return;
			}
			var data = {};
			data.articleId = $.trim($('#article_id').attr('article_id'));
			data.parentId = $.trim(parentId);
			data.toId = $.trim(toId);
			var content = $.trim($('.article_editor').val());
			if(content.length < 3) {
				layer.msg('回复不能小于3个非空格字符', {
					icon: 2,
					time: 2000
				});
				return;
			}
			//内容转义(后期由后台转义)
			data.content = edit.content(content);
			//按钮禁用
			$(".layui-submit").attr('disabled', true);
			setTimeout(function() {
				$(".layui-submit").attr('disabled', false);
			}, 10000);
			$.ajax({
				url: IP+"/api/blog-web/article_comment",
				type:'POST',
				data: JSON.stringify(data),
				success: function(result, status, xhr) {
					layer.closeAll('loading');
					$('#article_editor').val("")
					layer.msg("评论成功", {
						icon: 1,
						time: 1300
					},function(){
						window.location.reload()
					});
				}
			});
		})
		//加载更多
		flow.load({
			elem: '#comment_list',
			isAuto: false,
			done: function(page, next) {
				var lis = [];
				$.get('/api/blog-web/article/comment/'+$.trim($('#article_id').attr('article_id'))+'?page=' + page, function(res) {
				//$.get('http://www.bblog.vip/json/comment.json?page=' + page, function(res) {
					layer.closeAll('loading');
					var html = pHtml(res.data,false)
					lis.push(html);
					next(lis.join(''), page < res.pages);
				});
			}
		});
		//递归评论列表
		function pHtml(list,isChild){
			var html="";
			layui.each(list, function(idx, obj) {
				var parent=obj.parent;
				var childs=obj.child;
				//父类
				var clsss=""
				if(isChild){
					clsss="class='childs'"
				}
				var c=": ";
				if(parent.toName){
					c=" <a style='color:#999'>回复</a><a class='user_nickname'> "+parent.toName+"</a>:";
				}
				html+="<li "+clsss+">" +
					"<a class='user_header_img'><img alt='"+parent.fromName+"' title='"+parent.fromName+"' src='"+parent.fromHeadImg+"'/></a>" +
					"<div class='pad-btm'>" +
						"<p class='user_nickname' title='"+parent.fromName+"' uid='"+parent.fromId+"'>"+parent.fromName+""+c+"</p>" +
						"<p class='min-font' uid='001'>来自"+parent.area+"客户端-"+diaplayTime(parent.createTime)+"</p>" +
					"</div>" +
					"<div class='comment_content'>" +
						parent.content +
					"</div>" +
					"<div class='info'>" +
						"<span>"+parent.createTime+"</span>" +
						"<a class='reply' parentId='"+parent.commentId+"'>回复</a>" +
					"</div>" +
					"<div class='childs'>"+
					pHtml(childs,true)+
					"</div>" +
				"</li>";
			});
			return html;
		}
		//回复
		$('#comment_list').on('click', 'li .info .reply', function() {
			parentId=$.trim($(this).attr('parentId'));
			var toName = $(this).parent('.info').siblings('.pad-btm').children('.user_nickname');
			var nick_name = toName.attr('title');
			var text = '@' + nick_name + " ";
			toId=toName.attr('uid')
			$('#article_editor').val(text)
			location.hash="nextinfo"
			$('#article_editor')[0].focus()
		})

	})
});