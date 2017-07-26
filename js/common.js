/**
 * Created by Administrator on 2017/7/21.
 */
var HXcommon = {
    // ajax组件
    ajaxDataController:function () {
        //打印ajax错误日志
        function printLog(result, url, params, response) {
            console.error('AJAX 请求异常 - %s\n错误信息：\n%c%s\n%c请求链接：%s\n%c请求参数：%c%s\n%c返回数据：%c%s',
                'color:red;',
                result,
                'color:#333;',
                'color:blue',
                url,
                'color:#333;',
                'color:green',
                JSON.stringify(params),
                'color:#333;',
                'color:#643A3A',
                response)
        }
        function dataHandle(url, params, callback,async,method) {
            if ((typeof params) === 'function') {
                callback = params;
                params = null;
            }
            params = params || {};
            async = async == null ? true : async;
            $.ajax({
                async: async,
                url: url,
                data: params,
                type: method,
                success: function (result, textStatus, xhr) {
                    switch (result.status) {
                        case 404:
                            // do something
                            break;
                        case 500:
                            // do something
                            break;
                        default:
                            callback(result);
                            break;
                    }
                },
                error: function (xhr, textStatus, error) {
                    alert("系统出现异常，请稍候再试");
                    printLog(xhr.status, textStatus + ' - ' + error, url, params, xhr.responseText);
                }
            });
        }
        return {
            post: function (url, params, callback, async) {
                dataHandle(url, params, callback, async, 'post');
            },
            get: function (url, params, callback, async) {
                dataHandle(url, params, callback, async, 'get');
            }
        };
    },
    // 代码高亮
    highlightInit:function () {
        $('pre code').each(function(i, block) {
            hljs.highlightBlock(block);
        });
    }
};