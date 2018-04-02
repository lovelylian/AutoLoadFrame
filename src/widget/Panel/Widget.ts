import BaseWidget = require("core/BaseWidget.class");
export = Panel;
class Panel extends BaseWidget{
     constructor(params){
       super(params);
       console.log(params);
     }
     start(){
      this.setHtml(this.template);  
     }
}