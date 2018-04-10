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

  start() {
    //  将面板加载进入该去的位置
    this.setHtml(_.template(this.template)({ 'title': this.widgetParams.label }), ".widget-contentdiv");
    //  加载需要加载到面板的内容
    this.loadFunctionWidget();
    // 动作函数初始化
    this.panelOperation();
  }

  private loadFunctionWidget() {
    require([Util.connectHtmlUrl(this.widgetParams)], function () {
      new arguments[0](this.widgetParams);
    }.bind(this));
  }
  //  面板的最大化等操作
  private panelOperation() {
    $('.panel_title img').on('click', function (e) {
      var action = $(e.currentTarget).data("action");
      // 关闭，清空容器内所有面板（这个很粗糙，后面改进）
      if (action == 'close') {
        $('.widget-contentdiv').empty();
      } else if (action == 'min') {
        // 缩小操作
        
      }else if(action == 'max'){
        // 最大化操作

      }else{
        // 前端的面板操作中有不支持内容
        console.log("不支持该操作，请联系技术人员");
      }
    })
  }
}