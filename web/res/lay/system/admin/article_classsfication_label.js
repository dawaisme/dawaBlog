layui.use(['layer', 'form', 'colorpicker', 'jquery'], function () {

    var layer = layui.layer,
        form = layui.form,
        colorpicker = layui.colorpicker,
        $ = layui.jquery;
    $(function () {
        //JavaScript代码区域
        initData();
        //颜色选择器
        colorpicker.render({
            elem: '#mycolorpicker',
            done: function (color) {
                $("#add_lable_classify input[name='articleTypeColor']").val(color)
            }
        });
        colorpicker.render({
            elem: '#mycolorpicker_1',
            done: function (color) {
                $("#upd_lable_classify input[name='color']").val(color)
            }
        });

        //编辑
        $("#classifysManager,#lablesManager").on('click', 'span i.layui-icon-edit', function () {
            //获取当前id，type
            var id = $(this).parent('span').data('id');
            var type = $(this).parent('span').attr('type');
            var name = $(this).parent('span').text();
            var color = $(this).parent('span').attr('color');
            form.val("upd_lable_classify", {
                "id": id,
                "name": name,
                "type": type,
                "color": color
            });
            layer.open({
                type: 1,
                area: ['500px', '300px'],
                title: ['编辑标签、分类'],
                content: $('#upd_lable_classify')
            });
        });

        //删除
        $("#lablesManager,#classifysManager").on('click', 'span i.layui-icon-close-fill', function () {
            //获取当前id，type
            var id = $(this).parent('span').data('id');
            var type = $(this).parent('span').attr('type');
            var name = $(this).parent('span').text();
            layer.confirm('真的删除' + name + "吗？", {
                icon: 3
            }, function (index) {
                layer.close(index);
                del(type, id);
            });
        });
        //添加
        $("#adduser").click(function () {
            layer.open({
                type: 1,
                area: ['500px', '300px'],
                title: ['添加标签、分类'],
                content: $('#add_lable_classify')
            });
        });

        //监听(添加)提交(大娃加的,不要删.)
        form.on('submit(addForm)', function (data) {
            sessionStorage.removeItem("LabelClassify");
            $('#add_lable_classify').submit();
            /*var add_data = data.field;
            addUpdate(add_data);*/

            return false;
        });

        //监听(编辑)提交 (大娃加的,不要删.)
        form.on('submit(updForm)', function (data) {
            sessionStorage.removeItem("LabelClassify");
            $('#upd_lable_classify').submit();
            // var add_data = data.field;
            // addUpdate(add_data);
            return false;
        });

/*
        //添加、修改 ajax
        function addUpdate(user_data) {
            console.log(user_data);
            $.ajax({
                url: '/admin/admin.do?cmd=addArticleType',
                type: 'post',
                data: JSON.stringify(user_data),
                success: function(result, status, xhr) {
                    layer.closeAll();
                    sessionStorage.removeItem("LabelClassify");
                    layer.msg(result.message, {
                        icon: 1,
                        time: 1300
                    });
                },
                error:function () {
                    alert(this.data);
                }
            });
        }*/

        //删除ajax (大娃加的,不要删)
        function del(type,id) {
            $.ajax({
                url: IP + '/admin/admin.do?cmd=delArticleType&id=' + id,
                type:'get',
                dataType:'text',
                success: function (result) {
                    initData();
                    layer.closeAll();
                    if (result === "删除成功") {
                        sessionStorage.removeItem("LabelClassify"); // 清除session中的缓存
                        console.log("清除了session LabelClassify");

                        layer.msg(result, {
                            icon: 1,
                            time: 2000
                        });
                    } else {
                        layer.msg(result, {
                            icon: 2,
                            time: 2000
                        });
                    }

                }
            });
        }

        //初始化渲染 (大娃加,不要删)
        function initData() {
            $("#lablesManager").html("");
            $("#classifysManager").html("");
            $.ajax({
                url: IP + "/admin/admin.do?cmd=getAllArticleType",
                type: 'POST',
                async: false,
                success: function (result, status, xhr) {
                    layer.closeAll();
                    //标签
                    $.each(result.labels, function (idx, obj) {
                        var html = '<span color="' + obj.t_color + '" data-id="' + obj.t_id + '" type="1" class="layui-unselect" style="background:' + obj.t_color + '">' + obj.t_name + '</i><i class="layui-icon layui-icon-edit"></i><i class="layui-icon layui-icon-close-fill"></i></span>';
                        $("#lablesManager").append(html);
                    });
                    //分类
                    $.each(result.classifys, function (idx, obj) {
                        var html = '<span color="' + obj.t_color + '" data-id="' + obj.t_id + '" type="2" class="layui-unselect" style="background:' + obj.t_color + '">' + obj.t_name + '</i><i class="layui-icon layui-icon-edit"></i><i class="layui-icon layui-icon-close-fill"></i></span>';
                        $("#classifysManager").append(html);
                    });
                }
            });
        }

    });
});