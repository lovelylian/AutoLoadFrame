import BaseWidget = require("core/BaseWidget.class");
export = ContentDiv;
class ContentDiv extends BaseWidget{
      constructor(params){
            super(params);
      }
      start(){
          console.log('test-1');
      }
}