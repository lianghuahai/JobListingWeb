import React from 'react';
import ReactDOM from 'react-dom';
import{createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {BrowserRouter,Route} from 'react-router-dom'

import 'antd-mobile/dist/antd-mobile.css'
import './config.js'
import reducers from './reducer.js'
import Login from './container/login/login.js'
import Register from './container/register/register.js'
import App from './App.js'
import AuthRoute from './component/authroute/authroute.js'
const store = createStore(reducers,compose(
    applyMiddleware(thunk),
    window.devToolsExtension? window.devToolsExtension():f=>f
))
ReactDOM.render(
    (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <AuthRoute></AuthRoute>
                    <Route path='/login' exact component={Login}/>
                    <Route path='/app' exact component={App}></Route>
                    <Route path='/register' exact component={Register}></Route> 
                    <h2>aaaaaaa</h2>
                </div>
            </BrowserRouter>
        </Provider>
    ),
    document.getElementById('root')
 )


 