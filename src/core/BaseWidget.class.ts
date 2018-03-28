import Base = require("core/Base.class");
export = BaseWidget;
class BaseWidget extends Base {
    template:string;  //html模板
    parameters;
    constructor(parameters) {
        super();
        this.parameters = parameters;
        this.start();
    }
    // 初始化函数
    start(){
       console.log('test');
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

    // 加载html模板
    getHtmlTemplate(){
        
    }
}