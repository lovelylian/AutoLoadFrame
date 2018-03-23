import _ = require('lodash');
import s = require("../widget/SideBar/Widget");
//typescript 里面添加requirejs，让其能在模块内使用
declare var require:(moduleId:string) => any;
export = LoadManager;
class LoadManager{
  // 加载配置文件
  public load(config){
        if(!config){
          console.log("没有配置文件！");
          return;
        }
        // 提取需要加载的参数数组
        this.loadWidget(config.loadOnStartWidgets);
  }
  private loadWidget(widgetConfig){
        // var startWidget = widgetConfig.loadOnStartWidgets;
        // startWidget.forEach(element => {
        //    var mainUrl = element.url;

        // });
     var ss = new s(1);
  }
}
