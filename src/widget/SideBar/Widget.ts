import BaseWidget = require("../../core/BaseWidget.class.js");
export = SideMenu;
class SideMenu extends BaseWidget {
    constructor(params) {
        super(params);
        this.parameters = params;        
    } 
    start(){
        this.setHtml("<p>success</p>");
        console.log("sidemenu",this.parameters);
    }
    destroy(){
         
    }
}