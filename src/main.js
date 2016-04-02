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


const roouRouter = <Router history={ history }>
    <Route path='/' component={ app }>
        <IndexRoute component={ home }></IndexRoute>
        <Route path="/login" component={ login }></Route>
        <Route path="/ucenter" component={ ucenter }></Route>
        <Route path="/list" component={ list }></Route>
    </Route>
</Router>


render( <Provider store={ store }>{ roouRouter }</Provider>, document.getElementById('app'))


