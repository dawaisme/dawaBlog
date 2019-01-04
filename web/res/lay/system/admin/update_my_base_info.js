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
	//表单监听提交
	form.on('submit(formDemo)', function(data) {

		return false;
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