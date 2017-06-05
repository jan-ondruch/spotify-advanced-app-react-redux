import React, { Component } from 'react'
import SearchBar from '../containers/SearchBar'
import Navbar from './Navbar'
import PageWrapper from '../containers/PageWrapper'
import { searchItem, selectPage, fetchData, saveToken } from '../actions'
import { connect } from 'react-redux'

import '../styles/app.css'


class App extends Component {	
	// Fix initial url paths and redirect accordingly.
	componentWillMount() {
		const { dynamicUrlChange, ownProps, page, item } = this.props

		// Nasty workaround of setting an access token due to the Spotify API changes.
		// Processing a token on a client-side is inefficient in the way the app is built,
		// using Node.js for server and client side code would be way more cleaner.
		if (process.env.NODE_ENV !== 'production') {
		  if (/localhost:3000\/$/.test(window.location.href)) {
				window.location.replace("https://accounts.spotify.com/authorize?client_id=6370e456654740c8bf8d82444a8b950b&redirect_uri=http:%2F%2Flocalhost%3A%33%30%30%30&response_type=token&state=123")
			}
		}
		else {
			if (/advanced-spotify.surge.sh\/$/.test(window.location.href)) {
				window.location.replace("https://accounts.spotify.com/authorize?client_id=6370e456654740c8bf8d82444a8b950b&redirect_uri=http:%2F%2Fadvanced-spotify.surge.sh&response_type=token&state=123")
			}
		}

		// Save access token from the url to the state
		let url = window.location.href
  	let accessToken = url.match(/#(?:access_token)=([\S\s]*?)&/)[1]
  	this.props.dispatch(saveToken(accessToken))

		// Navigate from room '/' to '/top-results/'
		if (ownProps.match.url === '/')	{
			dynamicUrlChange('/top-results/')
			return
		}

		// Navigate from '/tracks' and other base urls to '/tracks/'
		// Append the slash to avoid bugs.
		// And don't add '/' after if item is specified.
		if (ownProps.match.url.slice(-1) !== '/' && item.length === 0) {
			dynamicUrlChange(`${ownProps.match.url}/`)
			return
		}

		// Remove '/' from the url is item is specified.
		// e.g. /artists/akon/ -> /artists/akon
		if (item.length !== 0 && ownProps.match.url.slice(-1) === '/') {
			dynamicUrlChange(`/${page}/${item}`)
			return
		}

		// Change path to e.g. /artists/akon from /artists/akon/some/thing...
		if (ownProps.location.pathname.match((/\//g) || []).length >= 3) {
			dynamicUrlChange(`/${page}/${item}`)
		}
	}

	componentDidMount() {
		const { dispatch, item, token } = this.props
		if (item === '') return	// Avoid initial fetch for no data.
		dispatch(fetchData(item, token))
	}

	componentWillReceiveProps(nextProps) {
		// When search string is removed, we have to fix the url and prevent dispatching
		// empty item.
		// Need to check for the previous state of the search bar (this.props) - in case
		// the length of the nextProps is 0 but the last item was empty, that means we
		// reloaded the app and we start with the initial state, which is already set in
		// the CWM lifecycle method.
		if (nextProps.item.length === 0) {
			if (this.props.item.length >= 1) {
				this.props.dynamicUrlChange('top-results/')
			}
			return
		}
		// Fetch new incoming data if the searched string is different.
		else {
			if (nextProps.item !== this.props.item) {
				const { dispatch, item, token } = nextProps
				dispatch(fetchData(item, token))
			}
		}
	}
	
	handleSearchBarChange = nextItem => {
		this.props.dispatch(searchItem(nextItem))
		this.props.dynamicUrlChange(nextItem)	// Change url programaticall navigation.
	}

	handlePageChange = nextPage => {
		this.props.dispatch(selectPage(nextPage))
	}

	render() {
		const { item, page, isFetching, itemData } = this.props
		let isEmpty = itemData.length === 0
		return (
			<div>
				<SearchBar
					onChange={this.handleSearchBarChange}
					item={item}
				/>
				{isFetching && item === '' ? '' :
					<Navbar 
						onClick={this.handlePageChange}
						subPage={item}
						page={page}
					/>
				}
				{isEmpty
				  ? (isFetching 
				  	? (item === '' ? <Info /> : <h4>Loading...</h4>)
				  	: <h4>Empty.</h4>)
				  : <div style={{ opacity: isFetching ? 0.5 : 1 }}>
				      <PageWrapper 
				      	page={page}
				      	itemData={itemData}
				      />
				    </div>
				}
			</div>
		)
	}
}


const Info = () => (
	<div className='info'>
		<h4>Spotify-based app coded with React/Redux.</h4>
		<h5><a href='https://github.com/jan-ondruch/spotify-redux'>View the project on Github.</a></h5>
		<p>@2017, Jan Ondruch</p>
	</div>
)


const mapStateToProps = (state, ownProps) => {
	let { item, page, spotifyApp, token } = state
	// 2-way binding with rr-v4.
	// @item: Get the item from the search bar, if none, take it from the url, '' as fallback.
	page = ownProps.match.params.page || page	
	item = item || ownProps.match.params.item || ''

	// Change of url on change of search bar: programaticall url change.
	let dynamicUrlChange = ownProps.history.push

	const {
		isFetching,
		items: itemData
	} = spotifyApp[item] || {
		isFetching: true,
		items: []
	}

	return {
		page,
		item,
		itemData,
		isFetching,
		dynamicUrlChange,
		ownProps,
		token
	}
}

export default connect(mapStateToProps)(App)