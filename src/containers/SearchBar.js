import React from 'react'
import { connect } from 'react-redux'

import '../styles/searchBar.css'


/*
 * Search bar to search for an item (artist, album, track).  
 * @onChange: On every change sends the current value to a parent component,
 * 						which uses it e.g. for immediate dynamic url change.
 * @item: if value of the searched item is implicitly defined in url,
 *				it's set as a default value in the search bar (form).
 */
let SearchBar = ({ onChange, item }) => {
	let input = item

	return (
		<div className='searchBar-wrapper'>
			<p>Search for an Artist, Song or Album</p>
			<form onChange={e => { // **X**
			  e.preventDefault()
			  onChange(input.value)
			}}>
			  <input
			  	autoFocus
			  	defaultValue={item}
			  	placeholder="Start typing..." 
			  	ref={node => { // React callback ref API: ref is a function and gets 
			                   // the corresponding node and saves it into 'input',
			                   // so we can use it in the event handler. **X**
			    input = node
			  }} />
			</form>
		</div>
	)
}

// Connects a React component to a Redux store.
SearchBar = connect()(SearchBar)

export default SearchBar