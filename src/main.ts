/*
 * @Author: sekem 
 * @Date: 2018-04-10 14:07:21 
 * @Last Modified by: sekem
 * @Last Modified time: 2018-04-10 14:12:47
 */

import config = require("configure");
import LoadManager = require('core/LoadManager');

/**
 * @class Main 入口函数
 */
class Main {

    /**
     * 加载加载管理器的入口函数，同时将相关配置传递过去
     * @memberof Main
     */
    loadConfig() {
        (new LoadManager).load(config.appConfig);
    }
}

(new Main()).loadConfig();

