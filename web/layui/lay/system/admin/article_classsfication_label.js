//JavaScript代码区域
layui.use(['layer', 'form', 'colorpicker'], function() {
	var layer = layui.layer,
		form = layui.form,
		colorpicker = layui.colorpicker,
		$ = layui.$;
	$(function() {
		initData();
		//颜色选择器
		colorpicker.render({
			elem: '#mycolorpicker',
			done: function(color) {
				$("#add_lable_classify input[name='color']").val(color)
			}
		});
		colorpicker.render({
			elem: '#mycolorpicker_1',
			done: function(color) {
				$("#upd_lable_classify input[name='color']").val(color)
			}
		});
		//编辑
		$("#lablesManager,#classifysManager").on('click','span i.layui-icon-edit',function(){
			//获取当前id，type
			var id = $(this).parent('span').data('id');
			var type = $(this).parent('span').attr('type');
			var name = $(this).parent('span').text();
			var color = $(this).parent('span').attr('color');
			form.val("upd_lable_classify", {
				"id": id,
				"name": name,
				"type": type,
				"color": color
			})
			layer.open({
				type: 1,
				area: ['500px', '300px'],
				title: ['编辑标签、分类'],
				content: $('#upd_lable_classify')
			});
		})
		
		//删除
		$("#lablesManager,#classifysManager").on('click','span i.layui-icon-close-fill',function(){
			//获取当前id，type
			var id = $(this).parent('span').data('id');
			var type = $(this).parent('span').attr('type');
			var name = $(this).parent('span').text();
			layer.confirm('真的删除' + name + "吗？", {
				icon: 3
			}, function(index) {
				layer.close(index);
				del(type,id);
			});
		})
		//添加
		$("#adduser").click(function() {
			layer.open({
				type: 1,
				area: ['500px', '300px'],
				title: ['添加标签、分类'],
				content: $('#add_lable_classify')
			});
		})
		//监听(添加)提交
		form.on('submit(addForm)', function(data) {
			var add_data = data.field;
			addUpdate(add_data)
			return false;
		});
		//监听(编辑)提交
		form.on('submit(updForm)', function(data) {
			var add_data = data.field;
			addUpdate(add_data)
			return false;
		});
		//添加、修改 ajax
		function addUpdate(user_data) {
			$.ajax({
				url: IP + '/api/blog-admin/labelClassify',
				type: 'POST',
				data: JSON.stringify(user_data),
				success: function(result, status, xhr) {
					layer.closeAll();
					initData();
					sessionStorage.removeItem("LabelClassify");
					layer.msg(result.message, {
						icon: 1,
						time: 1300
					});
				}
			});
		}
		//删除ajax
		function del(type,id) {
			$.ajax({
				url: IP + '/api/blog-admin/labelClassify/'+type+"/"+id,
				type: 'DELETE',
				success: function(result, status, xhr) {
					layer.closeAll();
					sessionStorage.removeItem("LabelClassify");
					initData();
					layer.msg(result.message, {
						icon: 1,
						time: 1300
					});
				}
			});
		}
		//初始化渲染
		function initData(){
			$("#lablesManager").html("");
			$("#classifysManager").html("");
			$.ajax({
				url: IP + '/api/blog-admin/labelClassify',
				type: 'GET',
				async: false,
				success: function(result, status, xhr) {
					layer.closeAll();
					//标签
					$.each(result.data.label, function(idx,obj) {
						var html='<span color="'+obj.color+'" data-id="'+obj.id+'" type="'+obj.type+'" class="layui-unselect" style="background:'+obj.color+'">'+obj.name+'</i><i class="layui-icon layui-icon-edit"></i><i class="layui-icon layui-icon-close-fill"></i></span>'
						$("#lablesManager").append(html)
					});
					//分类
					$.each(result.data.classify, function(idx,obj) {
						var html='<span color="'+obj.color+'" data-id="'+obj.id+'" type="'+obj.type+'" class="layui-unselect" style="background:'+obj.color+'">'+obj.name+'</i><i class="layui-icon layui-icon-edit"></i><i class="layui-icon layui-icon-close-fill"></i></span>'
						$("#classifysManager").append(html)
					});
				}
			});
		}
	})
});