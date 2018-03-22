import Base = require("core/Base.class");
export = BaseWidget;
class BaseWidget extends Base {
    constructor(parameters) {
        super();
        this.start();
    }
    start(){
        console.log('this is basewidget');   
    }
    destroy(){
      
    }
}