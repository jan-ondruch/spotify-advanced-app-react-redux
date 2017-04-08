import React from 'react'
import { render } from 'react-dom'
import configureStore from './configureStore'
import Root from './components/Root'

const store = configureStore()
const root = document.getElementById('root')

render(
	<Root store={store} />,
	root
)