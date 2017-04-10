import React from 'react'
import { Link } from 'react-router-dom'

const FilterLink = ({ page, subPage, onClick, children }) => {
	let url = `/${page}/`
	if (subPage !== '') {
		url = `/${page}/${subPage}`
	}

	return (
		<Link	to={url}	
					//replace
					onClick={() => onClick(page)}>
			{children}
		</Link>
	)
}

export default FilterLink