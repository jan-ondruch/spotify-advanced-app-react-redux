import React from 'react'
import FilterLink from '../containers/FilterLink'

import '../styles/navbar.css'

const Navbar = ({ onClick, subPage }) => (
	<div className='navbar-wrapper'>
		<li>
			<FilterLink	page="top-results" onClick={onClick} subPage={subPage}>
				Top Results
			</FilterLink>
		</li>
		<li>
			<FilterLink	page="artists" onClick={onClick} subPage={subPage}>
				Artists
			</FilterLink>
		</li>
		<li>
			<FilterLink page="tracks" onClick={onClick} subPage={subPage}>
			  Tracks
			</FilterLink>
		</li>
		<li>
			<FilterLink page="albums" onClick={onClick} subPage={subPage}>
			  Albums
			</FilterLink>
		</li>
	</div>
)

export default Navbar