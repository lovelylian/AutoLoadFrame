import BaseWidget = require("core/BaseWidget.class");
export = Companylocation;
class Companylocation extends BaseWidget{
   constructor(params){
       super(params);
   }
   start(){
       this.setHtml(this.template,".panel_content")
   }
}