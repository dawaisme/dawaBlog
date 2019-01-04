//JavaScript代码区域
layui.use(['layer', 'form', 'table'], function() {
	var layer = layui.layer,
		$ = layui.$,
		form = layui.form,
		table = layui.table;
	$(function() {
		$('#adduser').on('click', function() {
			window.location = 'menu_add.html?type=add'
		})
		$('#menus tbody tr td').on('click', '.edit', function() {
			window.location = 'menu_edit.html?id=' + $(this).data('id')
		})
		$('#menus tbody tr td').on('click', '.delete', function() {
			var that=this;
			layer.confirm('真的删除吗？',{icon:3}, function(index) {
				layer.close(index);
				$.ajax({
					url: IP + '/api/blog-admin/menus/' + $(that).data('id'),
					type: 'DELETE',
					success: function(result, status, xhr) {
						layer.closeAll('loading');
						layer.msg(result.message, {
							icon: 1,
							time: 1300
						},function(){
							window.location.reload()
						});
					}
				});
			});
		})
	})
	initMenus();
	//获取菜单列表
	function initMenus() {
		var data =getMenus();
		$.each(data, function(idx, obj) {
			var type = "按钮";
			var href = obj.href;
			var ico = obj.ico;
			if(obj.type == 1) {
				type = "菜单"
			}
			if(href == null) {
				href = ""
			}
			if(ico == null) {
				ico = ""
			}
			var html = "<tr data-tt-id='" + obj.id + "' data-tt-parent-id='" + obj.parentid + "'>" +
				"<td>" + obj.name + "</td>" +
				"<td>" + ico + "</td>" +
				"<td>" + href + "</td>" +
				"<td>" + type + "</td>" +
				"<td>" + obj.permission + "</td>" +
				"<td>" + obj.sort + "</td>" +
				"<td><button class='layui-btn layui-btn-xs edit' data-id='" + obj.id + "'>编辑</button><button class='layui-btn layui-btn-xs layui-btn-danger delete' data-id='" + obj.id + "'>删除</button></td>" +
				"</tr>";
			$('#menus').children('tbody').append(html);
		});
	}
	initTree();
})

function initTree() {
	$("#menus").treetable({
		expandable: true
	});
}