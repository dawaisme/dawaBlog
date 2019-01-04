//JavaScript代码区域
layui.use(['layer', 'form', 'laydate', 'table'], function() {
	var layer = layui.layer,
		$ = layui.$,
		form = layui.form,
		laydate = layui.laydate,
		table = layui.table;
	//监听提交
	form.on('submit(formDemo)', function(data) {
		table.reload('idTest', {
			where: data.field
		});
		return false;
	});
	//执行一个laydate实例
	laydate.render({
		elem: '#start',
		max: 0
	});
	laydate.render({
		elem: '#end',
		max: 0
	});
	//数据表格实例
	table.render({
		id: 'idTest',
		elem: '#demo',
		url: IP + '/api/blog-admin/article',
		height: 'full-180',
		method: 'get',
		page: true,
		even: true,
		cols: [
			[{
				type: 'checkbox'
			}, {
				field: 'id',
				title: 'ID',
				hide: true
			}, {
				field: 'title',
				title: '标题',
				width: 240
			}, {
				field: 'status',
				title: '状态',
				width: 100
			}, {
				field: 'istop',
				title: '是否顶置',
				width: 90
			}, {
				field: 'isvisible',
				title: '是否可见',
				width: 90
			}, {
				field: 'createtime',
				title: '创建时间',
				sort: true
			}, {
				field: 'updatetime',
				title: '修改时间',
				sort: true
			}, {
				fixed: 'right',
				title: '操作',
				align: 'center',
				width: 150,
				toolbar: '#barDemo'
			}]
		],
		request: {
			pageName: 'page',
			limitName: 'pageSize'
		},
		response: {
			statusName: 'code',
			statusCode: 200,
			msgName: 'message',
			countName: 'count',
			dataName: 'data'
		},
		done: function(res, curr, count) {
			layer.closeAll('loading');
		},
		parseData: function(res) {
			return parseResultData(res);
		}
	});

	function parseResultData(res) {
		var data = res.data;
		var paseData = [];
		$.each(data, function(idx, obj) {
			var bid = obj.id;
			if(obj.status == 1) {
				obj.status = "审核通过";
			} else if(obj.status == 0) {
				obj.status = "等待审核";
			}
			// 是否顶置 1:顶置，0:默认不顶置
			if(obj.istop == 1) {
				obj.istop = "<input id='" + bid + "' lay-filter='istop' type='checkbox' name='istop' lay-skin='switch' lay-text='是|否' checked>";
			} else if(obj.istop == 0) {
				obj.istop = "<input id='" + bid + "' lay-filter='istop' type='checkbox' name='istop' lay-skin='switch' lay-text='是|否'>";
			}
			// 是否可见 1:显示，0:默认不显示，需要手动设置显示isvisible
			if(obj.isvisible == 1) {
				obj.isvisible = "<input id='" + bid + "' lay-filter='isvisible' type='checkbox' name='istop' lay-skin='switch' lay-text='是|否' checked>";
			} else if(obj.isvisible == 0) {
				obj.isvisible = "<input id='" + bid + "' lay-filter='isvisible' type='checkbox' name='istop' lay-skin='switch' lay-text='是|否'>";
			}
			paseData.push(obj)
		});
		return {
			"code": res.code,
			"message": res.message,
			"count": res.count,
			"data": paseData
		};
	}
	//数据表格监听工具条(查看、编辑、删除按钮)
	table.on('tool(test)', function(obj) {
		var data = obj.data;
		var layEvent = obj.event;
		if(layEvent === 'del') {
			var ts = data.title;
			var bids = [];
			bids.push(data.id)
			deleteByUids(ts, bids);
		} else if(layEvent === 'edit') {
			window.location = "article_update.jsp?id=" + data.id;
		}
	});
	//复选框批量操作
	table.on('checkbox(test)', function(obj) {
		var checkStatus = table.checkStatus('idTest');
		if(checkStatus.data.length > 0) {
			$('#deleteall').show()
		} else {
			$('#deleteall').hide()
		}
	});
	$(function() {
		//批量删除按钮
		$('#deleteall').click(function() {
			var checkStatus = table.checkStatus('idTest');
			if(checkStatus.data.length > 0) {
				var list = checkStatus.data;
				var bids = [];
				var ts = "";
				$.each(list, function(idx, obj) {
					bids.push(obj.id)
					ts += " " + obj.title
				});
				deleteByUids(ts, bids);
			}
		})
	})
	//时候顶置（switch）
	form.on('switch(istop)', function(data) {
		var obj = data.elem;
		var id = obj.getAttribute("id");
		var data = JSON.stringify({
			id: id,
			istop: obj.checked ? '1' : '0'
		})
		obj.setAttribute('disabled', 'disabled');
		form.render();
		updateByCheckBox(obj, data)
	});
	//是否可见（switch）
	form.on('switch(isvisible)', function(data) {
		var obj = data.elem;
		var id = obj.getAttribute("id");
		var data = JSON.stringify({
			id: id,
			isvisible: obj.checked ? '1' : '0'
		})
		obj.setAttribute('disabled', 'disabled');
		form.render();
		updateByCheckBox(obj, data)
	});
	//修改
	function updateByCheckBox(obj, data) {
		$.ajax({
			url: IP + '/api/blog-admin/article/switch',
			type: "PUT",
			data: data,
			success: function(result, status, xhr) {
				layer.closeAll('loading');
				layer.msg(result.message, {
					icon: 1,
					time: 1300
				}, function() {
					obj.removeAttribute('disabled', 'disabled');
					form.render();
				});
			}
		});
	}
	//单、批量删除
	function deleteByUids(ts, bids) {
		layer.confirm('真的删除' + ts + "吗？", {
			icon: 3
		}, function(index) {
			layer.close(index);
			$.ajax({
				url: IP + '/api/blog-admin/article',
				type: "DELETE",
				data: JSON.stringify(bids),
				success: function(result, status, xhr) {
					layer.closeAll('loading');
					layer.msg(result.message, {
						icon: 1,
						time: 1300
					}, function() {
						table.reload('idTest', {});
					});
				}
			});
		});
	}
});