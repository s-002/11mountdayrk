import React,{Component} from 'react'
import {BrowserRouter,Route,Switch,Redirect,Link} from 'react-router-dom'
import Index from '../component/index'
import About from '../component/aboute/index'
import GlAbout from '../component/aboute/index2'
class Router extends Component{
    render(){
        return <BrowserRouter>
            <Route path='/index' component={Index}></Route>
            <Route path='/about' component={About}></Route>
            <Route path='/glabout' component={GlAbout}></Route>
            <Redirect from='/' to='/index'></Redirect>
        </BrowserRouter>
    }
}
export default Router