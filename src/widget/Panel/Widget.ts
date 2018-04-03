import BaseWidget = require("core/BaseWidget.class");
export = Panel;
class Panel extends BaseWidget{
     constructor(params){
       super(params);
     }
     start(){
        this.setHtml(this.template,".widget-contentdiv")
     }
}