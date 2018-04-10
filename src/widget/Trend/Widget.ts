import BaseWidget = require("core/BaseWidget.class");
export = Trend;
class Trend extends BaseWidget{
   constructor(params){
       super(params);
   }
   start(){
       this.setHtml(this.template)
   }
}