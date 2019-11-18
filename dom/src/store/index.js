import {createStore }from 'redux'

let reducer=(state,action)=>{
    // console.log(action)
    if(action.type==='GETdata'){
        state.data=action.data
    }
    if(action.type==='ADDdata'){
        state.adddata=action.data
    }
    //点击删除 添加到adddata里
    if(action.type==='REMOVE'){
        state.data.splice(action.data.id,1)
        state.adddata.push(action.data)
        return {...state,data:[...state.data],adddata:[...state.adddata]}
    }
    //添加到add
    if(action.type==='ADD'){
        state.adddata.splice(action.data.id,1)
        state.data.push(action.data)
        return {...state,data:[...state.data],adddata:[...state.adddata]}

    }
    return {...state}
}
let initstate={
    data:[],//添加后的
    adddata:[]//没有添加的
}

let store=createStore(reducer,initstate)
export default store