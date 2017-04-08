import React, { Component } from 'react'
import SearchBar from '../containers/SearchBar'
import Navbar from './Navbar'
import PageWrapper from '../containers/PageWrapper'
import { searchItem, selectPage, fetchData } from '../actions'
import { connect } from 'react-redux'

class App extends Component {	
	componentDidMount() {
		const { dispatch, item, page } = this.props
		dispatch(fetchData(item))
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.item !== this.props.item) {
			const { dispatch, item, page } = nextProps
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
				/>
				{isEmpty
				  ? (isFetching ? <h4>Loading...</h4> : <h4>Empty.</h4>)
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

const mapStateToProps = (state, ownProps) => {
	let { item, page, spotifyApp } = state
	page = ownProps.match.params.page || page	// 2-way binding with rr-v4
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