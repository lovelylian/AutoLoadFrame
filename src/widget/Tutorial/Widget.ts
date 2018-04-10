import BaseWidget = require("core/BaseWidget.class");
export = Tutorial;
class Tutorial extends BaseWidget{
   constructor(params){
       super(params);
   }
   start(){
       this.setHtml(this.template)
   }
}