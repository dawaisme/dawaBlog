//JavaScript代码区域
layui.use(['layer', 'form'], function() {
	var layer = layui.layer,
		$ = layui.$,
		form = layui.form;
	showUser();
	//表单监听提交
	form.on('submit(formDemo)', function(data) {
		$("button[lay-filter='formDemo']").attr('disabled', true);
		setTimeout(function() {
			$("button[lay-filter='formDemo']").attr('disabled', false);
		}, 10000);
		if($('.layui-form input[name="password"]').val() != $('.layui-form input[name="repassword"]').val()) {
			layer.msg("两次密码不一致", {
				icon: 2,
				time: 2000
			});
			return false;
		}
		var user_data = JSON.stringify(data.field);
		$.ajax({
			url: IP + '/api/blog-admin/sysUser/current/pwd',
			type: 'PUT',
			data: user_data,
			success: function(result, status, xhr) {
				refresh_token()
				layer.closeAll('loading');
				layer.msg(result.message, {
					icon: 1,
					time: 1300
				}, function() {
					window.location.reload();
				});
			}
		});
		return false;
	});
	form.verify({
		password: [
			/^[\S]{5,16}$/, '密码必须5到16位，且不能出现空格'
		]
	});

	function showUser() {
		$("input[name='nickname']").val(sessionStorage.getItem("nickname"))
	}
});