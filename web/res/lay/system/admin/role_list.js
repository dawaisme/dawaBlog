//JavaScript代码区域
layui.use(['layer', 'form', 'table'], function() {
	var layer = layui.layer,
		$ = layui.$,
		form = layui.form,
		table = layui.table;
	//监听提交
	form.on('submit(formDemo)', function(data) {
		return false;
	});
});