<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <title>update_my_base_info</title>
    <link rel="shortcut icon" href="${pageContext.request.contextPath}/res/images/my/favicon.ico"/>
    <link rel="bookmark" href="${pageContext.request.contextPath}/res/images/my/favicon.ico"/>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/res/css/layui.css"/>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/res/css/admin/common.css"/>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/res/css/admin/update_my_base_info.css"/>
</head>

<body>

<div class="layui-fluid">
    <div class="layui-row">
        <div class="layui-col-md12">
            <div class="layui-card layui-anim layui-anim-upbit">
                <div class="layui-card-header">我的信息
                    <span class="btn_right">
								<button type="button" id="refresh" title="刷新"
                                        class="layui-btn layui-btn-normal layui-btn-xs"><i
                                        class="layui-icon layui-icon-refresh"></i></button>
							</span>
                </div>
                <div class="layui-card-body">
                    <form class="layui-form" lay-filter="my_base_info">
                        <div class="layui-form-item layui-row">
                            <input type="hidden" name="uid"/>
                            <label class="my_layui-form-label layui-col-md1 layui-col-sm1 layui-col-xs12">用户名：</label>
                            <div class="layui-col-md10 layui-col-sm10 layui-col-xs12">
                                <b>
                                    <input type="text" name="username" value="用户名" disabled required
                                           lay-verify="required" autocomplete="off" class="layui-input readonly" title="用户名">
                                </b>
                            </div>
                        </div>
                        <div class="layui-form-item layui-row">
                            <label class="my_layui-form-label layui-col-md1 layui-col-sm1 layui-col-xs12">昵称：</label>
                            <div class="layui-col-md10 layui-col-sm10 layui-col-xs12">
                                <input type="text" name="nickname" required lay-verify="required|username"
                                       placeholder="请输入昵称" autocomplete="off" class="layui-input">
                            </div>
                        </div>
                        <div class="layui-form-item layui-row">
                            <label class="my_layui-form-label layui-col-md1 layui-col-sm1 layui-col-xs12">电话：</label>
                            <div class="layui-col-md10 layui-col-sm10 layui-col-xs12">
                                <input type="text" name="phone" required lay-verify="myphone" placeholder="请填写电话"
                                       autocomplete="off" class="layui-input">
                            </div>
                        </div>
                        <div class="layui-form-item layui-row">
                            <label class="my_layui-form-label layui-col-md1 layui-col-sm1 layui-col-xs12">邮箱：</label>
                            <div class="layui-col-md10 layui-col-sm10 layui-col-xs12">
                                <input type="text" name="email" required lay-verify="myemail" placeholder="请填写邮箱"
                                       autocomplete="off" class="layui-input">
                            </div>
                        </div>
                        <div class="layui-form-item layui-row">
                            <label class="my_layui-form-label layui-col-md1 layui-col-sm1 layui-col-xs12">生日：</label>
                            <div class="layui-col-md10 layui-col-sm10 layui-col-xs12">
                                <input id="birthday" type="text" name="birthday" required lay-verify="mydate"
                                       placeholder="请填写生日" autocomplete="off" class="layui-input">
                            </div>
                        </div>
                        <div class="layui-form-item layui-row">
                            <label class="my_layui-form-label layui-col-md1 layui-col-sm1 layui-col-xs12">性别：</label>
                            <div class="layui-col-md10 layui-col-sm10 layui-col-xs12" id="sex">

                            </div>
                        </div>
                        <div class="layui-form-item layui-row">
                            <label class="my_layui-form-label layui-col-md1 layui-col-sm1 layui-col-xs12">头像：</label>
                            <div class="layui-col-md10 layui-col-sm10 layui-col-xs12">
                                <a href="javascript:" target="_blank"><img id="headimg"
                                                                           src="${pageContext.request.contextPath}/res/images/my/photo.jpg"/></a>
                                <input id="headimgurl" type="hidden" name="headimgurl" value=""/>
                                <button type="button" class="layui-btn layui-btn-xs layui-btn-danger"
                                        id="uploadheadimg">
                                    <i class="layui-icon">&#xe67c;</i>上传图片
                                </button>
                            </div>
                        </div>
                        <div class="layui-form-item layui-row">
                            <label class="my_layui-form-label layui-col-md1 layui-col-sm1 layui-col-xs1 layui-hide-xs">&nbsp;</label>
                            <button type="button" class="layui-btn layui-btn-normal" lay-submit
                                    lay-filter="formDemo"><span>保存修改</span></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript" src="${pageContext.request.contextPath}/res/layui/layui.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/res/lay/system/admin/public.js?v=dksao923470oer92148"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/res/lay/system/admin/update_my_base_info.js?v=dksao923470oer92148"></script>
</body>

</html>