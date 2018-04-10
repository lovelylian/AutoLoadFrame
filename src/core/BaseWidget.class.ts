/*
 * @Author: sekem 
 * @Date: 2018-04-10 13:50:40 
 * @Last Modified by: sekem
 * @Last Modified time: 2018-04-10 15:07:58
 */
import Base = require("core/Base.class");
export = BaseWidget;
/**
 * 
 * 限制配置文件的更改引发的错误，
 * 如果配置文件发送更改，接口中应该声明，
 * 不然会报错
 * @interface appx
 */
interface appx {
    hostUrl: string;
    appConfig: any;
    css: string;
    PanelProcessorControl: Array<string>;
}

class BaseWidget extends Base {
    // 模板的字符串形式
    template: string;
    // 配置文件中的配置
    AppX: appx = window["AppX"]; //配置文件
    // 建立组件时传递过来的配置参数
    modelConfigParam: any;

    constructor(modelConfigParams) {
        super();
        this.modelConfigParam = modelConfigParams;
        this.setStyleLink();
        this.getHtmlTemplate();
    }

    /**
     * 
     * 
     * @param {string} htmlString 模板字符串
     * @param {any} [selector]   选择器
     * @memberof BaseWidget
     */
    setHtml(htmlString: string, selector?) {
        // 准许使用者自己定义选择器
        if (selector) {
            $(selector).append(htmlString);
        } else if(this.modelConfigParam.panel){
            // 判断属于哪个面板(目前仅支持Panel面板，其他面板以后再添加)
            if(this.modelConfigParam.panel=='Panel'){
                $('.panel_content').append(htmlString);
            }
        }else{
            // 不添加在面板上，直接添加到body中
            $("body").append(htmlString);
        }
    }

    /**
     * 加载组件的模板，字符串的加载形式
     * @memberof BaseWidget
     */
    getHtmlTemplate() {
        $.ajax({
            url: this.modelConfigParam.url.replace(/\/*$/, "/") + this.modelConfigParam.main + ".html",
            success: function (data) {
                // 将加载的数据存入模板中
                this.template = data;
            }.bind(this),
            error: function (error) {
                console.log("错误日志:", error);
            },
            complete: function () {
                // 加载完成后，执行模块的start方法
                this.start();
            }.bind(this)
        });
    }

    /**
     * 在index.html页面中添加css的连接
     * @memberof BaseWidget
     */
    setStyleLink() {
        var cssLink = $('<link href="./' + this.modelConfigParam.url.replace(/\/*$/, "/") + this.AppX.css + '" rel="stylesheet" type="text/css"/>');
        $($('head')[0]).append(cssLink);
    }
}