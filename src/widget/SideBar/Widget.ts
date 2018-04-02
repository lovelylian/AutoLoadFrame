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
        var html = this.loadSideBarConfigData();
        $(".widget-sideBar").append(html);
        // var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
        // var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
        //  console.log(compiled({ 'users': ['fred', 'barney'] }));
    }

    // 加载菜单栏配置数据(后期可以优化)
    private loadSideBarConfigData() {
        var menuBarData = this.AppX.appConfig.menuBarContent;
        var html = "";
        var html_temp = "";
        menuBarData.forEach(element => {
            html = html + "<li><label for='"+element.id+"'><img src='"+element.icon+"'/>" + element.label + "</label><input type='checkbox' id='"+element.id+"'>";
            element.data.forEach(element => {
                html_temp = html_temp + "<li "+"data-inpanel="+element.inpanel+">" + element.label + "</li>"
            });
            html_temp = "<ul>" + html_temp + "</ul>";
            html = html + html_temp + "</li>";
            html_temp = "";
        });
        return "<ul>" + html + "</ul>";

    }
    // 分析配置文件中菜单栏 对外透明，不暴露
    private analyzeSideBarData() {

    }
    // 销毁
    destroy() {

    }
}