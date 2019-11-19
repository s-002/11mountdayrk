import React,{Component} from 'react'
import {connect} from 'react-redux'
import '../css/css.css'
class CartDom extends Component{
    state={
        allcheck:false
    }
    maxmoney=(list)=>{
        let maxmoney=0
        list.forEach(item=>{
            if(item.flage){
                maxmoney+=item.num*item.money
            }
        })
        return maxmoney
    }
    maxnum=(list)=>{
        let maxnum=0
        list.forEach(item=>{
            if(item.flage){
                maxnum+=item.num
            }
            
        })
        return maxnum
    }
   
    render(){
        let {list,stateclick,check,allcheck,allcheckclick}=this.props
        
        return <div>
            <div className='topnav'>
                <span> </span>
                <h5>购物车</h5>
                <span style={{color:'skyblue'}}>删除</span>
            </div>
            <div className='content'> 
                {
                    list.map((item,index)=>{

                        return <dl key={index}>
                            <input type='checkbox' checked={item.flage} onClick={()=>{check(index)}}/>
                            <dd style={{background:'#eee'}}></dd>
                            <dt>
                                <p>{item.name}</p>
                                <p>
                                    <span style={{marginRight:'20px',color:'red'}}>{item.money}</span>
                                    <button onClick={()=>{stateclick('remove',index)}}>-</button>
                                    <span>{item.num}</span>
                                    <button onClick={()=>{stateclick('add',index)}}>+</button>
                                </p>
                            </dt>
                        </dl>
                    })
                }
                <input type='checkbox' checked={allcheck} onClick={()=>{allcheckclick(allcheck)}}/>全选
                <p>合计：{this.maxmoney(list)}</p>
                <p>数量：{this.maxnum(list)}</p>
            </div>
        </div>
    }
}

let a=(store)=>{
    // console.log(store)
    let {list,allcheck}=store
    return {
        list,
        allcheck
    }   
}

let b=(dispatch)=>{
    return {
        ///加减
        stateclick(type,index){
            dispatch({
                type,
                data:index
            })
        },
        //反选
        check(index){
            dispatch({
                type:'CHECK',
                index
            })
        },
        //全选
        allcheckclick(flage){
            dispatch({
                type:'ALLCHECK',
                flage
            })
        }
        
    }
}

CartDom=connect(a,b)(CartDom)
export default CartDom