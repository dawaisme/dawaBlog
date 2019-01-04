layui.use(['layer', 'element', 'form', 'upload'], function() {
	var layer = layui.layer,
		$ = layui.$,
		form = layui.form,
		element = layui.element,
		upload = layui.upload;
	var editor=CKEDITOR.instances.editor1;
	initData()
	//监听提交
	form.on('submit(formDemo)', function(data) {
		var article_data = data.field;
		//内容 读取 html
		var html = editor.getData();
		// 此处进行 xss 攻击过滤
		//article_data.content = filterXSS(html);
		article_data.content = html;
		var labelIds = [];
		var classifyIds = [];
		$.each($('#lables').children('input:checked'), function(idx, obj) {
			labelIds.push($(this).val())
		});
		$.each($('#classifys').children('input:checked'), function(idx, obj) {
			classifyIds.push($(this).val())
		});
		article_data.labelIds = labelIds;
		article_data.classifyIds = classifyIds;
		if(article_data.istop) {
			article_data.istop = "1"
		} else {
			article_data.istop = "0"
		}
		if(article_data.isvisible) {
			article_data.isvisible = "1"
		} else {
			article_data.isvisible = "0"
		}
		article_data = JSON.stringify(article_data)
		submit(article_data)
		return false;
	});
	//执行实例
	var uploadInst = upload.render({
		elem: '#updateS',
		url: '/api/blog-admin/article/upImg',
		size: 5000,
		done: function(res) {
			//上传完毕回调
			$('.layui-upload-img').attr('src', res.data[0])
			$('#layui-upload-img').val(res.data[0])
			layer.closeAll('loading');
		},
		error: function() {
			//请求异常回调

			layer.closeAll('loading');
		}
	});

	function submit(article_data) {
		$.ajax({
			url: IP + '/api/blog-admin/article',
			type: 'PUT',
			data: article_data,
			success: function(result, status, xhr) {
				layer.closeAll('loading');
				layer.msg(result.message, {
					icon: 1,
					time: 1300
				}, function() {
					window.history.back(-1);
				});
			}
		});
	}

	function initData() {
		var id = getUrlParam("id")
		showLabelClassify("lables", "classifys");
		form.render('checkbox');
		showData(id)
	}

	function showData(id) {
		$.ajax({
			url: IP + '/api/blog-admin/article/' + id,
			type: 'GET',
			success: function(result, status, xhr) {
				layer.closeAll('loading');
				$("input[name='id']").val(result.data.id)
				$("input[name='title']").val(result.data.title)
				$("textarea[name='summary']").val(result.data.summary)
				$('.layui-upload-img').attr('src', result.data.summaryimg)
				$('#layui-upload-img').val(result.data.summaryimg)
				$.each(result.data.lables, function(idx, obj) {
					$("#lables input[type='checkbox'][value='" + obj + "']").attr("checked", "checked")
				});
				$.each(result.data.classifys, function(idx, obj) {
					$("#classifys input[type='checkbox'][value='" + obj + "']").attr("checked", "checked")
				});
				if(result.data.istop == 1) {
					$("input[name='istop']").attr("checked", "checked")
				}
				if(result.data.isvisible == 1) {
					$("input[name='isvisible']").attr("checked", "checked")
				}
				form.render('checkbox');
				editor.setData(result.data.content);
			}
		});
	}
});