import React from 'react'

const PageWrapper = ({ selectedPage, searchedItem }) => {
	switch(selectedPage) {
		case 'top-results':
			return (
				<div>
					<h1>TOP RESULTS</h1>
					{searchedItem}
				</div>
			)
		case 'artists':
			return (
				<div>
					<h1>ARTISTS</h1>
					{searchedItem}
				</div>
			)
		default:
			return (
				<h1>OTHER PAGE</h1>
			)
	}
}

export default PageWrapper