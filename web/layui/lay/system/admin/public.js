var IP = "http://localhost:8080";
var jQuery;

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
        if (key == param[0]) {
            return decodeURI(param[1]);
        }
    }
}

//展示类型为type的数据字典的select框
function showDictSelect(id, type, istitle) {
    var html_d;
    if (istitle) {
        html_d = "<option class='layui-select-tips' value=''>请选择</option>";
    }
    jQuery.each(getDictionary(type), function (idx, obj) {
        html_d += "<option value='" + obj.k + "'>" + obj.v + "</option>";
    });
    jQuery('#' + id).html(html_d);
}

function showCheckbox(id, type) {
    var html_r = "";
    jQuery.each(getDictionary(type), function (idx, obj) {
        html_r += "<input type='checkbox' value='" + obj.id + "' data-id='" + obj.k + "' title='" + obj.v + "' lay-skin='primary'>";
    });
    jQuery('#' + id).html(html_r);
}

function showRolesCheckbox(id) {
    var html_r = "";
    jQuery.each(getRoles(), function (idx, obj) {
        html_r += "<input type='checkbox' data-id='" + obj.id + "' title='" + obj.name + "' lay-skin='primary'>"
    });
    jQuery('#' + id).html(html_r);
}

function showDictRadio(id, type) {
    var html_d = "";
    jQuery.each(getDictionary(type), function (idx, obj) {
        html_d += "<input type='radio' name='sex' value='" + obj.k + "' title='" + obj.v + "'>";
    });
    jQuery('#' + id).html(html_d);
}

function showLabelClassify(lables, classifys) {
    var labelHtml = "";
    var classifyHtml = "";
    var lcs = getLabelClassify();
    jQuery.each(lcs.label, function (idx, obj) {
        labelHtml += "<input type='checkbox' value='" + obj.id + "' data-id='" + obj.id + "' title='" + obj.name + "' lay-skin='primary'>";
    });
    jQuery.each(lcs.classify, function (idx, obj) {
        classifyHtml += "<input type='checkbox' value='" + obj.id + "' data-id='" + obj.id + "' title='" + obj.name + "' lay-skin='primary'>";
    });
    jQuery('#' + lables).html(labelHtml);
    jQuery('#' + classifys).html(classifyHtml);
}

//获取所有标签、分类
function getLabelClassify() {
    var v = sessionStorage.getItem("LabelClassify");
    if (v == null || v == "" || v == undefined) {
        jQuery.ajax({
            url: IP + '/api/blog-admin/labelClassify',
            type: 'GET',
            async: false,
            success: function (result, status, xhr) {
                layer.closeAll('loading');
                sessionStorage.setItem("LabelClassify", JSON.stringify(result.data));
            }
        });
    }
    return JSON.parse(sessionStorage.getItem("LabelClassify"));
}

//获取全部角色数据
function getRoles() {
    var v = sessionStorage.getItem("roles");
    if (v == null || v == "" || v == undefined) {
        jQuery.ajax({
            url: IP + '/api/blog-admin/role',
            type: 'GET',
            async: false,
            success: function (result, status, xhr) {
                layer.closeAll('loading');
                sessionStorage.setItem("roles", JSON.stringify(result.data));
            }
        });
    }
    return JSON.parse(sessionStorage.getItem("roles"));
}

//获取类型为type字典数据
function getDictionary(type) {
    var v = sessionStorage.getItem(type);
    if (v == null || v == "" || v == undefined) {
        jQuery.ajax({
            url: IP + '/api/blog-admin/dictionary',
            type: 'GET',
            async: false,
            data: {
                type: type
            },
            success: function (result, status, xhr) {
                layer.closeAll('loading');
                sessionStorage.setItem(type, JSON.stringify(result.data));
            }
        });
    }
    try {
        return JSON.parse(sessionStorage.getItem(type));
    } catch (e) {
        return [];
    }
}

//菜单类型，1：菜单是个url，2:是一个按钮(int)
function getMenus(type) {
    var menus;
    jQuery.ajax({
        url: IP + '/api/blog-admin/menus',
        type: 'GET',
        data: {
            type: type
        },
        async: false,
        success: function (result, status, xhr) {
            layer.closeAll('loading');
            menus = result.data;
        }
    });
    return MenuSort(menus);
}

//菜单递归排序后返回
function MenuSort(menuArry) {
    var mymenus = [];
    GetData(0, menuArry);

    function GetData(id, arry) {
        var childArry = GetParentArry(id, arry);
        if (childArry.length > 0) {
            for (var i in childArry) {
                mymenus.push(childArry[i])
                GetData(childArry[i].id, arry);
            }
        }
    }

    function GetParentArry(id, arry) {
        var newArry = new Array();
        for (var i in arry) {
            if (arry[i].parentid == id)
                newArry.push(arry[i]);
        }
        return newArry;
    }

    return mymenus;
}

//生成菜单树
function toTree(data) {
    data.forEach(function (item) {
        delete item.children;
    });
    var map = {};
    data.forEach(function (item) {
        map[item.id] = item;
    });
    var val = [];
    data.forEach(function (item) {
        var parent = map[item.parentid];
        if (parent) {
            (parent.children || (parent.children = [])).push(item);
        } else {
            val.push(item);
        }
    });
    return val;
}

//根据sort升序排序
function bubbleSort(arr) {
    var i = arr.length,
        j;
    var tempExchangVal;
    while (i > 0) {
        for (j = 0; j < i - 1; j++) {
            if (arr[j].sort > arr[j + 1].sort) {
                tempExchangVal = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tempExchangVal;
            }
        }
        i--;
    }
    return arr;
}

//刷新
function refresh_token() {
    var flag = false;
    jQuery.ajax({
        url: IP + '/api/blog-oauth2/oauth2/refresh',
        type: 'POST',
        async: false,
        contentType: "application/x-www-form-urlencoded",
        data: {
            access_token: localStorage.getItem("access_token"),
            refresh_token: localStorage.getItem("refresh_token")
        },
        success: function (result, status, xhr) {
            localStorage.setItem("access_token", result.access_token)
            localStorage.setItem("token_type", result.token_type)
            localStorage.setItem("refresh_token", result.refresh_token)
            localStorage.setItem("expires_in", result.expires_in)
            localStorage.setItem("scope", result.scope)
            flag = true;
        }
    });
    return flag;
}

//判断是否有后缀名
function checkHouZui(fileName) {
    var d = /\.[^\.]+$/.exec(fileName);
    if (d) {
        return true;
    }
    return false;
}

//大小转换
function bytesToSize(bytes) {
    if (bytes === 0) return '0 B';
    var k = 1024,
        sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        i = Math.floor(Math.log(bytes) / Math.log(k));

    return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
}

//set cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
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

//delete cookie
function clearCookie(name) {
    setCookie(name, "", -1);
}