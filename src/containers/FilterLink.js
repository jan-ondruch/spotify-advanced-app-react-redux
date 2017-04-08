import React from 'react'
import { Link } from 'react-router-dom'

const FilterLink = ({ page, onClick, children }) => (
	<Link	to={page} 
				onClick={() => onClick(page)}>
		{children}
	</Link>
)

export default FilterLink