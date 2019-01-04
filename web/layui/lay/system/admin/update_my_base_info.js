//JavaScript代码区域
layui.use(['layer', 'form', 'upload', 'laydate'], function() {
	var layer = layui.layer,
		$ = layui.$,
		form = layui.form,
		upload = layui.upload,
		laydate = layui.laydate;
	//执行一个laydate实例
	laydate.render({
		elem: '#birthday',
		max: 0,
		format: 'yyyy-MM-dd HH:mm:ss'
	});
	initData();
	//表单监听提交
	form.on('submit(formDemo)', function(data) {
		$("button[lay-filter='formDemo']").attr('disabled', true);
		setTimeout(function() {
			$("button[lay-filter='formDemo']").attr('disabled', false);
		}, 10000);
		var user_data = JSON.stringify(data.field);
		$.ajax({
			url: IP + '/api/blog-admin/sysUser/current',
			type: 'PUT',
			data: user_data,
			async: false,
			success: function(result, status, xhr) {
				refresh_token();
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

	//初始化页面数据
	function initData() {
		showDictRadio("sex", "sex");
		form.render();
		//用户数据
		showUser();
	}
	//回显用户信息
	function showUser() {
		$.ajax({
			url: IP + '/api/blog-oauth2/get_user_info',
			type: 'GET',
			success: function(result, status, xhr) {
				layer.closeAll('loading');
				form.val("my_base_info", result)
				$('#headimg').attr('src', result.headimgurl)
				$("input[name='sex'][value='" + result.sex + "']").attr("checked", "checked")
				form.render();
			}
		});
	}

	function showDictRadio(id, type) {
		var html_d = "";
		$.each(getDictionary(type), function(idx, obj) {
			html_d += "<input type='radio' name='sex' value='" + obj.k + "' title='" + obj.v + "'>";
		});
		$('#' + id).html(html_d);
	}
	//上传头像实例
	var uploadInst = upload.render({
		elem: '#uploadheadimg',
		size: 5120,
		number: 1,
		url: '/upload/',
		before: function(obj) {
			layer.load();
		},
		done: function(res) {
			$('#headimgurl').val(res.data.src)
			$('#headimg').attr('src', res.data.src);
			layer.closeAll('loading');
		},
		error: function(index, upload) {
			layer.msg('上传异常', {
				icon: 2,
				time: 1300
			}, function() {
				layer.closeAll('loading');
				layer.msg('重新上传？', {
					time: 20000, //20s后自动关闭
					btn: ['是', '否'],
					btn1: function() {
						upload()
					}
				});
			});
		}
	});
	form.verify({
		username: function(value, item) { //value：表单的值、item：表单的DOM对象
			if(!new RegExp("^[a-zA-Z0-9_\u4e00-\u9fa5\\s·]+$").test(value)) {
				return '昵称不能有特殊字符';
			}
			if(!(/^[\S]{2,10}$/.test(value))) {
				return '昵称必须2到10位，且不能出现空格';
			}
			if(/(^\_)|(\__)|(\_+$)/.test(value)) {
				return '昵称首尾不能出现下划线\'_\'';
			}
			if(/^\d+$/.test(value)) {
				return '昵称不能全为数字';
			}
		},
		myphone: function(value, item) {
			if(value) {
				if(!(/^[1][3,4,5,7,8][0-9]{9}$/.test(value))) {
					return '请填写正确的电话';
				}
			}
		},
		myemail: function(value, item) {
			if(value) {
				if(!(/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value))) {
					return "请填写正确的邮箱"
				}
			}
		}
	});
});