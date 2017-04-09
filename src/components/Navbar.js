import React from 'react'
import FilterLink from '../containers/FilterLink'

const Navbar = ({ onClick, subPage }) => (
	<p>
		<FilterLink	page="top-results" onClick={onClick} subPage={subPage}>
			Top Results
		</FilterLink>
		{', '}
		<FilterLink	page="artists" onClick={onClick} subPage={subPage}>
			Artists
		</FilterLink>
		{', '}
		<FilterLink page="tracks" onClick={onClick} subPage={subPage}>
		  Tracks
		</FilterLink>
		{', '}
		<FilterLink page="albums" onClick={onClick} subPage={subPage}>
		  Albums
		</FilterLink>
	</p>
)

export default Navbar