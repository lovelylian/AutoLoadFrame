import _ = require("vender/Lodash/lodash");
import BaseWidget = require("core/BaseWidget.class");
///
///
declare var require: (moduleId, callback) => any;
export = SideMenu;
class SideMenu extends BaseWidget {
    optionParams:any={};
    constructor(params) {
        super(params);
    }

    /**
     * 面板加载 菜单栏面板的加载
     * @memberof SideMenu
     */
    start() {
        this.setHtml(this.template);
        var html = this.loadSideBarConfigData();
        $(".widget-sideBar").append(html);
        this.packageContentParams();
    }

/**
 * 加载菜单栏配置数据(后期可以优化)
 * @private
 * @returns 返回菜单面板里面的相关选项
 * @memberof SideMenu
 */
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
    
    /**
     * 点击事件，封装对应的内容参数，并加载到面板
     * @memberof SideMenu
     */
    packageContentParams(){
        $('ul li ul li').on('click',function(e){
            // 点击后拿到数据，封装到对应的对象中去;
             this.optionParams = {
                "panel":$(e.currentTarget).data('inpanel'),
                "main":$(e.currentTarget).data("main"),
                "url":$(e.currentTarget).data("url"),
                "label":$(e.currentTarget).data("label"),
                "id":$(e.currentTarget).data("id")
            };
           this.loadAccordPanelAndContent();
        }.bind(this));
    }
    /**
     * 加载对应的面板
     * @param {any} params sidemenu中相关选项中包含的数据，封装成params对象
     * @returns 
     * @memberof SideMenu
     */
    loadAccordPanelAndContent(){
        var flag = false;
        this.AppX.PanelProcessorControl.forEach(element => {
            if(element==this.optionParams.id){
                flag=true;
            }
        });
        // 管理进程，房子重复添加
        if(flag){
            return;
        }
        if(this.optionParams.panel=='Panel'){
            // 判断面板是否存在
              require(["widget/Panel/Widget"],function(){ 
                   new arguments[0](this.AppX.appConfig.panel,this.optionParams);
                   this.AppX.PanelProcessorControl.push(this.optionParams.id);
                }.bind(this));
        }else if(this.optionParams.panel=='halfPanel'){

        }else if(this.optionParams.panel=='fullPanel'){

        }else{
            console.log('没有提供对应的面板，请检查！');
        }
    }
    

    destroy() {

    }
}