import Mock,{Random} from 'mockjs'

let data=Mock.mock({
    "list|10":[{
        "id|+1":1,
        title:'@ctitle(7)',
        name:'@cname',
        description:'@ctitle(15)',
        banner:Random.image('200x100'),
        num:'3000-5000元/月',
        span:'@ctitle(2)',
    }],
    "list1|10":[{
        "id|+1":1,
        title:'@ctitle(7)',
        description:'@ctitle(15)',
        banner:Random.image('200x100'),
        num:'3000-5000元/月',
        span:'@ctitle(2)',
    }],
    "list2|10":[{
        "id|+1":1,
        title:'@ctitle(7)',
        description:'@ctitle(15)',
        banner:Random.image('200x100'),
        num:'3000-5000元/月',
        span:'@ctitle(2)',
    }]
})
Mock.mock(/\/api\/getdata/,'get',function(options){
    // console.log(options){url,type,body}
    let query=options.url.split('?')[1]
    let arr=query.split('=')[1]
    // console.log('arr.',arr)
    // return data.list
    // console.log(data[arr])
    return data[arr]
})