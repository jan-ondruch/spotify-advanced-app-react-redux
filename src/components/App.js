import React, { Component } from 'react'
import SearchBar from '../containers/SearchBar'
import Navbar from './Navbar'
import PageWrapper from '../containers/PageWrapper'
import { searchItem, selectPage, fetchData } from '../actions'
import { connect } from 'react-redux'

class App extends Component {	
	// Fix initial url paths and redirect accordingly.
	componentWillMount() {
		const { dynamicUrlChange, ownProps } = this.props

		// Navigate from room '/' to '/top-results/'
		if (ownProps.match.url === '/')	{
			dynamicUrlChange('/top-results/')
		}

		// Navigate from '/tracks' and other base urls to '/tracks/'
		// Append the slash to avoid bugs
		if (ownProps.match.url.slice(-1) !== '/') {
			dynamicUrlChange(`${ownProps.match.url}/`)
		}

		// Redirect wrong urls (not catching all edge cases!)
		if (ownProps.match.url.substring(1, ownProps.match.url.lastIndexOf("/"))) {
			// catch here localhost:3000/wrongurl/whatver ; localhost:3000/wrongurl
		}

	}

	componentDidMount() {
		const { dispatch, item, } = this.props
		if (item === '') return	// Avoid initial fetch for no data
		dispatch(fetchData(item))
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.item !== this.props.item) {
			const { dispatch, item } = nextProps
			dispatch(fetchData(item))
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
					onClick={this.handleSearchBarChange}
				/>
				<Navbar 
					onClick={this.handlePageChange}
					subPage={item}
				/>
				{isEmpty
				  ? (isFetching 
				  	? (item === '' ? <h4>Search for an Artist, Song or Album</h4> : <h4>Loading...</h4>)
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

// FOR THE URL UPDATE, TRY OWNPROPS IN MSTP (HISTORY, PUSH)
// AND CWM PROBABLY?
// http://stackoverflow.com/questions/42271877/changing-the-url-in-react-router-v4-without-using-redirect-or-link

const mapStateToProps = (state, ownProps) => {
	let { item, page, spotifyApp } = state
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
		ownProps // Maybe don't pass the whole ownProps, just the functions/params you need
	}
}

export default connect(mapStateToProps)(App)