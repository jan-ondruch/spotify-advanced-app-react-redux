import React from 'react'
import { connect } from 'react-redux'

let SearchBar = ({ dispatch, onClick }) => {
	let input

	return (
		<div>
		  <form onClick={e => { // **X**
		    e.preventDefault()
		    if (!input.value.trim()) {
		      return
		    }
		    onClick(input.value)
		    input.value = ''
		  }}>
		    <input ref={node => { // React callback ref API: ref is a function and gets 
		                          // the corresponding node and saves it into 'input',
		                          // so we can use it in the event handler. **X**
		      input = node
		    }} />
		    <button type="submit">
		      Search
		    </button>
		  </form>
		</div>
	)
}

// Connects a React component to a Redux store.
SearchBar = connect()(SearchBar)

export default SearchBar