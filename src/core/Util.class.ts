
// 解析widget.ts地址
export function connectHtmlUrl(config){
      var url = config.url.replace(/\/*$/,"/");
       var main = config.main;
       return url+main;

}

// 整合模块加载的url地址
export function connectModelUrl(modelposition:string,modelname:string){
         modelposition = modelposition.replace(/\/*$/,"/");
         return modelposition+modelname;
}