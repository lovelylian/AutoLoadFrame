// 去除URL最后的“/”（如果有）
var hostUrl = location.href.replace("/\/+$/", "");
var AppX = {
    hostUrl: hostUrl,
    // css模块的文件目录及名称
    css:'css/style.css',
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
               "main":"Widget",
               "url":"widget/TopBar"
            },
            {
                "name":"sideBar",
                "description":"页面左侧菜单栏",
                "main":"Widget",
                "url":"widget/SideBar"
            },
            {
                "name":"menuBar",
                "description":"页面右侧内容区域",
                "main":"Widget",
                "url":"widget/ContentDiv"
            },
            {
                "name":"footerBar",
                "description":"页面底部相关权利说明",
                "main":"Widget",
                "url":"widget/FooterBar"
            }
        ],
        "menuBarContent":[
            {
                "id":"shiyongshuoming",
                "label":"使用说明",
                "icon":"widget/SideBar/image/explain.png",//暂时还没找到图片
                "data":[{
                    "id":"shangshoujiangjie",
                    "label":"上手讲解",
                    "inpanel":"Panel",
                    // js和html模块名
                    "main":"Widget",
                    // 模块地址
                    "url":"widget/Tutorial"
                }]
            },
            {
                "id":"shujujiansuo",
                "label":"数据检索",
                "icon":"widget/SideBar/image/search.png",//暂时无图片
                "data":[{
                    "id":"shezhipachong",
                    "label":"设置爬虫",
                    "inpanel":"Panel",
                    "main":"Widget",
                    "url":"widget/Spider"
                }]
            },
            {
                "id":"dituxianshi",
                "label":"地图显示",
                "icon":"widget/SideBar/image/map.png",//暂时无图片
                "data":[{
                    "id":"xianshigongsiweizhi",
                    "label":"显示公司位置",
                    "inpanel":"Panel",
                    "main":"Widget",
                    "url":"widget/Companylocation"
                }]
            },
            {
                "id":"shujuzhanshi",
                "label":"数据展示",
                "icon":"widget/SideBar/image/show.png",//暂时无图片
                "data":[{
                    "id":"zhaopinqushi",
                    "label":"招聘趋势",
                    "inpanel":"Panel",
                    "main":"Widget",
                    "url":"widget/Trend"
                }]
            }


        ],
        "panel":{
            "name":"panel",
            "description":"面板",
            "main":"Widget",
            "url":"widget/Panel",
            "conmentarea":""
        }

    },
    // 面板是否已经存在
    PanelProcessorControl:[],
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