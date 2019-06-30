import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import Routes from './components/Routes'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducers from '../client/reducers'

const store = createStore(reducers, {}, applyMiddleware(thunk))

ReactDOM.hydrate(
	<Provider store={store}>
		<BrowserRouter>
			<Routes/>
		</BrowserRouter>
	</Provider>
	, document.querySelector('#root'))