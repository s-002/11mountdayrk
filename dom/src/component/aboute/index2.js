import React,{Component} from 'react'
import Request from '../../until/request'
import {connect} from 'react-redux'
class Home2 extends Component{
    state={
        
    }
    btnback=()=>{
        // console.log(this.props)
        this.props.history.goBack()
    }
    compelet=()=>{
        this.props.history.push('/about')
    }
    render(){
        // console.log(this.props)
        let {data,adddata} =this.props
        return <div>
             <div className='glabout-top'>
                <span onClick={()=>{this.btnback()}}> 取消 </span> 
                <h5>管理我的应用</h5>
                <button onClick={()=>{this.compelet()}}>完成</button>
            </div>
            <div>
                <p></p>
            </div>
            <div className="navlist">
                {
                    data.map((item,index)=>{
                        return <dl key={index}>
                               
                                <dd onClick={()=>{this.props.remove(item)}}> X </dd>
                                <dt>{item.name}</dt>
                            </dl>
                    })
                }
            </div>
            <div>
                <h5>更多应用</h5>
            </div>
            <div className="navlist">
                {
                    adddata.map((item,index)=>{
                        return <dl key={index}>
                               
                                <dd  onClick={()=>{this.props.add(item)}}> + </dd>
                                <dt>{item.name}</dt>
                            </dl>
                    })
                }
            </div>
        </div>
    }
    componentDidMount(){
        this.props.getdate()
        this.props.getadddate()
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
        getdate(){//添加后的数据
            Request('/get/data').then(data=>{
                dispatch({
                    type:'GETdata',
                    data:data
                })
            })
        },
        getadddate(){//没有添加的数据
            Request('/add/data').then(data=>{
                dispatch({
                    type:'ADDdata',
                    data:data
                })
            })
        },
        remove(item){//点击删除
            dispatch({
                type:'REMOVE',
                data:item
            })
        },
        add(item){//点击添加
            dispatch({
                type:'ADD',
                data:item
            })
        }
    }
}
Home2=connect( mapStateToProps,mapDispatchToProps)(Home2)
export default Home2