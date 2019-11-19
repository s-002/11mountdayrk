import {createStore} from 'redux'

let reducer=(state,action)=>{
    // console.log(state)
    //加
    if(action.type==='add'){
        ++state.list[action.data].num
        return {...state,list:[...state.list]}
    }
    //减
    if(action.type==='remove'){
        if(state.list[action.data].num<=0){
            state.list[action.data].num=0
        }
        else{
            --state.list[action.data].num
        }
        return {...state,list:[...state.list]}
    }
    //反选
    if(action.type==='CHECK'){
        state.list[action.index].flage=!state.list[action.index].flage
        state.allcheck=state.list.every(item=>{
            return item.flage
        })
        return {...state,list:[...state.list]}
    }
    //全选
    if(action.type==='ALLCHECK'){
        state.allcheck=!state.allcheck
        state.list.map(item=>{
            item.flage=state.allcheck
        })
        return {...state,list:[...state.list]}
    }
    return {...state}
}
let initState={
    list:[
        {name:'黄豆芽300g+15g/份',money:1.38,num:0,flage:false},
        {name:'昆明芦笋300g+15g/份',money:3.38,num:0,flage:false},
        {name:'紫长茄450g+30g/份',money:5.4,num:0,flage:false},
        {name:'土豆300g+10g/份',money:2.58,num:0,flage:false},
        {name:'黄瓜0g+15g/份',money:4.18,num:0,flage:false},
    ],
    allcheck:false
}

let store=createStore(reducer,initState)
export default store