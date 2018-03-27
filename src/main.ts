// 配置文件
import config = require("./configure");
import LoadManager = require('./core/LoadManager');
export = Main;
class Main{
    loadConfig(){
        (new LoadManager).load(config.appConfig);
    }
}
// 加载相关页面
(new Main()).loadConfig();

