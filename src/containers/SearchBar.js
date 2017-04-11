import React from 'react'
import { connect } from 'react-redux'

import '../styles/searchBar.css'

let SearchBar = ({ dispatch, onClick }) => {
	let input

	return (
		<div className='searchBar-wrapper'>
			<p>Search for an Artist, Song, Album or Playlist</p>
			<form onChange={e => { // **X**
			  e.preventDefault()
			  if (!input.value.trim()) {
			    return
			  }
			  onClick(input.value)
			  //input.value = ''
			}}>
			  <input
			  	placeholder="Start typing..." 
			  	ref={node => { // React callback ref API: ref is a function and gets 
			                        // the corresponding node and saves it into 'input',
			                        // so we can use it in the event handler. **X**
			    input = node
			  }} />
			  {/*
			  <button type="submit">
			    Search
			  </button>
				*/}
			</form>
		</div>
	)
}

// Connects a React component to a Redux store.
SearchBar = connect()(SearchBar)

export default SearchBar