import React from 'react';
import ReactDOM from 'react-dom';
import{createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {BrowserRouter,Route,Redirect,Switch,Link,AuthRoute} from 'react-router-dom'
import {Button} from 'antd-mobile'

import 'antd-mobile/dist/antd-mobile.css'
import './config.js'
import reducers from './reducer.js'
import Login from './container/login/login.js'
import Register from './container/register/register.js'
import App from './App.js'
const store = createStore(reducers,compose(
    applyMiddleware(thunk),
    window.devToolsExtension? window.devToolsExtension():f=>f
))
ReactDOM.render(
    (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <AuthRoute
                    <Link to='/login'>login </Link>
                    <Link to='/register'>register</Link>

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


