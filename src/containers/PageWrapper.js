import React from 'react'
import TopResults from '../components/TopResults'
import Artists from '../components/Artists'
import Albums from '../components/Albums'
import Tracks from '../components/Tracks'

const PageWrapper = ({ page, itemData }) => {
	switch(page) {
		case 'top-results':
			return (
				<TopResults itemData={itemData}/>
			)
		case 'artists':
			return (
				<Artists itemData={itemData}/>
			)
		case 'albums':
			return (
				<Albums itemData={itemData}/>
			)
		case 'tracks':
			return (
				<Tracks itemData={itemData}/>
			)
		default:
			return
	}
}

export default PageWrapper