var IP = "http://localhost:8080";

layui.use(['layer'], function () {
    var $ = layui.$,
        jQuery = layui.$,
        layer = layui.layer;
    $(function () {
        //回到顶部
        utilshowhide();
        var p = 0;
        var t = 0;
        $(window).scroll(function () {
            utilshowhide();
            p = $(this).scrollTop();
            if (t <= p) {
                $('.myheader').addClass('slideUp')
            } else {
                $('.myheader').removeClass('slideUp')
            }
            t = p;
        });
        $('.layui-fixbar .layui-fixbar-top').click(function () {
            $("html,body").animate({
                scrollTop: 0
            }, 300);
        });

        function utilshowhide() {
            if ($(document).scrollTop() > 260) {
                $('.layui-fixbar').show();
                $('.myheader').removeClass('is_top_true');
                $('.myheader').addClass('is_top_false')
            } else {
                $('.layui-fixbar').hide();
                $('.myheader').removeClass('is_top_false');
                $('.myheader').addClass('is_top_true')
            }
        }

        //tips
        $('#grid .content span a').hover(function () {
            layer.tips($(this).attr('atitle'), this, {
                tips: [1, '#F75733'],
                time: 100000
            });
        }, function () {
            layer.closeAll('tips')
        });
        //navs
        $('#navs').click(function () {
            var that = this;
            if ($(that).hasClass('show')) {
                $(that).parent('.layui-nav').parent('.right').siblings('.left').slideUp(300, function () {
                    $(that).removeClass('show')
                })
            } else {
                $(that).parent('.layui-nav').parent('.right').siblings('.left').slideDown(300, function () {
                    $(that).addClass('show')
                })
            }
        });
        //防止小屏关闭nav后大屏无法显示
        $(window).resize(function () {
            if ($(window).width() >= 768) {
                $('.left').css({
                    display: 'block'
                })
            } else {
                $('.left').css({
                    display: 'none'
                })
            }
        });
        /////////////////////////////////////////////
        $.ajaxSetup({
            cache: false,
            timeout: 8000,
            type: "post",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            headers: {
                "token": localStorage.getItem("token")
            },
            beforeSend: function (xhr) {
                layer.load();
            },
            error: function (xhr, textStatus, errorThrown) {
                layer.closeAll('loading');
                //按钮禁用
                $(".layui-submit").attr('disabled', false);
                var msg = "连接超时";
                if (xhr.responseText == null || xhr.responseText === "") {
                    msg = "链接超时";
                } else {
                    var response = JSON.parse(xhr.responseText);
                    msg = response.message;
                    if (response.code === 401) {
                        localStorage.removeItem("token");
                    }
                }
                layer.msg(msg, {
                    icon: 2,
                    time: 2000
                });
            }
        });

        //ajax出现错误
        $(document).ajaxError(function () {
            layer.closeAll('loading');
            $(".layui-submit").attr('disabled', false);
        });
        txtshow();

        /**
         * 点击页面出现随机文字
         */
        function txtshow() {
            var a_idx = 0,
                b_idx = 0;
            c_idx = 0;
            jQuery(document).ready(function ($) {
                $("body").click(function (e) {
                    var a = ["美丽", "善良", "大方", "优雅", "文静", "脱俗", "纯洁", "开朗", "贤淑", "活泼", "率直", "可爱", "天真", "端庄", "温柔", "贤惠", "多才", "俊俏", "温柔", "体贴", "撒娇", "任性", "独立", "爱美", "温柔", "善良", "贤惠", "善良", "纯洁", "活泼", "开朗", "天真", "率直", "含羞", "腼腆", "善于交际", "另类", "有耐力", "有见识", "有仪态", "天生丽质", "慧质兰心", "秀外慧中", "暗香盈袖", "闭月羞花", "沉鱼落雁", "倾国倾城", "温婉娴淑", "千娇百媚", "仪态万千", "美艳绝世", "国色天香", "花容月貌", "明目皓齿", "淡扫峨眉", "清艳脱俗", "香肌玉肤", "清丽绝俗", "仪态万端", "婉风流转", "美撼凡尘", "聘婷秀雅"],
                        b = ["#09ebfc", "#ff6651", "#ffb351", "#51ff65", "#5197ff", "#a551ff", "#ff51f7", "#ff518e", "#ff5163", "#efff51"];
                    var $i = $("<span class='layui-unselect'><span/>").text(a[a_idx]);
                    a_idx = (a_idx + 1) % a.length;
                    b_idx = (b_idx + 1) % b.length;
                    var x = e.pageX,
                        y = e.pageY;
                    $i.css({
                        "z-index": 999999,
                        "top": y - 20,
                        "left": x,
                        "position": "absolute",
                        "font-weight": "bold",
                        "font-size": "14px",
                        "color": b[b_idx]
                    });
                    $("body").append($i);
                    $i.animate({
                        "top": y - 150,
                        "opacity": 0
                    }, 1500, "linear", function () {
                        $i.remove();
                    });
                });
            });
            var _hmt = _hmt || [];
        }
    });
    initUserData();
    $('#login_out').click(function () {
        login_out()
    });
    $('#bind-account').click(function () {
        layer.msg("亲，适配中...");
    });

    //展示用户基本数据(qq用户或者邮箱登录用户)
    function initUserData() {
        var nickname = decodeURI(getCookie("nickname"));
        var figureurlQq1 = getCookie("figureurlQq1");
        if (nickname && nickname.length > 0) {
            $('#figureurlQq1').prop('src', figureurlQq1);
            $('#nickname').html(nickname);
            $('#login_no').hide();
            $('#login_yes').show()
        } else {
            $('#login_no').show();
            $('#login_yes').hide()
        }
    }

    //login_out
    function login_out() {
        //询问框
        var index = layer.confirm('<p  style="line-height:18px"><b class="layui-icon layui-icon-face-smile" style="font-size: 20px; color: red;"></b><span style="font-size: 18px;"> 帅气美丽的你？</span></p>', {
            btn: ['确定退出', '再想想'],
            title: "别退呀"
        }, function () {
            //确定退出
            $.ajax({
                url: "/api/blog-web/oauth2/qqLogOut",
                type: 'POST',
                contentType: "application/x-www-form-urlencoded",
                success: function (result, status, xhr) {
                    layer.closeAll();
                    clearCookie("accessToken");
                    clearCookie("nickname");
                    clearCookie("figureurlQq1");
                    layer.msg("退出成功", {
                        icon: 1,
                        time: 2000
                    });
                    initUserData()
                }
            });
        });
    }
});

/**
 * check login
 * true:登录，false:未登录
 */
function checkLogin() {
    if (!getCookie("accessToken") || getCookie("accessToken").length < 1) {
        return false;
    } else {
        return true;
    }
}

//get cookie
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

//set cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

//delete cookie
function clearCookie(name) {
    setCookie(name, "", -1);
}

//计算时间为刚刚、几分钟前、几小时前、几天前
function diaplayTime(data) {
    var str = data;
    //将字符串转换成时间格式
    var timePublish = new Date(str);
    var timeNow = new Date();
    var minute = 1000 * 60;
    var hour = minute * 60;
    var day = hour * 24;
    var month = day * 30;
    var diffValue = timeNow - timePublish;
    var diffMonth = diffValue / month;
    var diffWeek = diffValue / (7 * day);
    var diffDay = diffValue / day;
    var diffHour = diffValue / hour;
    var diffMinute = diffValue / minute;

    if (diffValue < 0) {
        console.log("错误时间");
    } else if (diffMonth > 3) {
        result = timePublish.getFullYear() + "-";
        result += timePublish.getMonth() + 1 + "-";
        result += timePublish.getDate();
    } else if (diffMonth > 1) {
        result = parseInt(diffMonth) + "月前";
    } else if (diffWeek > 1) {
        result = parseInt(diffWeek) + "周前";
    } else if (diffDay > 1) {
        result = parseInt(diffDay) + "天前";
    } else if (diffHour > 1) {
        result = parseInt(diffHour) + "小时前";
    } else if (diffMinute > 1) {
        result = parseInt(diffMinute) + "分钟前";
    } else {
        result = "刚刚发表";
    }
    return result;
}


//获取url后的参数值
function getUrlParam(key) {
    var href = window.location.href;
    var url = href.split("?");
    if (url.length <= 1) {
        return "";
    }
    var params = url[1].split("&");

    for (var i = 0; i < params.length; i++) {
        var param = params[i].split("=");
        if (key === param[0]) {
            return decodeURI(param[1]);
        }
    }
}

//初始化读取标签和分类.还有文章总数
function initData() {
    //初始化 标签,分类,总数
    $.ajax({
        url: '/front/front.do?cmd=initTypeAjax',
        type: 'post',
        data: {"dawa": 123},
        success: function (data) {
            //回显数据.
            $.each(data.labels, function (index, obj) {
                $("#right_labels .content").append("<a class=\"animated3\" t-id='" + obj.t_id + "' t-color='" + obj.t_color + "' href=\"javascript:\" title=\"" + obj.t_name + "\" style=\"background-color: " + obj.t_color + ";\"> " + obj.t_name + "(<span id='a" + index + "'>1</span>)" + "</a>");
                getArticleCountByTId("a" + index, obj.t_id)
            });
            $.each(data.fenlei, function (index, obj) {
                $("#right_fenlei .content").append("<a  class=\"animated3\"  href=\"javascript:\" title=\"" + obj.t_name + "\" >" + obj.t_name + "(<span id='fenlei" + index + "'>1</span>)" + " </a>");
                getArticleCountByTId("fenlei" + index, obj.t_id);

            });
            $("#fl_num").html(data.fenlei.length);  //分类总数
            $("#bq_num").html(data.labels.length); //标签总数
            $("#a_num").html(data.articleCount); //文章总数

        },
        error: function () {
            alert("error");
        },
        dataType: 'json'
    });

}

//根据类型ID,找出所有的文章.和数量
function getArticleCountByTId(id, tId) {
    let count = 0;
    $.ajax({
        url: '/front/front.do?cmd=getArticleCountByTId&tId=' + tId,
        type: 'post',
        dataType: 'json',
        success: function (data) {
            layer.closeAll();
            console.log(data.count);
            $("#" + id + "").html(data.count);
        },
        error: function () {
            console.log("根据类型找文章数量出错.")
        }
    });
    return count;
}