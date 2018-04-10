/*
 * @Author: sekem 
 * @Date: 2018-04-10 11:58:29 
 * @Last Modified by: sekem
 * @Last Modified time: 2018-04-10 14:15:23
 */

/**
 * 生命周期方法 start--组件加载  active--组件激活  wait--组件挂起  destory--组件销毁  
 * 
 * @class Base
 */
export = Base;
class Base {
    constructor() { };

    start() { };
    // 激活状态
    active() { };
    // 挂起状态
    wait() { };
    // destroy() 销毁阶段
    destroy() { };
}