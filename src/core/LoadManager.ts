import _ = require('lodash');
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
    

  }
}