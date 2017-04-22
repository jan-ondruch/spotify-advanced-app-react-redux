import React from 'react'
import FilterLink from '../containers/FilterLink'

import '../styles/navbar.css'


/*
 * Navbar for page (tab) selection.
 * @onClick: prop function for notifying the parent component the tab has changed.
 * @subPage: currently searched item.
 * @page: currently selected page (tab).
 */
const Navbar = ({ onClick, subPage, page }) => (
	<div className='navbar-wrapper'>
		<li style={{textDecoration: page === 'top-results' ? 'underline' : 'none',
								color: '#fff'
							}}>
			<FilterLink	page="top-results" onClick={onClick} subPage={subPage}>
				Top Results
			</FilterLink>
		</li>
		<li style={{textDecoration: page === 'artists' ? 'underline' : 'none',
								color: '#fff'
							}}>
			<FilterLink	page="artists" onClick={onClick} subPage={subPage}>
				Artists
			</FilterLink>
		</li>
		<li style={{textDecoration: page === 'tracks' ? 'underline' : 'none',
								color: '#fff'
							}}>
			<FilterLink page="tracks" onClick={onClick} subPage={subPage}>
			  Tracks
			</FilterLink>
		</li>
		<li style={{textDecoration: page === 'albums' ? 'underline' : 'none',
								color: '#fff'
							}}>
			<FilterLink page="albums" onClick={onClick} subPage={subPage}>
			  Albums
			</FilterLink>
		</li>
	</div>
)

export default Navbar