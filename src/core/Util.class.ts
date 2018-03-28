
// 解析widget.ts地址
export function connectHtmlUrl(config){
      var url = config.url.replace(/\/*$/,"/");
       var main = config.main;
       return url+main;

}