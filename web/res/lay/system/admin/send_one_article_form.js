var E = window.wangEditor
var editor = new E('#editor')
editor.customConfig.uploadFileName = 'file';
editor.customConfig.uploadImgServer = '/res/images/upload/article';
editor.customConfig.uploadImgMaxLength = 1;
editor.customConfig.uploadImgHeaders = {
    'Authorization': localStorage.getItem("access_token") == null ? "" : "Bearer " + localStorage.getItem("access_token")
};
editor.customConfig.emotions = [{
    title: '我的',
    type: 'image',
    content: [{
        "alt": "微笑",
        "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/5c/huanglianwx_thumb.gif"
    }, {
        "alt": "嘻嘻",
        "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/0b/tootha_thumb.gif"
    }, {"alt": "哈哈", "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/6a/laugh.gif"}, {
        "alt": "可爱",
        "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/14/tza_thumb.gif"
    }, {"alt": "可怜", "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/af/kl_thumb.gif"}, {
        "alt": "挖鼻",
        "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/0b/wabi_thumb.gif"
    }, {"alt": "吃惊", "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/f4/cj_thumb.gif"}, {
        "alt": "害羞",
        "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/6e/shamea_thumb.gif"
    }, {"alt": "挤眼", "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/c3/zy_thumb.gif"}, {
        "alt": "闭嘴",
        "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/29/bz_thumb.gif"
    }, {"alt": "鄙视", "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/71/bs2_thumb.gif"}, {
        "alt": "爱你",
        "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/6d/lovea_thumb.gif"
    }, {"alt": "泪", "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/9d/sada_thumb.gif"}, {
        "alt": "偷笑",
        "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/19/heia_thumb.gif"
    }, {"alt": "亲亲", "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/8f/qq_thumb.gif"}, {
        "alt": "生病",
        "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/b6/sb_thumb.gif"
    }, {"alt": "太开心", "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/58/mb_thumb.gif"}, {
        "alt": "白眼",
        "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/d9/landeln_thumb.gif"
    }, {
        "alt": "右哼哼",
        "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/98/yhh_thumb.gif"
    }, {"alt": "左哼哼", "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/6d/zhh_thumb.gif"}, {
        "alt": "嘘",
        "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/a6/x_thumb.gif"
    }, {"alt": "衰", "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/af/cry.gif"}, {
        "alt": "委屈",
        "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/73/wq_thumb.gif"
    }, {"alt": "吐", "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/9e/t_thumb.gif"}, {
        "alt": "哈欠",
        "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/cc/haqianv2_thumb.gif"
    }, {"alt": "抱抱", "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/27/bba_thumb.gif"}, {
        "alt": "怒",
        "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/7c/angrya_thumb.gif"
    }, {"alt": "疑问", "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/5c/yw_thumb.gif"}, {
        "alt": "馋嘴",
        "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/a5/cza_thumb.gif"
    }, {"alt": "拜拜", "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/70/88_thumb.gif"}, {
        "alt": "思考",
        "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/e9/sk_thumb.gif"
    }, {
        "alt": "汗",
        "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/24/sweata_thumb.gif"
    }, {"alt": "困", "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/40/kunv2_thumb.gif"}, {
        "alt": "睡",
        "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/96/huangliansj_thumb.gif"
    }, {
        "alt": "钱",
        "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/90/money_thumb.gif"
    }, {"alt": "失望", "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/0c/sw_thumb.gif"}, {
        "alt": "酷",
        "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/40/cool_thumb.gif"
    }, {
        "alt": "色",
        "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/20/huanglianse_thumb.gif"
    }, {
        "alt": "哼",
        "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/49/hatea_thumb.gif"
    }, {"alt": "鼓掌", "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/36/gza_thumb.gif"}, {
        "alt": "晕",
        "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/d9/dizzya_thumb.gif"
    }, {"alt": "悲伤", "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/1a/bs_thumb.gif"}, {
        "alt": "抓狂",
        "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/62/crazya_thumb.gif"
    }, {"alt": "黑线", "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/91/h_thumb.gif"}, {
        "alt": "阴险",
        "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/6d/yx_thumb.gif"
    }, {
        "alt": "怒骂",
        "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/60/numav2_thumb.gif"
    }, {
        "alt": "互粉",
        "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/89/hufen_thumb.gif"
    }, {
        "alt": "心",
        "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/40/hearta_thumb.gif"
    }, {"alt": "伤心", "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/ea/unheart.gif"}, {
        "alt": "猪头",
        "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/58/pig.gif"
    }, {
        "alt": "熊猫",
        "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/6e/panda_thumb.gif"
    }, {
        "alt": "兔子",
        "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/81/rabbit_thumb.gif"
    }, {"alt": "ok", "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/d6/ok_thumb.gif"}, {
        "alt": "耶",
        "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/d9/ye_thumb.gif"
    }, {
        "alt": "good",
        "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/d8/good_thumb.gif"
    }, {"alt": "NO", "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/ae/buyao_org.gif"}, {
        "alt": "赞",
        "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/d0/z2_thumb.gif"
    }, {"alt": "来", "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/40/come_thumb.gif"}, {
        "alt": "弱",
        "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/d8/sad_thumb.gif"
    }, {
        "alt": "草泥马",
        "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/7a/shenshou_thumb.gif"
    }, {
        "alt": "神马",
        "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/60/horse2_thumb.gif"
    }, {"alt": "囧", "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/15/j_thumb.gif"}, {
        "alt": "浮云",
        "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/bc/fuyun_thumb.gif"
    }, {
        "alt": "给力",
        "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/1e/geiliv2_thumb.gif"
    }, {"alt": "围观", "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/f2/wg_thumb.gif"}, {
        "alt": "威武",
        "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/70/vw_thumb.gif"
    }, {
        "alt": "奥特曼",
        "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/bc/otm_thumb.gif"
    }, {"alt": "礼物", "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/c4/liwu_thumb.gif"}, {
        "alt": "钟",
        "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/d3/clock_thumb.gif"
    }, {
        "alt": "话筒",
        "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/9f/huatongv2_thumb.gif"
    }, {
        "alt": "蜡烛",
        "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/d9/lazhuv2_thumb.gif"
    }, {"alt": "蛋糕", "src": "https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/3a/cakev2_thumb.gif"}]
}];
editor.customConfig.colors = [
    'rgba(0,0,0,0)',
    '#000000',
    '#eeece0',
    '#58ee49',
    '#ee0823',
    '#17eec8',
    '#ff00c6',
    '#1c487f',
    '#e1f800',
    '#4d80bf',
    '#c24f4a',
    '#8baa4a',
    '#7b5ba1',
    '#46acc8',
    '#f9963b',
    '#0019FF'
];

editor.create();
layui.use(['layer', 'element', 'form', 'upload'], function () {
    var layer = layui.layer,
        $ = layui.$,
        form = layui.form,
        element = layui.element,
        upload = layui.upload;
    initData(); //调用初始化标签,分类 的方法(大娃加,不要删)

    //监听提交 (确认发布的按钮)
    form.on('submit(formDemo)', function (data) {  //确认发布 按钮的监听事件..  表单提交监听
        var article_data = data.field;  //表单元素.
        var html = editor.txt.html();
        article_data.content = filterXSS(html);// 此处进行 xss 攻击过滤
        // article_data.content = html;   //富文本框读值.内容 读取 html
        var labelIds = [];  // 选中的标签数组
        var classifyIds = [];  // 选中的分类数组

        $.each($('#lables').children('input:checked'), function (idx, obj) {  //标签数组赋值
            labelIds.push($(this).val());
        });
        $.each($('#classifys').children('input:checked'), function (idx, obj) {  //分类数组赋值
            classifyIds.push($(this).val());
        });
        article_data.labelIds = labelIds;
        article_data.classifyIds = classifyIds;
        if (article_data.is_top) {

            document.getElementById("istop").value = "置顶";
        } else {
            document.getElementById("istop").value = "不置顶";
        }
        if (article_data.is_view) {
            document.getElementById("isview").value = "可见";
        } else {
            document.getElementById("isview").value = "不可见";
        }
        // article_data = JSON.stringify(article_data);
        // submit(article_data);
        document.getElementById("content").value = html; //设置内容的值
        //设置标签的值
        document.getElementById("labelIds").value = labelIds;
        document.getElementById("classifyIds").value = classifyIds;
        this.form.submit();
        return false;
    });
    //{"title":"123","summary":"123","summaryimg":"/res/images/my/5.jpg","file":"","is_view":"可见","content":"<p>123<br></p>","labelIds":["4"],"classifyIds":["5"],"is_top":"不置顶"}  参数类型


    //执行实例 图片上传
    var uploadInst = upload.render({
        elem: '#updateS',
        url: '/admin/admin.do?cmd=uploadImg',  //servlet 上传图片.
        size: 5000,
        before: function (obj) {
            //预读本地文件示例，不支持ie8
            obj.preview(function (index, file, result) {
                $('.layui-upload-img').attr('src', result); //图片链接（base64）
            });
        },
        done: function (res) {
            //上传完毕回调
            $('.layui-upload-img').attr('src', res.path);
            $('#layui-upload-img').val(res.path);
            layer.closeAll('loading');
        },
        error: function () {
            //请求异常回调
            layer.closeAll('loading');
        }
    });


    //ajax上传 文章  method="post" action="${pageContext.request.contextPath}/admin/admin.do?cmd=addArticle"
    /*function submit(article_data) {
        console.log(article_data);
        $.post(IP + '/admin/admin.do?cmd=addArticle',article_data,function(res){
            alert("成功");
        },'json');
        return false;

        /!*$.ajax({
            url: IP + '/admin/admin.do?cmd=addArticle',  //?cmd=addArticle
            // processData:false,
            type:'post',
            data:article_data,
            success: function (result, status, xhr) {
                layer.closeAll('loading');
                layer.msg(result.message, {
                    icon: 1,
                    time: 1300
                }, function () {
                    $('#article_list', top.document).trigger('click');
                    window.location.reload()
                });
            }
        });*!/

       //get方法

    }*/

    //初始化数据. 获取到标签.和分类  (大娃加,不要删)
    function initData() {
        showLabelClassify("lables", "classifys");
        form.render();
    }
});