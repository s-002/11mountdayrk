import React,{Component} from 'react'
import {Route,Switch,Redirect,Link} from 'react-router-dom'
import Home from '../component/home'
import '../css/index.css'
class Routers extends Component{
    state={
        routelist:[
            {
                name:'首页',
                path:'/index/home',
                component:Home
            },{
                name:'财富',
                path:'/index/calist',
                component:()=><div>财富</div>
            },{
                name:'口碑',
                path:'/index/calist1',
                component:()=><div>口碑</div>
            },{
                name:'朋友',
                path:'/index/calist2',
                component:()=><div>朋友</div>
            },{
                name:'我的',
                path:'/index/myhome',
                component:()=><div>我的</div>
            }
        ],
        isNon:0
    }
    render(){
        let {isNon}=this.state
        return <div>
            <div className='content'>
            <Switch>
                {
                    this.state.routelist.map((item,index)=>{
                        return <Route key={index} path={item.path} component={item.component}></Route>
                    })
                }
                <Redirect from='/index' to='/index/home'></Redirect>
            </Switch> 
            </div>
           
             <div className='bottomnav'>
                {
                    this.state.routelist.map((item,index)=>{
                        return <Link className={isNon===index?'active':''} onClick={()=>{this.setState({isNon:index})}} key={index} to={item.path}>{item.name}</Link>
                    })
                }
            </div>
        </div>
    }
}
export default Routers