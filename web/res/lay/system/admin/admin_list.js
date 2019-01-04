//JavaScript代码区域
layui.use(['layer', 'form', 'laydate', 'table'], function () {
    var layer = layui.layer,
        $ = layui.$,
        form = layui.form,
        laydate = layui.laydate,
        table = layui.table;
    //监听提交
    form.on('submit(formDemo)', function (data) {
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
        url: IP + '/admin/admin.do?cmd=getAllAdminUser',
        height: 'full-180',
        method: 'post',
        page: true,
        even: true,
        cols: [
            [{
                type: 'checkbox'
            }, {
                field: 'a_id',
                title: 'UID',
                hide: true
            }, {
                field: 'a_username',
                title: '用户名',
                sort: true
            }, {
                field: 'a_alias',
                title: '昵称',
                sort: true
            }, {
                field: 'a_sex',
                title: '性别',
                width: 80,
                sort: true
            }, {
                field: 'a_status',
                title: '状态',
                width: 100,
                sort: true
            }, {
                field: 'create_date',
                title: '创建时间',
                sort: true
            }, {
                field: 'update_date',
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
        /*response: {
            statusName: 'code',
            statusCode: 200,
            msgName: 'message',
            countName: 'count',
            dataName: 'data'
        },*/
        done: function (res, curr, count) {
            layer.closeAll('loading');
        },
        parseData: function (res) {
            return parseResultData(res);
        }
    });

    function parseResultData(res) {
        var data = res;
        var paseData = [];
        var sexs = getDictionary("a_sex");
        var userStatus = getDictionary("a_status");
        $.each(data, function (idx, obj) {
            console.log(obj);
            if(obj.a_sex === "男") {
                obj.a_sex = '<i class="layui-icon layui-icon-male" style="color:#1E9FFF"></i>';
            } else if(obj.a_sex === "女") {
                obj.a_sex = '<i class="layui-icon layui-icon-female" style="color:#FF5722"></i>';
            }

            paseData.push(obj);
        });
        return {
            "code": 0,
            "message": "",
            "count": res.length,
            "data": paseData
        };
    }

    //数据表格监听工具条(查看、编辑、删除按钮)
    table.on('tool(test)', function (obj) {
        var data = obj.data;
        var layEvent = obj.event;
        if (layEvent === 'detail') {
            ViewUserDetail(data.a_id);
        } else if (layEvent === 'del') {
            var ts = data.a_username;
            var uids = [];
            uids.push(data.a_id);
            deleteByUids(ts, uids);
        } else if (layEvent === 'edit') {
            window.location = "admin_update.jsp?uid=" + data.a_id;
        }
    });

    //复选框批量操作
    table.on('checkbox(test)', function (obj) {
        var checkStatus = table.checkStatus('idTest');
        if (checkStatus.data.length > 0) {
            $('#deleteall').show()
        } else {
            $('#deleteall').hide()
        }
    });
    $(function () {
        //批量删除按钮
        $('#deleteall').click(function () {
            var checkStatus = table.checkStatus('idTest');
            if (checkStatus.data.length > 0) {
                var list = checkStatus.data;
                var uids = [];
                var ts = "";
                $.each(list, function (idx, obj) {
                    uids.push(obj.a_id);
                    ts += " " + obj.a_username
                });
                deleteByUids(ts, uids);
            }
        });
        //添加按钮事件
        $('#adduser').on('click', function () {
            window.location = 'admin_add.jsp?type=add'
        });
        //初始化搜索bar数据
        initSearchBar();
    });

    //增加
    function add() {

    }

    //单、批量删除
    function deleteByUids(ts, uids) {
        layer.confirm('真的删除' + ts + "吗？", {
            icon: 3
        }, function (index) {
            layer.close(index);
            $.ajax({
                url: IP + '/admin/admin.do?cmd=deleteBlogAdmin',
                type: "post",
                data: JSON.stringify(uids),
                success: function (result, status, xhr) {
                    layer.closeAll('loading');
                    layer.msg(result.message, {
                        icon: 1,
                        time: 1300
                    }, function () {
                        table.reload('idTest', {});
                    });
                },
                error:function () {
                    layer.msg("没有权限删除管理员账户", {
                        icon: 2,
                        time: 2300
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

    //模糊查询菜单的数据初始化
    function initSearchBar() {
        //用户状态select
        showDictSelect("a_status", "a_status", true);
        form.render('select');
    }
});