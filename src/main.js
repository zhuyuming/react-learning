import React from 'react'
import ReactDOM, { render } from 'react-dom'
import { Provider, connect } from 'react-redux'
import{ Route, Router, IndexRoute } from 'react-router'


import AppMain from './components/App'
import { store, browserHistory, history } from './store'
import reducers from './reducer'

const App = connect(reducers)(AppMain)
const roouRouter = <Router history={ history }>
    <Route path='/' component={ App }></Route>
</Router>


render( <Provider store={ store }>{ roouRouter }</Provider>, document.getElementById('app'))


