//公共接口模块
var commonController = {
    _ajaxHander: HXcommon.ajaxDataController(),
    _url: {
        /*
         html规范-HTML整体结构
         get
         params:{}
         author:xia
         */
        GET_HTMLSTRUCTURE: 'views/html/html-structure.html',
        /*
         html规范-HTML代码格式
         get
         params:{}
         author:xia
         */
        GET_HTMLFORMAT:'views/html/html-format.html',
        /*
         html规范-HTML内容语义
         get
         params:{}
         author:xia
         */
        GET_HTMLCONTENT:'views/html/html-content.html',
        /*
         css规范-CSS代码格式
         get
         params:{}
         author:xia
         */
        GET_CSSFORMAT:'views/css/css-format.html',
        /*
         css规范-CSS命名规则
         get
         params:{}
         author:xia
         */
        GET_CSSNAME:'views/css/css-name.html',
        /*
         css规范-CSS优化方案
         get
         params:{}
         author:xia
         */
        GET_OPTIMIZE:'views/css/css-optimize.html',
        /*
         js规范-JS代码格式
         get
         params:{}
         author:xia
         */
        GET_JSFORMAT:'views/js/js-format.html',
        /*
         js规范-JS注意事项
         get
         params:{}
         author:xia
         */
        GET_JSATTENTION:'views/js/js-attention.html',
        /*
         js规范-JS管理ajax
         get
         params:{}
         author:xia
         */
        GET_JSAJAX:'views/js/js-ajax.html'
    },
    getHtmlStructure : function(params,callback) {
        this._ajaxHander.get(this._url.GET_HTMLSTRUCTURE,function(data) {
            callback(data);           
        }); 
    },
    getHtmlFormat: function(params,callback) {
        this._ajaxHander.get(this._url.GET_HTMLFORMAT,function(data) {
            callback(data);
        });
    },
    getHtmlContent: function(params,callback) {
        this._ajaxHander.get(this._url.GET_HTMLCONTENT,function(data) {
            callback(data);
        });
    },
    getCssFormat: function(params,callback) {
        this._ajaxHander.get(this._url.GET_CSSFORMAT,function(data) {
            callback(data);
        });
    },
    getCssName: function(params,callback) {
        this._ajaxHander.get(this._url.GET_CSSNAME,function(data) {
            callback(data);
        });
    },
    getCssOptimize: function(params,callback) {
        this._ajaxHander.get(this._url.GET_OPTIMIZE,function(data) {
            callback(data);
        });
    },
    getJsFormat: function(params,callback) {
    this._ajaxHander.get(this._url.GET_JSFORMAT,function(data) {
        callback(data);
    });
    },
    getJsAttention: function(params,callback) {
        this._ajaxHander.get(this._url.GET_JSATTENTION,function(data) {
            callback(data);
        });
    },
    getJsAjax: function(params,callback) {
        this._ajaxHander.get(this._url.GET_JSAJAX,function(data) {
            callback(data);
        });
    }
};