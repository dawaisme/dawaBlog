layui.config({
    base: '../lay/system/' //假设这是你存放拓展模块的根目录
}).extend({}).use(['layer', 'form', 'element'], function () {
    var layer = layui.layer,
        element = layui.element,
        form = layui.form,
        $ = layui.$;
    //提交
    form.on('submit(login)', function (data) {
        location.href = "/front/index.jsp";
        return false;
    });

    $(document).ready(function () {
        //粒子背景特效
        $('body').particleground({
            dotColor: '#6abdaa',
            lineColor: '#68bd69'
        });
    });


});

