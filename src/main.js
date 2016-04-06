import React from 'react'
import ReactDOM, { render } from 'react-dom'
import { Provider, connect } from 'react-redux'
import{ Route, Router, IndexRoute } from 'react-router'

import { store, browserHistory, history } from './store'

import reducers from './reducer'




import App from './components/App'
import Home from './pages/Home'
import Login from './pages/Login'
import Ucenter from './pages/Ucenter'
import List from './pages/List'



const connectComponent = connect(reducers)
const app = connectComponent(App)
const home = connectComponent(Home)
const login = connectComponent(Login)
const ucenter = connectComponent(Ucenter)
const list = connectComponent(List)




function createRoot () {
	let ele=[]
	let rootRouter = <div key='router'><Router history={ history }>
	    <Route path='/' component={ app }>
	        <IndexRoute component={ home }></IndexRoute>
	        <Route path="/login" component={ login }></Route>
	        <Route path="/ucenter" component={ ucenter }></Route>
	        <Route path="/list" component={ list }></Route>
	    </Route>
	</Router>
	</div>
	ele.push(rootRouter)
	
	if( process.env.NODE_ENV === 'dev'){
		let DevToolsEle = require('./devtools.js').default
		var DevTools = <DevToolsEle key='dev'></DevToolsEle>
		ele.push(DevTools)
	}

	return ele
}


render( <Provider store={ store }>
		<div>
			{ createRoot() }
		</div>
	</Provider>, document.getElementById('app'))


