layui.config({
	base: '../lay/system/' //假设这是你存放拓展模块的根目录
}).extend({}).use(['layer', 'form', 'element'], function() {
	var layer = layui.layer,
		element = layui.element,
		form = layui.form,
		$ = layui.$;
	form.render();

	//提交
	form.on('submit(LAY-user-login-submit)', function(data) {
		if($('.layui-form input[name="password"]').val() != $('.layui-form input[name="repassword"]').val()) {
			layer.msg("两次密码不一致");
			return false;
		}
		var user_data = JSON.stringify(data.field);
		$.ajax({
			url: "http://127.0.0.1:8020",
			data: user_data,
			success: function(result, status, xhr) {
				layer.closeAll('loading');
				layer.msg(result.data.msg, {
					icon: 2,
					time: 1300
				});
			}
		});
		return false;
	});
	form.verify({
		password: [
			/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'
		]
	});
	//实际使用时记得删除该代码
	layer.msg('为了方便演示，用户名密码可随意输入', {
		offset: '15px',
		icon: 1
	});
	$(function() {

	})
});