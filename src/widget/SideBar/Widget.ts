import _ = require("vender/Lodash/lodash");
import BaseWidget = require("core/BaseWidget.class");
export = SideMenu;
class SideMenu extends BaseWidget {
    constructor(params) {
        super(params);
    }

    // 初始化加载
    start() {
        this.setHtml(this.template);
        var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
        var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
         console.log(compiled({ 'users': ['fred', 'barney'] }));
    }

    // 加载菜单栏配置数据
    private loadSideBarConfigData(){
          var menuBarData = this.AppX.menuBarContent;
          
    }
    // 分析配置文件中菜单栏 对外透明，不暴露
    private analyzeSideBarData(){
       
    }
    // 销毁
    destroy() {

    }
}