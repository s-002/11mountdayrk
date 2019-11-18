import React,{Component} from 'react'
import Request from '../until/request'

class Home extends Component{
    state={
        list:[
            {name:'扫一扫'},{name:'付钱'},{name:'收钱'},{name:'卡包'}
        ],
        datalist:[]
    }
    onclick=()=>{//点击更多跳转到 更多页面
        // console.log(this.props.history)
        this.props.history.push('/about')
    }
    render(){
        return <>
            <div className='topnav'>
                <input type='text' placeholder='借呗' />
                <span>我的</span>
                <span>+</span>
            </div>
            <div className="toplist">
                {
                    this.state.list.map((item,index)=>{
                        return <dl key={index}>
                                <dd>图</dd>
                                <dt>{item.name}</dt>
                            </dl>
                    })
                }
            </div>
            <div className="navlist">
                {
                    this.state.datalist.map((item,index)=>{
                        return <dl key={index}>
                                <dd>图</dd>
                                <dt>{item.name}</dt>
                            </dl>
                    })
                }
                <dl onClick={()=>{this.onclick()}}>
                    <dd>图</dd>
                    <dt>更多</dt>
                </dl>
            </div>
        </>
    }
    componentDidMount(){
        Request('/get/data').then(data=>{
            this.setState({
                datalist:data
            })
        })
    }
}
export default Home