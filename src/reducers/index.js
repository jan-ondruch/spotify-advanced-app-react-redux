import { combineReducers } from 'redux'
import {
	SEARCH_ITEM,
	REQUEST_ITEM,
	RECEIVE_ITEM,
	SELECT_PAGE,
} from '../actions'

// Currently selected page - used with rr-v4 to dynamically change the url and navigation.
const page = (state = 'top-results', action) => {
	switch(action.type) {
		case SELECT_PAGE:
			return action.page
		default:
			return state
	}
}

// Initial state is overwritten in the App component.
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

// Combine all app states.
// @spotifyApp: object containing all searched items.
// @item: currently searched item.
// @page: currently selected page (navigation).
const rootReducer = combineReducers({
	spotifyApp,
	item,
	page,
})

export default rootReducer