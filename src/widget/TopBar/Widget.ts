import BaseWidget = require("core/BaseWidget.class");
export = TopBar;
class TopBar extends BaseWidget{
      constructor(params){
            super(params);
      }
      start(){
          this.setHtml(this.template);
      }
}