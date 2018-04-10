/*
 * @Author: sekem
 * @Date: 2018-04-10 11:54:15 
 * @Last Modified by: sekem
 * @Last Modified time: 2018-04-10 11:54:37
 */

// 解析widget.ts地址
export function connectHtmlUrl(config) {
      var url = config.url.replace(/\/*$/, "/");
      var main = config.main;
      return url + main;

}


export function connectModelUrl(modelposition: string, modelname: string) {
      modelposition = modelposition.replace(/\/*$/, "/");
      return modelposition + modelname;
}