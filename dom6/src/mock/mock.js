import Mock,{Render} from 'mockjs'

let data =Mock.mock({
    'data|10':[{
        "id|+1":0,
        name:'@cname',
        title:'@ctitle(7)',
        "num|+10":330,
        img:'@img(100x100)',
    }]
})

Mock.mock(/\/api\/data/,'get',function(options){
    return data.data
})