import BaseWidget = require("core/BaseWidget.class");
import Util = require("core/Util.class");
import _ = require('vender/Lodash/lodash');

///
///
declare var require: (moduleId, callback) => any;
export = Panel;
class Panel extends BaseWidget {
  widgetParams: any;
  constructor(panel_params, params) {
    //  先加载面板
    super(panel_params);
    this.widgetParams = params;
  }

  /**
   * 面板初始化函数
   * @memberof Panel
   */
  start() {
    // 面板上每个标题框有长度现在，如果标题长度太大会发生问题
    if(this.widgetParams.label.length>4){
      this.widgetParams.label = this.widgetParams.label.substring(0,4);
    }
    //  将面板加载进入该去的位置
    this.setHtml(_.template(this.template)({ 'title': this.widgetParams.label }), ".widget-contentdiv");
    //  加载需要加载到面板的内容
    this.loadFunctionWidget();
    // 动作函数初始化
    this.panelOperation();
  }
  
  /**
   * 加载组件
   * @private
   * @memberof Panel
   */
  private loadFunctionWidget() {
    require([Util.connectHtmlUrl(this.widgetParams)], function () {
      new arguments[0](this.widgetParams);
    }.bind(this));
  }

  /**
   * 面板上相关的操作
   * @private
   * @memberof Panel
   */
  private panelOperation() {
    $('.panel_title img').on('click', function (e) {
      var action = $(e.currentTarget).data("action");
      // 关闭，清空容器内所有面板（这个很粗糙，后面改进）
      if (action == 'close') {
        // 清空进程
      this.AppX.PanelProcessorControl = [];
        // 清空面板内容
        $('.widget-contentdiv').empty();
      } else if (action == 'min') {
        // 缩小操作

      } else if (action == 'max') {
        // 最大化操作

      } else {
        // 前端的面板操作中有不支持内容
        console.log("不支持该操作，请联系技术人员");
      }
    }.bind(this))
  }
}