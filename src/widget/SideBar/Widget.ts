import _ = require("vender/Lodash/lodash");
import BaseWidget = require("core/BaseWidget.class");
///
///
declare var require: (moduleId, callback) => any;
export = SideMenu;
class SideMenu extends BaseWidget {
    configObj:any;
    constructor(params) {
        super(params);
    }

    // 初始化加载
    start() {
        this.setHtml(this.template);
        var html = this.loadSideBarConfigData();
        $(".widget-sideBar").append(html);
        this.chooseContent();
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
                html_temp = html_temp + "<li "+"data-inpanel='"+element.inpanel+"' data-id="+element.id+" data-main='"+element.main+"' data-url='"+element.url+"' data-label='"+element.label+"'>" + element.label + "</li>"
            });
            html_temp = "<ul>" + html_temp + "</ul>";
            html = html + html_temp + "</li>";
            html_temp = "";
        });
        return "<ul>" + html + "</ul>";

    }
    
    // 点击事件，加载面板
    chooseContent(){
        $('ul li ul li').on('click',function(e){
            // 点击后拿到数据，封装到对应的对象中去;
            var params = {
                "panel":$(e.currentTarget).data('inpanel'),
                "main":$(e.currentTarget).data("main"),
                "url":$(e.currentTarget).data("url"),
                "label":$(e.currentTarget).data("label"),
                "id":$(e.currentTarget).data("id")
            };
           this.choosePanel(params);
        }.bind(this));
    }
    // 加载对应的面板
    choosePanel(params){
        this.configObj = params;
        if(params.panel=='Panel'){
              require(["widget/Panel/Widget"],function(){
                   new arguments[0](this.configObj);
              }.bind(this));
        }else if(params.panel=='halfPanel'){

        }else if(params.panel=='fullPanel'){

        }else{
            console.log('没有提供对应的面板，请检查！');
        }
    }
    // 销毁
    destroy() {

    }
}