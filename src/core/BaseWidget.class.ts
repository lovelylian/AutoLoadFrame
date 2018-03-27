import Base = require("core/Base.class");
export = BaseWidget;
class BaseWidget extends Base {
    constructor(parameters) {
        super();
        this.start();
    }
    // 初始化函数
    start(){
       console.log('test');
    }
    destroy(){
      
    }
}