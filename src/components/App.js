import React, { Component } from 'react'
import SearchBar from '../containers/SearchBar'
import Navbar from './Navbar'
import PageWrapper from '../containers/PageWrapper'
import { searchItem, selectPage, fetchData } from '../actions'
import { connect } from 'react-redux'

class App extends Component {	
	componentDidMount() {
		const { dispatch, searchedItem, selectedPage } = this.props
		dispatch(fetchData(searchedItem))
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.searchedItem !== this.props.searchedItem) {
			const { dispatch, searchedItem, selectedPage } = nextProps
			dispatch(fetchData(searchedItem))
		}
	}
	
	handleSearchBarChange = nextItem => {
		this.props.dispatch(searchItem(nextItem))
	}

	handlePageChange = nextPage => {
		this.props.dispatch(selectPage(nextPage))
	}

	render() {
		const { searchedItem, selectedPage, isFetching, itemData } = this.props
		let isEmpty = itemData.length === 0
		return (
			<div>
				<SearchBar 
					onClick={this.handleSearchBarChange}
				/>
				<Navbar 
					onClick={this.handlePageChange}
				/>
				<PageWrapper 
					selectedPage={selectedPage}
					searchedItem={searchedItem}
				/>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	let { searchedItem, selectedPage, spotifyApp } = state
	selectedPage = ownProps.match.params.page || selectedPage	// 2-way binding with rr-v4
	const {
		isFetching,
		items: itemData
	} = spotifyApp[searchedItem] || {
		isFetching: true,
		items: []
	}

	return {
		selectedPage,
		searchedItem,
		itemData,
		isFetching
	}
}

export default connect(mapStateToProps)(App)