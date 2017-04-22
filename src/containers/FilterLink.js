import React from 'react'
import { Link } from 'react-router-dom'


/*
 * Creates the dynamic url link (rr-v4) based on the currently selected page and
 * the selected item - subPage.
 */
const FilterLink = ({ page, subPage, onClick, children }) => {
	let url = `/${page}/`
	if (subPage !== '') {
		url = `/${page}/${subPage}`
	}

	return (
		<Link	to={url}	
					onClick={() => onClick(page)}>
			{children}
		</Link>
	)
}

export default FilterLink