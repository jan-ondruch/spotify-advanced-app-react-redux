import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'	// rr-v4
import App from './App'

const Root = ({ store }) => (
	<Provider store={store}>
		<Router>
			<div>
				<Switch>
					<Route path='/:page?/:item?' component={App} />
					<Route render={() => <h1>Four-Oh-Four! Page not found.</h1>} />
				</Switch>
			</div>
		</Router>
	</Provider>
)

export default Root