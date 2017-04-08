import React from 'react'
import FilterLink from '../containers/FilterLink'

const Navbar = ({ onClick }) => (
	<p>
		<FilterLink	page="top-results" onClick={onClick}>
			Top Results
		</FilterLink>
		{', '}
		<FilterLink	page="artists" onClick={onClick}>
			Artists
		</FilterLink>
		{', '}
		<FilterLink page="tracks" onClick={onClick}>
		  Tracks
		</FilterLink>
		{', '}
		<FilterLink page="albums" onClick={onClick}>
		  Albums
		</FilterLink>
	</p>
)

export default Navbar