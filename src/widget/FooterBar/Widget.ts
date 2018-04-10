import BaseWidget = require("core/BaseWidget.class");
export = FooterBar;
class FooterBar extends BaseWidget{
      constructor(params){
            super(params);
            this.modelConfigParam = params;
      }
      start(){
            this.setHtml(this.template);
      }
}