import React, { Component } from 'react'
import SearchBar from '../containers/SearchBar'
import Navbar from './Navbar'
import PageWrapper from '../containers/PageWrapper'
import { searchItem, selectPage, fetchData } from '../actions'
import { connect } from 'react-redux'

class App extends Component {	
	componentDidMount() {
		const { dispatch, item } = this.props
		if (item === '') return	// avoid initial fetch for no data
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
		isFetching
	}
}

export default connect(mapStateToProps)(App)