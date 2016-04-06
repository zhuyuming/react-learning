// -------------common-------------------------

    // Redux
    import { createStore, applyMiddleware, compose } from 'redux'

    // Router
    import { useRouterHistory } from 'react-router'
    import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux'

    // middleware
    import thunk from 'redux-thunk'

    // history
    import createBrowserHistory from 'history/lib/createBrowserHistory'
// -------------common-------------------------


// user
import reducers from '../reducer'

const browserHistory = useRouterHistory(createBrowserHistory)({ basename:'' });

if( process.env.NODE_ENV === 'dev'){
    var instrument = require('../devtools.js').instrument

    var createMiddleStore = compose(
        applyMiddleware(thunk,routerMiddleware(browserHistory)),
        instrument(),
    )(createStore);
}else{
    var createMiddleStore = compose(
        applyMiddleware(thunk,routerMiddleware(browserHistory))
    )(createStore);
}

export const store =  createMiddleStore(reducers);

export const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: (state) => state.routerReducer
});

