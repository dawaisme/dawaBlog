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
		url: IP + '/api/blog-admin/sysUser',
		height: 'full-180',
		method: 'get',
		page: true,
		even: true,
		cols: [
			[{
				type: 'checkbox'
			}, {
				field: 'uid',
				title: 'UID',
				hide: true
			}, {
				field: 'username',
				title: '用户名'
			}, {
				field: 'nickname',
				title: '昵称'
			}, {
				field: 'sex',
				title: '性别',
				width: 80
			}, {
				field: 'status',
				title: '状态',
				width: 100
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
				width: 200,
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
		var sexs = getDictionary("sex");
		var userStatus = getDictionary("userStatus");
		$.each(data, function(idx, obj) {
			//性别
			$.each(sexs, function(idx_1,obj_sex) {
				if(obj.sex==obj_sex.k){
					obj.sex=obj_sex.v;
				}
			});
			//状态
			$.each(userStatus, function(idx_2,obj_status) {
				if(obj.status==obj_status.k){
					obj.status=obj_status.v;
				}
			});
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
		if(layEvent === 'detail') {
			ViewUserDetail(data.uid);
		} else if(layEvent === 'del') {
			var ts = data.username;
			var uids = [];
			uids.push(data.uid)
			deleteByUids(ts, uids);
		} else if(layEvent === 'edit') {
			window.location = "admin_update.jsp?uid=" + data.uid;
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
				var uids = [];
				var ts = "";
				$.each(list, function(idx, obj) {
					uids.push(obj.uid)
					ts += " " + obj.username
				});
				deleteByUids(ts, uids);
			}
		})
		//添加按钮事件
		$('#adduser').on('click', function() {
			window.location = 'admin_add.jsp?type=add'
		})
		//初始化搜索bar数据
		initSearchBar();
	})
	//增加
	function add() {

	}
	//单、批量删除
	function deleteByUids(ts, uids) {
		layer.confirm('真的删除' + ts + "吗？", {
			icon: 3
		}, function(index) {
			layer.close(index);
			$.ajax({
				url: IP + '/api/blog-admin/sysUser',
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
	//模糊查询菜单的数据初始化
	function initSearchBar() {
		//用户状态select
		showDictSelect("userStatus", "userStatus", true);
		form.render('select');
	}
});