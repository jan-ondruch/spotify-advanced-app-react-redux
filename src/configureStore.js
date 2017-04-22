import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import spotifyApp from './reducers'

const configureStore = () => {
	const middlewares = [thunk]	// Allows you to write action creators that return a function instead of an action.
															// Used for asynchronous dispatch (fetching API data).

	if (process.env.NODE_ENV !== 'production') {
		middlewares.push(createLogger())
	}

	return createStore(
		spotifyApp,
		applyMiddleware(...middlewares)
	)
}

export default configureStore