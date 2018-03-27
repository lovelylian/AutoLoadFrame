import _ = require('lodash');
//typescript 里面添加requirejs，让其能在模块内使用
///
///
declare var require:(moduleId,callback) => any;
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
            for(var i=0;i<widgetConfig.length;i++){
                let modelUrl = widgetConfig[i].url;
                   require([modelUrl],function(){
                     new arguments[0](8);
                   });
            }
  }
}
