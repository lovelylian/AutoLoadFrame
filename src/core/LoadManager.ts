import util = require("./Util.class");
//typescript 里面添加requirejs，让其能在模块内使用
///
///
declare var require: (moduleId, callback) => any;
export = LoadManager;
class LoadManager {
  modelUrl = [];
  // 加载配置文件
  public load(config) {
    if (!config) {
      console.log("没有配置文件！");
      return;
    }
    // 提取需要加载的参数数组
    this.loadWidget(config.loadOnStartWidgets);
  }
  private loadWidget(widgetConfig) {
    // 组织模块
    for (let i = 0; i < widgetConfig.length; i++) {
      this.modelUrl.push(util.connectHtmlUrl(widgetConfig[i]));
    }
      // 加载各个模块并且初始化
      require(this.modelUrl, function () {
        for (let i = 0; i < arguments.length; i++) {
          new arguments[i](widgetConfig[i]);
        }

      });

  }

}
