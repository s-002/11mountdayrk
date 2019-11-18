import React,{Component} from 'react'
import Request from '../../until/request'
import {connect} from 'react-redux'
class Home extends Component{
    state={
        list:[]
    }
    onclick=()=>{//点击更多跳转到 添加页面
        // console.log(this.props.history)
        this.props.history.push('/glabout')
    }
    render(){
        let listdata=this.props.adddata.length===0?this.state.list:this.props.adddata
        return <div>
            <div className='about-top'>
                <span> 首页 </span> 
                <input type='text' placeholder='全部应用' ></input>
            </div>
            <div className='add'>
                <h4>我的应用</h4>
               <dl  onClick={()=>{this.onclick()}}>
                   <dd>+</dd>
                   <dt>添加</dt>
               </dl>
            </div>
            <div className='div'>
                <h4>更多应用</h4>
                <span>最近应用</span>
                <div  className="navlist">
                    {
                        listdata.map((item,index)=>{
                            return <dl key={index}>
                                    <dd>图</dd>
                                    <dt>{item.name}</dt>
                                </dl>
                        })
                    }
                    <dl>
                        <dd>图</dd>
                        <dt>更多</dt>
                    </dl>
                </div>
            </div>
         </div>
    }
    componentDidMount(){
        Request('/add/data').then(data=>{
            this.setState({
                list:data
            })
        })
    }
}


let mapStateToProps=(store)=>{
    let {data,adddata}=store
    return {
        data,
        adddata
    }
}
let mapDispatchToProps=(dispatch)=>{
    return {
      
    }
}
Home=connect( mapStateToProps,mapDispatchToProps)(Home)
export default Home