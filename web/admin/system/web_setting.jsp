<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <title>website setting</title>
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
                <div class="layui-card-header">网站设置
                    <span class="btn_right">
								<button type="button" id="refresh" title="刷新"
                                        class="layui-btn layui-btn-normal layui-btn-xs"><i
                                        class="layui-icon layui-icon-refresh"></i></button>
							</span>
                </div>
                <div class="layui-card-body">

                    <div class="layui-form" lay-filter="webSiteBaseInfo">
                        <div class="layui-form-item">
                            <label class="layui-form-label">网站名称</label>
                            <div class="layui-input-block">
                                <input type="text" name="sitename" class="layui-input" lay-verify="required" title="网站名称">
                            </div>
                        </div>
                        <div class="layui-form-item">
                            <label class="layui-form-label">网站域名</label>
                            <div class="layui-input-block">
                                <input type="text" name="domain" lay-verify="url" class="layui-input" title="网站域名">
                            </div>
                        </div>

                        <div class="layui-form-item layui-form-text">
                            <label class="layui-form-label">首页标题</label>
                            <div class="layui-input-block">
                                <input name="title" class="layui-input" lay-verify="required" title="首页标题"/>
                            </div>
                        </div>
                        <div class="layui-form-item layui-form-text">
                            <label class="layui-form-label">META关键词</label>
                            <div class="layui-input-block">
                                <textarea name="keywords" class="layui-textarea" placeholder="多个关键词用英文状态 , 号分割"
                                          lay-verify="required"></textarea>
                            </div>
                        </div>
                        <div class="layui-form-item layui-form-text">
                            <label class="layui-form-label">META描述</label>
                            <div class="layui-input-block">
                                <textarea name="descript" class="layui-textarea" lay-verify="required" title="META描述"></textarea>
                            </div>
                        </div>
                        <div class="layui-form-item layui-form-text">
                            <label class="layui-form-label">版权信息</label>
                            <div class="layui-input-block">
                                <input name="copyright" class="layui-input" lay-verify="required" title="版权信息"/>
                            </div>
                        </div>
                        <div class="layui-form-item">
                            <div class="layui-input-block">
                                <button class="layui-btn layui-btn-normal" lay-submit="" lay-filter="set_website">确认保存
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript" src="${pageContext.request.contextPath}/res/layui/layui.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/res/lay/system/admin/public.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/res/lay/system/admin/web_setting.js"></script>
</body>

</html>