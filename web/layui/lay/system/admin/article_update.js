var E = window.wangEditor
var editor = new E('#editor')
editor.customConfig.uploadFileName = 'file'
editor.customConfig.uploadImgServer = '/api/blog-admin/article/upImg'
editor.customConfig.uploadImgMaxLength = 1
editor.customConfig.uploadImgHeaders = {
	'Authorization': localStorage.getItem("access_token") == null ? "" : "Bearer " + localStorage.getItem("access_token")
}
editor.customConfig.emotions = [{
		title: '我的',
		type: 'image',
		content: [{"alt":"微笑","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/5c/huanglianwx_thumb.gif"},{"alt":"嘻嘻","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/0b/tootha_thumb.gif"},{"alt":"哈哈","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/6a/laugh.gif"},{"alt":"可爱","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/14/tza_thumb.gif"},{"alt":"可怜","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/af/kl_thumb.gif"},{"alt":"挖鼻","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/0b/wabi_thumb.gif"},{"alt":"吃惊","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/f4/cj_thumb.gif"},{"alt":"害羞","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/6e/shamea_thumb.gif"},{"alt":"挤眼","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/c3/zy_thumb.gif"},{"alt":"闭嘴","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/29/bz_thumb.gif"},{"alt":"鄙视","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/71/bs2_thumb.gif"},{"alt":"爱你","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/6d/lovea_thumb.gif"},{"alt":"泪","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/9d/sada_thumb.gif"},{"alt":"偷笑","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/19/heia_thumb.gif"},{"alt":"亲亲","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/8f/qq_thumb.gif"},{"alt":"生病","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/b6/sb_thumb.gif"},{"alt":"太开心","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/58/mb_thumb.gif"},{"alt":"白眼","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/d9/landeln_thumb.gif"},{"alt":"右哼哼","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/98/yhh_thumb.gif"},{"alt":"左哼哼","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/6d/zhh_thumb.gif"},{"alt":"嘘","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/a6/x_thumb.gif"},{"alt":"衰","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/af/cry.gif"},{"alt":"委屈","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/73/wq_thumb.gif"},{"alt":"吐","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/9e/t_thumb.gif"},{"alt":"哈欠","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/cc/haqianv2_thumb.gif"},{"alt":"抱抱","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/27/bba_thumb.gif"},{"alt":"怒","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/7c/angrya_thumb.gif"},{"alt":"疑问","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/5c/yw_thumb.gif"},{"alt":"馋嘴","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/a5/cza_thumb.gif"},{"alt":"拜拜","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/70/88_thumb.gif"},{"alt":"思考","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/e9/sk_thumb.gif"},{"alt":"汗","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/24/sweata_thumb.gif"},{"alt":"困","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/40/kunv2_thumb.gif"},{"alt":"睡","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/96/huangliansj_thumb.gif"},{"alt":"钱","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/90/money_thumb.gif"},{"alt":"失望","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/0c/sw_thumb.gif"},{"alt":"酷","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/40/cool_thumb.gif"},{"alt":"色","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/20/huanglianse_thumb.gif"},{"alt":"哼","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/49/hatea_thumb.gif"},{"alt":"鼓掌","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/36/gza_thumb.gif"},{"alt":"晕","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/d9/dizzya_thumb.gif"},{"alt":"悲伤","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/1a/bs_thumb.gif"},{"alt":"抓狂","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/62/crazya_thumb.gif"},{"alt":"黑线","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/91/h_thumb.gif"},{"alt":"阴险","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/6d/yx_thumb.gif"},{"alt":"怒骂","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/60/numav2_thumb.gif"},{"alt":"互粉","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/89/hufen_thumb.gif"},{"alt":"心","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/40/hearta_thumb.gif"},{"alt":"伤心","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/ea/unheart.gif"},{"alt":"猪头","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/58/pig.gif"},{"alt":"熊猫","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/6e/panda_thumb.gif"},{"alt":"兔子","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/81/rabbit_thumb.gif"},{"alt":"ok","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/d6/ok_thumb.gif"},{"alt":"耶","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/d9/ye_thumb.gif"},{"alt":"good","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/d8/good_thumb.gif"},{"alt":"NO","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/ae/buyao_org.gif"},{"alt":"赞","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/d0/z2_thumb.gif"},{"alt":"来","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/40/come_thumb.gif"},{"alt":"弱","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/d8/sad_thumb.gif"},{"alt":"草泥马","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/7a/shenshou_thumb.gif"},{"alt":"神马","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/60/horse2_thumb.gif"},{"alt":"囧","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/15/j_thumb.gif"},{"alt":"浮云","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/bc/fuyun_thumb.gif"},{"alt":"给力","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/1e/geiliv2_thumb.gif"},{"alt":"围观","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/f2/wg_thumb.gif"},{"alt":"威武","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/70/vw_thumb.gif"},{"alt":"奥特曼","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/bc/otm_thumb.gif"},{"alt":"礼物","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/c4/liwu_thumb.gif"},{"alt":"钟","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/d3/clock_thumb.gif"},{"alt":"话筒","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/9f/huatongv2_thumb.gif"},{"alt":"蜡烛","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/d9/lazhuv2_thumb.gif"},{"alt":"蛋糕","src":"https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/3a/cakev2_thumb.gif"}]
	}
];

    editor.customConfig.colors = [
    	'rgba(0,0,0,0)',
        '#000000',
        '#eeece0',
        '#1c487f',
        '#4d80bf',
        '#c24f4a',
        '#8baa4a',
        '#7b5ba1',
        '#46acc8',
        '#f9963b',
        '#0019FF'
    ];
editor.create()
layui.use(['layer', 'element', 'form', 'upload'], function() {
	var layer = layui.layer,
		$ = layui.$,
		form = layui.form,
		element = layui.element,
		upload = layui.upload;
	initData()
	//监听提交
	form.on('submit(formDemo)', function(data) {
		var article_data = data.field;
		//内容 读取 html
		var html = editor.txt.html()
		// 此处进行 xss 攻击过滤
		//article_data.content = filterXSS(html);
		article_data.content = html;
		var labelIds = [];
		var classifyIds = [];
		$.each($('#lables').children('input:checked'), function(idx, obj) {
			labelIds.push($(this).val())
		});
		$.each($('#classifys').children('input:checked'), function(idx, obj) {
			classifyIds.push($(this).val())
		});
		article_data.labelIds = labelIds;
		article_data.classifyIds = classifyIds;
		if(article_data.istop) {
			article_data.istop = "1"
		} else {
			article_data.istop = "0"
		}
		if(article_data.isvisible) {
			article_data.isvisible = "1"
		} else {
			article_data.isvisible = "0"
		}
		article_data = JSON.stringify(article_data)
		submit(article_data)
		return false;
	});
	//执行实例
	var uploadInst = upload.render({
		elem: '#updateS',
		url: '/api/blog-admin/article/upImg',
		size: 5000,
		done: function(res) {
			//上传完毕回调
			$('.layui-upload-img').attr('src', res.data[0])
			$('#layui-upload-img').val(res.data[0])
			layer.closeAll('loading');
		},
		error: function() {
			//请求异常回调

			layer.closeAll('loading');
		}
	});

	function submit(article_data) {
		$.ajax({
			url: IP + '/api/blog-admin/article',
			type: 'PUT',
			data: article_data,
			success: function(result, status, xhr) {
				layer.closeAll('loading');
				layer.msg(result.message, {
					icon: 1,
					time: 1300
				}, function() {
					window.history.back(-1);
				});
			}
		});
	}

	function initData() {
		var id = getUrlParam("id")
		showLabelClassify("lables", "classifys");
		form.render('checkbox');
		showData(id)
	}

	function showData(id) {
		$.ajax({
			url: IP + '/api/blog-admin/article/' + id,
			type: 'GET',
			success: function(result, status, xhr) {
				layer.closeAll('loading');
				$("input[name='id']").val(result.data.id)
				$("input[name='title']").val(result.data.title)
				$("textarea[name='summary']").val(result.data.summary)
				$('.layui-upload-img').attr('src', result.data.summaryimg)
				$('#layui-upload-img').val(result.data.summaryimg)
				$.each(result.data.lables, function(idx, obj) {
					$("#lables input[type='checkbox'][value='" + obj + "']").attr("checked", "checked")
				});
				$.each(result.data.classifys, function(idx, obj) {
					$("#classifys input[type='checkbox'][value='" + obj + "']").attr("checked", "checked")
				});
				if(result.data.istop == 1) {
					$("input[name='istop']").attr("checked", "checked")
				}
				if(result.data.isvisible == 1) {
					$("input[name='isvisible']").attr("checked", "checked")
				}
				form.render('checkbox');
				editor.txt.html(result.data.content);
			}
		});
	}
});