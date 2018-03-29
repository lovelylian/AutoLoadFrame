import BaseWidget = require("core/BaseWidget.class.js");
export = SideMenu;
class SideMenu extends BaseWidget {
    constructor(params) {
        super(params);
        this.parameters = params;        
    } 

    // 初始化加载
    start(){
        this.setHtml(this.template);
    }
   
    // 销毁
    destroy(){
         
    }
}