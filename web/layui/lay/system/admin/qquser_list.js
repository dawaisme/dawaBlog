//JavaScript代码区域
layui.use(['layer', 'form', 'table'], function() {
	var layer = layui.layer,
		$ = layui.$,
		form = layui.form,
		table = layui.table;
	//监听提交
	form.on('submit(formDemo)', function(data) {
		table.reload('idTest', {
			where: data.field
		});
		return false;
	});
	//数据表格实例
	table.render({
		id: 'idTest',
		elem: '#demo',
		url: IP + '/api/blog-admin/qqUser',
		height: 'full-180',
		method: 'get',
		page: true,
		even: true,
		size: 'lg',
		cols: [
			[{
				type: 'checkbox'
			}, {
				field: 'openid',
				title: 'openid',
				hide: true
			}, {
				field: 'figureurlQq1',
				title: '头像',
				width: 100
			}, {
				field: 'nickname',
				title: '昵称'
			}, {
				field: 'area',
				title: '地区'
			}, {
				field: 'gender',
				title: '性别',
				width: 100
			}, {
				field: 'status',
				title: '状态',
				width: 100
			}, {
				field: 'updateTime',
				title: '最近登录时间'
			}, {
				fixed: 'right',
				title: '操作',
				align: 'center',
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
			var qid = obj.openid;
			obj.figureurlQq1 = "<img src='" + obj.figureurlQq1 + "' class='layui-circle' />";
			//男女
			if(obj.gender == "男") {
				obj.gender = '<i class="layui-icon layui-icon-male" style="color:#1E9FFF"></i>';
			} else if(obj.gender == "女") {
				obj.gender = '<i class="layui-icon layui-icon-female" style="color:#FF5722"></i>';
			}
			//0:禁用，1:正常
			if(obj.status == 1) {
				obj.status = "<input openid='" + qid + "' lay-filter='status' type='checkbox' name='status' lay-skin='switch' lay-text='正常|禁用' checked>";
			} else if(obj.status == 0) {
				obj.status = "<input openid='" + qid + "' lay-filter='status' type='checkbox' name='status' lay-skin='switch' lay-text='正常|禁用'>";
			}
			paseData.push(obj);
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
			var ts = data.nickname;
			var uids = [];
			uids.push(data.openid)
			deleteByUids(ts, uids);
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
	//更改状态（switch）
	form.on('switch(status)', function(data) {
		var obj = data.elem;
		var openid = obj.getAttribute("openid");
		var data = JSON.stringify({
			openid: openid,
			//0:禁用，1:正常
			status: obj.checked ? '1' : '0'
		})
		obj.setAttribute('disabled', 'disabled');
		form.render();
		updateByCheckBox(obj, data)
	});
	//修改
	function updateByCheckBox(obj, data) {
		$.ajax({
			url: IP + '/api/blog-admin/qqUser',
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
	$(function() {
		//批量删除按钮
		$('#deleteall').click(function() {
			var checkStatus = table.checkStatus('idTest');
			if(checkStatus.data.length > 0) {
				var list = checkStatus.data;
				var uids = [];
				var ts = "";
				$.each(list, function(idx, obj) {
					uids.push(obj.openid)
					ts += " " + obj.nickname
				});
				deleteByUids(ts, uids);
			}
		})
	})
	//单、批量删除
	function deleteByUids(ts, uids) {
		layer.confirm('真的删除' + ts + "吗？", {
			icon: 3
		}, function(index) {
			layer.close(index);
			$.ajax({
				url: IP + '/api/blog-admin/qqUser',
				type: "DELETE",
				data: JSON.stringify(uids),
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
	//更新表格字典信息
	function refreshTableDict() {
		var table_datas = $('#demo').siblings('.layui-form').children('.layui-table-box')
			.children('.layui-table-body').children('.layui-table').children('tbody').children('tr');
		var sexs = getDictionary("sex");
		var userStatus = getDictionary("userStatus");
		$.each(table_datas, function(idx, obj) {
			//性别
			var sex = $(this).children("td[data-field='sex']").children('div');
			for(var i = 0; i < sexs.length; i++) {
				if(sex.html() == sexs[i].k) {
					sex.html(sexs[i].v);
					break;
				}
			}
			//状态
			var status = $(this).children("td[data-field='status']").children('div');
			for(var i = 0; i < userStatus.length; i++) {
				if(status.html() == userStatus[i].k) {
					status.html(userStatus[i].v);
					break;
				}
			}
		});
	}
	//查询信息
	function ViewUserDetail(uid) {
		layer.open({
			type: 2,
			skin: 'layui-layer-molv',
			area: ['600px', '340px'],
			maxmin: true,
			content: 'admin_query.jsp?uid=' + uid
		});
	}
});