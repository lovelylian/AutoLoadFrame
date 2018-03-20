// 去除URL最后的“/”（如果有）
var hostUrl = location.href.replace("/\/+$/", "");
var AppX = {
    hostUrl: hostUrl,
    appConfig: {
        // infoBar 包含底部title 及相应的logo图标和用户图标
        "infoBar": {
            "title": "余夜",
            "logo": "./vender/Logo/logo.png",
            "userimage":"./vender/Logo/logo2.png",//系统先默认图标，暂时不支持修改
        },
        // 初始化加载
        "loadOnStartWidgets":[
            {
               "name":"topBar",
               "description":"页面顶部菜单条",
               "url":"./widget/topBar"
            },
            {
                "name":"menuBar",
                "description":"页面左侧菜单栏",
                "url":"./widget/menuBar"
            },
            {
                "name":"menuBar",
                "description":"页面右侧内容区域",
                "url":""
            },
            {
                "name":"footerBar",
                "description":"页面底部相关权利说明",
                "url":"./widget/FooterBar"
            }
        ],
        "menuBarContent":[
            {
                "id":"shiyongshuoming",
                "label":"使用说明",
                "icon":"./XXX",//暂时还没找到图片
                "data":[{
                    "id":"shangshoujiangjie",
                    "label":"上手讲解",
                    "panel":"MenuPanel"
                }]
            },
            {
                "id":"shujujiansuo",
                "label":"数据检索",
                "icon":"./XXX",//暂时无图片
                "data":[{
                    "id":"shezhipachong",
                    "label":"设置爬虫",
                    "panel":"MenuPanel"
                }]
            },
            {
                "id":"dituxianshi",
                "label":"地图显示",
                "icon":"./XXX",//暂时无图片
                "data":[{
                    "id":"xianshigongsiweizhi",
                    "label":"显示公司位置",
                    "panel":"MenuPanel"
                }]
            },
            {
                "id":"shujuzhanshi",
                "label":"数据展示",
                "icon":"./XXX",//暂时无图片
                "data":[{
                    "id":"zhaopinqushi",
                    "label":"招聘趋势",
                    "panel":"MenuPanel"
                }]
            }


        ]

    },
    runtimeConfig:{
        popup:null,
        toast:null,
        loadWait:null
    }
}
// 全局变量
window["AppX"] = AppX;
// 作为模块导出
export = AppX;