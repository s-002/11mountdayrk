let data=[
    {name:'医疗健康',id:0},{name:'彩票',id:1}, {name:'爱心捐赠',id:2}, {name:'我的小程序',id:3},{name:'蚂蚁庄园',id:4},
    {name:'造点新货',id:5}, {name:'花呗',id:6}, {name:'红包',id:7}, {name:'混率换算',id:8},
    {name:'体育服务',id:10}, {name:'信用卡还款',id:11}, {name:'记账本',id:12},{name:'医疗健康',id:13},
    {name:'发票',id:14}, {name:'安全备忘',id:15}, {name:'车主服务',id:16}
]
let data2=[
    {name:'转账',id:0}, {name:'饿了么外卖',id:1}, {name:'充值中心',id:2}, {name:'余额宝',id:3},
    {name:'淘票票电影',id:4}, {name:'生活缴费',id:5}, {name:'芝麻信用',id:6}, {name:'城市服务',id:7},
    {name:'交通出行',id:8}, {name:'蚂蚁森林',id:9}, {name:'商家服务',id:10},
]
let mock={
    '/get/data'(){//添加后的
        return data2
    },
    '/add/data'(){//没有添加的
        return data
    }
}
export default mock