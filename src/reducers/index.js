import { combineReducers } from 'redux'
import {
	SEARCH_ITEM,
	REQUEST_ITEM,
	RECEIVE_ITEM,
	SELECT_PAGE,
} from '../actions'

const page = (state = 'top-results', action) => {
	switch(action.type) {
		case SELECT_PAGE:
			return action.page
		default:
			return state
	}
}

// initial state is overwritten in the App component
const item = (state = '', action) => {
	switch(action.type) {
		case SEARCH_ITEM:
			return action.item
		default:
			return state
	}
}

const itemData = (state = {
	isFetching: false,
	items: []
}, action) => {
	switch(action.type) {
		case 'REQUEST_ITEM':
			return {
				...state, 
				isFetching: true,
			}
		case 'RECEIVE_ITEM':
			return {
				...state,
				isFetching: false,
				items: action.itemData,
			}
		default:
			return state
	}
}

const spotifyApp = (state = {}, action) => {
	switch(action.type) {
		case REQUEST_ITEM:
		case RECEIVE_ITEM:
			return {
				...state,
				[action.item]: itemData(state[action.item], action)
			}
		default:
			return state
	}
}

const rootReducer = combineReducers({
	spotifyApp,
	item,
	page,
})

export default rootReducer