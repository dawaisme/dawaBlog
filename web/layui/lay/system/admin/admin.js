//JavaScript代码区域
layui.use(['layer', 'element'], function() {
	var layer = layui.layer,
		$ = layui.$,
		element = layui.element;
        
    $(function(){
        initData();
        //初始化导航栏
        myNav = new IScroll('#wrapper', {
            mouseWheel: true,
            bounce: true,
            scrollX: true,
            tap: true,
            click: true
        });
        //header主题和关于start

        /*header主题和关于end*/
        /*左侧父菜单（闭合操作,包括二级菜单）start*/
        var parentItems = $('.layui-side .layui-nav-myitem');
        var parentItemsIsClick = false;
        $(parentItems).on('click','li dt',function(){
            var that = this;
            if(parentItemsIsClick) {
                return;
            }
            parentItemsIsClick = true;
            //判断是否有.selected
            if($(that).hasClass('selected')) {
                clearOtherCss(parentItems);
                $(that).children('.layui-icon-triangle-r').css({
                    "transform": "rotate(0deg)"
                });
                $(that).siblings('dl').hide(300, function() {
                    $(that).removeClass('selected');
                    parentItemsIsClick = false;
                });
            } else {
                clearOtherCss(parentItems);
                $(that).children('.layui-icon-triangle-r').css({
                    "transform": "rotate(90deg)"
                });
                $(that).siblings('dl').show(300, function() {
                    $(that).addClass('selected');
                    parentItemsIsClick = false;
                });
            }
        });

        function clearOtherCss(parentItems) {
            //var parentItems = $('.layui-side .layui-nav-myitem');
            $(parentItems).children('li').children('dt').children('.layui-icon-triangle-r').css({
                "transform": "rotate(0deg)"
            });
            $('.layui-nav-myitem dl').hide(300, function() {
                $(parentItems).children('li').children('dt').removeClass('selected');
            });
        }
        /*左侧父菜单（闭合操作）end*/
        /*左侧子菜单start*/
        //初始化lay-id
        var items = $('.layui-side .layui-nav-myitem li dl dd a');
        items.each(function(idx, obj) {
            $(obj).attr('lay-id', 'items' + idx);
        });
        //左侧菜单栏添加事件(子菜单事件)
        $(parentItems).on('click','li dl dd',function(){
            $(items.parent("dd")).removeClass('selected');
            $(this).addClass('selected');
            var that = $(this).children('a').get(0);
            var flag = true;
            var tabs = $('#layui-tabs li');
            var url = $(that).data('url');
            var title = $(that).data('title');
            var id = $(that).attr('lay-id');
            if(url && title && id) {
                tabs.each(function(idx, obj) {
                    //判断是否在右侧菜单栏是否打开
                    if($(that).attr('lay-id') == $(obj).attr('lay-id')) {
                        flag = false;
                        element.tabChange('layui-tab', id); //如果存在，则打开它
                    }
                });
                if(flag) {
                    var close = $('<i class="layui-icon layui-unselect layui-tab-close" data-id="' + id + '">ဆ</i>');
                    $(close).click(function() {
                        element.tabDelete('layui-tab', $(this).data('id'));
                        element.tabChange('layui-tab', $('#layui-tabs li:last').attr('lay-id'));
                        Naviscroll(); //刷新滑块
                    })
                    element.tabAdd('layui-tab', {
                        title: title,
                        content: '<iframe scrolling="auto" frameborder="0"  src="' + url + '" style="width:100%;height:100%;"></iframe>',
                        id: id
                    });
                    element.tabChange('layui-tab', id)
                    $('#layui-tabs .layui-this').append(close)
                    Naviscroll(); //刷新滑块
                    refreshcontextMenu();
                }
            }
            //关闭遮罩
            $('.layadmin-body-shade').hide();
            if($(window).width() <= 768) {
                changeSide(0);
                changeLAY_app_flexible(true)
            }
        });
        /*左侧子菜单end*/
        /*监听窗口大小改变*/
        LAY_app_flexible($(window).width());
        $(window).resize(function() {
            LAY_app_flexible($(window).width());
        });
        /*LAY_app_flexible*/
        $('#LAY_app_flexible').parent('a').click(function() {
            var that = $('#LAY_app_flexible');
            if($(that).hasClass('layui-icon-shrink-right')) {
                changeSide(0)
                changeLAY_app_flexible(true)
                $('.layadmin-body-shade').hide();
            } else {
                changeSide(200)
                changeLAY_app_flexible(false)
                if($(window).width() <= 768) {
                    $('.layadmin-body-shade').show();
                }
            }
        })

        function LAY_app_flexible(width) {
            $('#LAY_app_flexible').removeClass('layui-icon-shrink-right layui-icon-spread-left');
            if(width <= 768) {
                changeSide(0)
                $('#LAY_app_flexible').addClass('layui-icon-spread-left');
            } else {
                changeSide(200)
                $('#LAY_app_flexible').addClass('layui-icon-shrink-right');
            }
        }

        function changeSide(width) {
            $('.layui-layout-admin .layui-side').css({
                "left": -(200 - width) + "px",
            })
            $('.layui-layout-admin .layui-body').css({
                "left": width + "px",
            })
            setTimeout(function() {
                Naviscroll();
                console.log("刷新滑块")
            }, 350)
        }

        function changeLAY_app_flexible(flag) {
            $('#LAY_app_flexible').removeClass('layui-icon-shrink-right layui-icon-spread-left');
            if(flag) {
                $('#LAY_app_flexible').addClass('layui-icon-spread-left');
            } else {
                $('#LAY_app_flexible').addClass('layui-icon-shrink-right');
            }
        }
        /*LAY_app_flexible*/
        /*遮罩*/
        $('.layadmin-body-shade').click(function() {
            changeSide(0);
            $(this).hide();
            changeLAY_app_flexible(true)
        })
        /*nav滑动*/
        function Naviscroll() {
            //改变.layui-layout-admin .layui-body .layui-tab .layui-tab-title的宽度
            var list = $('.layui-layout-admin .layui-body .layui-tab .layui-tab-title li');
            var width = 0;
            var tabtitle = $('.layui-layout-admin .layui-body .layui-tab .layui-tab-title');
            $.each(list, function(idx, obj) {
                width += parseInt($(this).outerWidth(true));
            });
            $(tabtitle).width(width + 3);
            myNav.refresh(); //刷新滑块
        }
        /*右键菜单*/
        refreshcontextMenu();

        function refreshcontextMenu() {
            $('#wrapper ul li').not('.layui-tab-index').contextMenu('myMenu1', {
                bindings: {
                    'deletemyself': function(t) {
                        element.tabDelete('layui-tab', $(t).attr('lay-id'));
                        element.tabChange('layui-tab', $('#layui-tabs li:last').attr('lay-id'));
                        Naviscroll();
                    },
                    'deleteother': function(t) {
                        $.each($('#layui-tabs li'), function(idx, obj) {
                            console.log($(obj).attr('lay-id'))
                            if($(t).attr('lay-id') != $(obj).attr('lay-id')) {
                                if($(obj).attr('lay-id') != "index") {
                                    element.tabDelete('layui-tab', $(obj).attr('lay-id'));
                                }
                            }
                            element.tabChange('layui-tab', $(t).attr('lay-id'));
                        });
                        Naviscroll();
                    },
                    'deleteall': function(t) {
                        $.each($('#layui-tabs li'), function(idx, obj) {
                            if($(obj).attr('lay-id') != "index") {
                                element.tabDelete('layui-tab', $(obj).attr('lay-id'));
                            }
                            element.tabChange('layui-tab', "index");
                        });
                        Naviscroll();
                    }
                }
            });
        }

        /**
         * 
         */
        $('#user_info dl dd a').click(function() {
            var index = $("#user_info dl dd a").index(this);
            switch(index) {
                case 0:
                    $('#update_password').trigger('click')
                    break;
                case 1:
                    layer.confirm("您要退出吗？", {
                        icon: 3
                    }, function(index) {
                        layer.close(index);
                        loginOut();
                    });
                    break;
            }
        });
        /**
         * 初始化数据、用户信息
         */
        function initData() {
            showUser();
        }

        function showUser() {
            $.ajax({
                url: IP + '/api/blog-oauth2/get_user_info',
                type: 'GET',
                headers: {
                    'Authorization': localStorage.getItem("access_token") == null ? "" : "Bearer " + localStorage.getItem("access_token")
                },
                async: false,
                success: function(result, status, xhr) {
                    layer.closeAll('loading');
                    var data = result;
                    $('#nickname').html(data.nickname)
                    sessionStorage.setItem("username", data.username)
                    sessionStorage.setItem("nickname", data.nickname)
                    $('#headimgurl').attr('src', data.headimgurl)
                    showMenus(result);
                }
            });
        }
        //菜单展示
        function showMenus(result) {
            var menus = toTree(bubbleSort(result.menus));
            var menuHtml = "";
            $.each(menus, function(idx, obj) {
                var p = '<li>' +
                    '<dt><i class="' + obj.ico + '"></i>&nbsp;' + obj.name +
                    '<i class="layui-icon layui-icon-triangle-r"></i></dt><dl>'
                $.each(obj.children, function(idx1, child) {
                    p += "<dd>" +
                        "<a data-url='" + child.href + "' data-title='" + child.name + "'>" + child.name + "</a>" +
                        "</dd>"
                });
                p += "</dl></li>"
                menuHtml += p;
            });
            $('.layui-nav-myitem').append(menuHtml)
        }
        //退出登录
        function loginOut() {
            var access_token = localStorage.getItem("access_token");
            $.ajax({
                url: '/api/blog-oauth2/oauth2/loginout?access_token=' + access_token,
                async: false,
                headers: {
                    'Authorization': localStorage.getItem("access_token") == null ? "" : "Bearer " + localStorage.getItem("access_token")
                },
                contentType: "application/x-www-form-urlencoded",
                success: function(result, status, xhr) {
                    localStorage.clear()
                    sessionStorage.clear()
                    layer.closeAll('loading');
                    window.parent.location.href = IP + '/admin/login.jsp';
                }
            });
        }
    });
});