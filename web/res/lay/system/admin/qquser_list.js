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
        url: IP + '/admin/admin.do?cmd=getAllUser',
        height: 'full-180',
        method: 'post',
        page: true,
        even: true,
        size: 'lg',
        cols: [
            [{
                type: 'checkbox'
            }, {
                field: 'u_id',
                title: 'openid',
                hide: true
            }, {
                field: 'u_image',
                title: '头像',
                width: 100,
                height:100
            }, {
                field: 'u_username',
                title: '用户名'
            }, {
                field: 'u_alias',
                title: '昵称'
            }, {
                field: 'u_sex',
                title: '性别',
                width: 100
            }, {
                field: 'u_status',
                title: '状态',
                width: 100
            }, {
                field: 'create_date',
                title: '用户创建时间'
            }, {
                field: 'u_date',
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
        var data = res;
        var paseData = [];
        $.each(data, function(idx, obj) {
            var qid = obj.u_id;
            obj.u_image = "<img src='" + obj.u_image + "' class='layui-circle' width='50' />";
            //男女
            if(obj.u_sex === "男") {
                obj.u_sex = '<i class="layui-icon layui-icon-male" style="color:#1E9FFF"></i>';
            } else if(obj.u_sex === "女") {
                obj.u_sex = '<i class="layui-icon layui-icon-female" style="color:#FF5722"></i>';
            }
            //禁用，正常
            if(obj.u_status === "正常") {
                obj.u_status = "<input u_id='" + qid + "'  lay-filter='status' type='checkbox' name='status' lay-skin='switch' lay-text='正常|禁用' checked disabled>";
            } else if(obj.u_status === "禁用") {
                obj.u_status = "<input u_id='" + qid + "' lay-filter='status' type='checkbox' name='status' lay-skin='switch' lay-text='正常|禁用' disabled>";
            }
            paseData.push(obj);
        });
        return {
            "code": 200,
            "message": "",
            "count": res.length,
            "data": paseData
        };
    }
    //数据表格监听工具条(查看、编辑、删除按钮)
    table.on('tool(test)', function(obj) {
        var data = obj.data;
        var layEvent = obj.event;
        if(layEvent === 'del') {
            var ts = data.u_username;
            var uids = [];
            uids.push(data.u_id);
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

    $(function () {
        //批量删除按钮
        $('#deleteall').click(function () {
            var checkStatus = table.checkStatus('idTest');
            if (checkStatus.data.length > 0) {
                var list = checkStatus.data;
                var uids = [];
                var ts = "";
                $.each(list, function (idx, obj) {
                    uids.push(obj.u_id);
                    ts += " " + obj.u_username
                });
                deleteByUids(ts, uids);
            }
        })
    });
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