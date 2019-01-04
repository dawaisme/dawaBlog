//JavaScript代码区域
layui.use(['layer', 'form', 'laydate', 'table'], function () {
    var layer = layui.layer,
        $ = layui.$,
        form = layui.form,
        laydate = layui.laydate,
        table = layui.table;
    //监听提交(查询)
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
        url: IP + '/admin/admin.do?cmd=getALlArticle',
        height: 'full-180',
        even: true,
        page: {
            layout: ['limit', 'count', 'prev', 'page', 'next', 'skip'] //自定义分页布局
            , groups: 5 //只显示 5 个连续页码
            , limits: [5, 10, 15]
            , first: true //显示首页
            , last: true //显示尾页
        },
        cols: [
            [{
                type: 'checkbox'
            }, {
                field: 'a_id',
                title: 'ID',
                hide: true
            }, {
                field: 'a_title',
                title: '标题',
                width: 200,
                sort: true
            }, {
                field: 'a_brief',
                title: '简介',
                width: 240,
                sort: true
            }, {
                field: 'a_pviews',
                title: '阅读量',
                align: 'center',
                width: 100,
                sort: true
            }, {
                field: 'is_top',
                title: '是否顶置',
                align: 'center',
                width: 130,
                sort: true
            }, {
                field: 'is_view',
                title: '是否可见',
                align: 'center',
                width: 130,
                sort: true
            }, {
                field: 'a_image',
                title: '文章插图路径',
                align: 'center',
                sort: true
            }, {
                field: 'create_time',
                title: '创建时间',
                align: 'center',
                width: 220,
                sort: true
            }, {
                field: 'update_time',
                title: '修改时间',
                align: 'center',
                width: 220,
                sort: true
            }, {
                fixed: 'right',
                title: '操作',
                align: 'center',
                width: 150,
                toolbar: '#barDemo'
            }]
        ],
        response: {
            statusName: 'code',
            statusCode: 200,
            msgName: 'message',
            countName: 'count',
            dataName: 'data'
        },
        done: function (res, curr, count) {
            layer.closeAll('loading');
        },
        parseData: function (res) {
            return parseResultData(res);
        }
    });

    //渲染表单. 置顶/可见
    function parseResultData(res) {
        var data = res.data;
        var paseData = [];
        $.each(data, function (idx, obj) {
            var bid = obj.id;

            // 是否顶置 1:顶置，0:默认不顶置
            if (obj.is_top === "置顶") {
                obj.is_top = "<input id='" + bid + "' lay-filter='istop' type='checkbox' name='istop' lay-skin='switch' lay-text='是|否' checked disabled>";
            } else if (obj.is_top === "不置顶") {
                obj.is_top = "<input id='" + bid + "' lay-filter='istop' type='checkbox' name='istop' lay-skin='switch' lay-text='是|否' disabled>";
            }
            // 是否可见 1:显示，0:默认不显示，需要手动设置显示isvisible
            if (obj.is_view === "可见") {
                obj.is_view = "<input id='" + bid + "' lay-filter='isvisible' type='checkbox' name='istop' lay-skin='switch' lay-text='是|否' checked disabled>";
            } else if (obj.is_view === "不可见") {
                obj.is_view = "<input id='" + bid + "' lay-filter='isvisible' type='checkbox' name='istop' lay-skin='switch' lay-text='是|否' disabled>";
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
    table.on('tool(test)', function (obj) {
        var data = obj.data;

        var layEvent = obj.event;
        if (layEvent === 'del') {
            var ts = data.a_title;
            var bids = [];
            bids.push(data.a_id);
            deleteByUids(ts, bids);
        } else if (layEvent === 'edit') {
            window.location = "article_update.jsp?a_id=" + data.a_id;
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
        //批量删除按钮 (大娃加,不要删)
        $('#deleteall').click(function () {
            var checkStatus = table.checkStatus('idTest');
            if (checkStatus.data.length > 0) {
                var list = checkStatus.data;
                var bids = [];
                var ts = "";
                $.each(list, function (idx, obj) {
                    bids.push(obj.a_id);
                    ts += " " + obj.a_title
                });
                deleteByUids(ts, bids);
            }
        })
    });

    //时候顶置（switch）
    form.on('switch(istop)', function (data) {
        var obj = data.elem;
        var id = obj.getAttribute("id");
        var data = JSON.stringify({
            id: id,
            istop: obj.checked ? '1' : '0'
        });
        // obj.setAttribute('disabled', 'disabled');
        form.render();
        updateByCheckBox(obj, data)
    });
    //是否可见（switch）
    form.on('switch(isvisible)', function (data) {
        var obj = data.elem;
        var id = obj.getAttribute("id");
        var data = JSON.stringify({
            id: id,
            isvisible: obj.checked ? '1' : '0'
        });
        // obj.setAttribute('disabled', 'disabled');
        form.render();
        updateByCheckBox(obj, data)
    });

    //修改
    function updateByCheckBox(obj, data) {
        $.ajax({
            url: IP + '/api/blog-admin/article/switch',
            type: "PUT",
            data: data,
            success: function (result, status, xhr) {
                layer.closeAll('loading');
                layer.msg(result.message, {
                    icon: 1,
                    time: 1300
                }, function () {
                    obj.removeAttribute('disabled', 'disabled');
                    form.render();
                });
            }
        });
    }

    //单、批量删除
    function deleteByUids(ts, bids) {
        console.log(ts);
        console.log(JSON.stringify(bids));
        layer.confirm('真的删除' + ts + "吗？", {
            icon: 3
        }, function (index) {
            layer.close(index);
            $.ajax({
                url: IP + '/admin/admin.do?cmd=deleteArticle&json=' + bids,
                dataType: 'text',
                success: function (result) {
                    if ("删除成功" === result) {
                        layer.msg(result, {
                            icon: 1,
                            time: 2000
                        });
                    } else {
                        layer.closeAll('loading');
                        layer.msg(result, {
                            icon: 2,
                            time: 2000
                        });
                    }
                    table.reload('idTest', {});//删除完成 刷新
                }
            });
        });
    }
});