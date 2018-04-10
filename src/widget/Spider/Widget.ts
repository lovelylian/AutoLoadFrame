import BaseWidget = require("core/BaseWidget.class");
export = Spider;
class Spider extends BaseWidget {
    constructor(params) {
        super(params);
    }
    start() {
        //    加载模块
        this.setHtml(this.template);
        
    }
}