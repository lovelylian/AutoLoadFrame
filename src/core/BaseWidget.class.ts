import Base = require("core/Base.class");
export = BaseWidget;
class BaseWidget extends Base {
    template:string;  //html模板
    AppX:any = window["AppX"]; //配置文件
    parameters:any; //初始化传递过来的参数
    constructor(parameters) {
        super();
        this.parameters = parameters;
        this.setStyleLink();
        this.getHtmlTemplate();
    }
    // 初始化函数
    start(){

    }
    destroy(){
      
    }

    // 设置模板
    setHtml(htmlString:string,selector?){
         if(selector){
             $(selector).append(htmlString);
         }else{
             $("body").append(htmlString);
         }
    }

    // 获取html模板
    getHtmlTemplate(){
        $.ajax({
            url:this.parameters.url.replace(/\/*$/,"/")+this.parameters.main+".html",
            success:function(data){
                // 将加载的数据存入模板中
                this.template= data;
            }.bind(this),
            error:function(error){
                console.log("错误日志",error);
            },
            complete:function(){
                this.start();
            }.bind(this)
        });
    }

    // 设置css连接
    setStyleLink(){
        var cssLink = $('<link href="./' +this.parameters.url.replace(/\/*$/,"/")+'css/style.css" rel="stylesheet" type="text/css"/>');
        $($('head')[0]).append(cssLink);
    }
}