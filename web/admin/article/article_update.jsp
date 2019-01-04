<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <title>article_update</title>
    <link rel="shortcut icon" href="${pageContext.request.contextPath}/res/images/my/favicon.ico"/>
    <link rel="bookmark" href="${pageContext.request.contextPath}/res/images/my/favicon.ico"/>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/res/css/layui.css"/>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/res/css/admin/common.css"/>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/res/css/admin/send_one_article.css"/>
</head>

<body>

<div class="layui-fluid">
    <div class="layui-card layui-anim layui-anim-upbit">
        <form class="layui-form" onsubmit="return false;" action="${pageContext.request.contextPath}/admin/admin.do?cmd=updateArticle" method="post">
            <div class="layui-row">
                <div class="layui-card-header">信息编辑
                    <span class="btn_right">
								<button type="button" title="返回" class="layui-btn layui-btn-normal layui-btn-xs"
                                        onclick="window.history.back(-1);"><i class="layui-icon">&#xe65c;</i>返回上一页</button>
								<button type="button" id="refresh" title="刷新"
                                        class="layui-btn layui-btn-normal layui-btn-xs"><i
                                        class="layui-icon layui-icon-refresh"></i></button>
							</span>
                </div>
                <div class="layui-col-md9">
                    <div class="layui-card-body">
                        <div class="layui-form-item layui-row">
                            <input type="hidden" name="id"/>
                            <label class="mylayui-form-label layui-col-md1 layui-col-sm1 layui-col-xs12">标题：</label>
                            <div class="layui-col-md11 layui-col-sm11 layui-col-xs12">
                                <input name="title" lay-verify="required" placeholder="请输入文章标题" autocomplete="off"
                                       class="layui-input">
                            </div>
                        </div>
                        <div class="layui-form-item layui-row">
                            <label class="mylayui-form-label layui-col-md1 layui-col-sm1 layui-col-xs12">摘要：</label>
                            <div class="layui-col-md9 layui-col-sm9 layui-col-xs12">
                                <textarea name="summary" lay-verify="required" placeholder="请输入内容摘要"
                                          class="layui-textarea"></textarea>
                            </div>
                            <div class="layui-col-md2 layui-col-sm2 layui-col-xs12">
                                <div class="thumbBox" id="updateS">
                                    <input id="layui-upload-img" name="summaryimg" type="hidden"
                                           value="/res/images/my/5.jpg"/>
                                    <img src="${pageContext.request.contextPath}/res/images/my/5.jpg" class="layui-upload-img thumbImg">
                                </div>
                            </div>
                        </div>
                        <div class="layui-form-item layui-row">
                            <label class="mylayui-form-label layui-col-md1 layui-col-sm1 layui-col-xs12">内容：</label>
                            <div class="layui-col-md11 layui-col-sm11 layui-col-xs12">
                                <div id="editor"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="layui-col-md3 layui-col-sm12 layui-col-xs12">
                    <div class="layui-form-item layui-row">
                        <div class="layui-col-md12 layui-col-sm12 layui-col-xs12">
                            <fieldset class="layui-elem-field">
                                <input type="hidden" id="labelIds" name="labelIds">
                                <legend style="font-size: 16px;"><strong>标签</strong></legend>
                                <div class="layui-form-item layui-field-box" id="lables">

                                </div>
                            </fieldset>
                            <fieldset class="layui-elem-field">
                                <input type="hidden" id="classifyIds" name="classifyIds">
                                <legend style="font-size: 16px;"><strong>分类</strong></legend>
                                <div class="layui-form-item layui-field-box" id="classifys">

                                </div>
                            </fieldset>
                            <fieldset class="layui-elem-field">
                                <legend style="font-size: 16px;"><strong>OMG</strong></legend>
                                <div class="layui-form-item layui-field-box">
                                    <input type="hidden" name="istop" id="istop">
                                    <input type="hidden" name="isview" id="isview">
                                    <input type="checkbox" name="is_top" lay-skin="switch" lay-text="顶置|非顶" title="是否置顶">
                                    <input type="checkbox" name="is_view" lay-skin="switch" lay-text="可见|不可" title="是否可见">
                                </div>
                                <div class="layui-form-item layui-field-box">
                                    <button class="layui-btn layui-btn layui-btn-sm layui-btn-normal" lay-submit
                                            lay-filter="formDemo">保存修改
                                    </button>
                                    <button type="reset" class="layui-btn layui-btn-primary layui-btn layui-btn-sm">预览
                                    </button>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
            <input type="hidden" id="content" name="content" value="内容">
        </form>
    </div>
</div>
<script type="text/javascript" src="${pageContext.request.contextPath}/res/layui/layui.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/res/lay/wangEditor/wangEditor.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/res/lay/system/admin/public.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/res/lay/system/admin/article_update.js"></script>
</body>

</html>