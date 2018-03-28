import BaseWidget = require("core/BaseWidget.class");
export = TopBar;
class TopBar extends BaseWidget{
      constructor(params){
            super(params);
            this.parameters = params;
      }
      start(){
          console.log("topbar",this.parameters);
      }
}