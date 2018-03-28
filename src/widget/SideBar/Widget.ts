import BaseWidget = require("../../core/BaseWidget.class.js");
export = SideMenu;
class SideMenu extends BaseWidget {
    constructor(params) {
        super(params);
        this.parameters = params;        
    } 
    start(){
        this.setHtml(this.template);
    }
    destroy(){
         
    }
}