layui.config({
	base: '../lay/system/' //假设这是你存放拓展模块的根目录
}).extend({}).use(['layer', 'form', 'element'], function() {
	var layer = layui.layer,
		element = layui.element,
		form = layui.form,
		$ = layui.$;
	//提交
	form.on('submit(login)', function(data) {
		var user_data = JSON.stringify(data.field);
		$.ajax({
			url: "http://127.0.0.1/api/admin/login",
			contentType: "application/x-www-form-urlencoded",
			headers: {
				"token": localStorage.getItem("token")
			},
			data: $('#login').serialize(),
			success: function(result, status, xhr) {
				localStorage.setItem("token", result.data.token);
				layer.closeAll('loading');
				layer.msg(result.msg, {
					icon: 1,
					time: 1300
				});
			}
		});
		return false;
	});
	//qq登录
	$('.qq-login').click(function(){
		
	})
});