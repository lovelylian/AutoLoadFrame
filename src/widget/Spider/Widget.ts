import BaseWidget = require("core/BaseWidget.class");
export = Spider;
class Spider extends BaseWidget{
   constructor(params){
       super(params);
   }
   start(){
       this.setHtml(this.template);
   }
}