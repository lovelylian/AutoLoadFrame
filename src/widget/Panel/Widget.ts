import BaseWidget = require("core/BaseWidget.class");
import Util = require("core/Util.class");
///
///
declare var require: (moduleId, callback) => any;
export = Panel;
class Panel extends BaseWidget{
    widgetParams:any;
     constructor(panel_params,params){
      //  先加载面板
       super(panel_params);
       this.widgetParams = params;
     }
     start(){
      //  将面板加载进入该去的位置
        this.setHtml(this.template,".widget-contentdiv");
     //  加载需要加载到面板的内容
        this.loadFunctionWidget();
     }
     private loadFunctionWidget(){
         require([Util.connectHtmlUrl(this.widgetParams)],function(){
              new arguments[0](this.widgetParams);
         }.bind(this));
     }
}