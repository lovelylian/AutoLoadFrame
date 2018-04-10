/*
 * @Author: sekem 
 * @Date: 2018-04-10 14:05:23 
 * @Last Modified by: sekem
 * @Last Modified time: 2018-04-10 14:06:19
 */
import util = require("./Util.class");

//typescript 里面添加requirejs，让其能在模块内使用（规则这样）
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
  
  /**
   * 
   * 
   * @private
   * @param {any} widgetConfig 配置文件中的相关配置，参考config.ts中的loadonstartwidgets存储的对象
   * @memberof LoadManager 加载模块组件
   */
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
