import BaseWidget = require("../../core/BaseWidget.class.js");
export = SideMenu;
class SideMenu extends BaseWidget {
    constructor(parameters) {
        super(parameters);
    } 
    start(){
        console.log('this is sidemenu');
    }
    destroy(){
         
    }
}