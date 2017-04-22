import React from 'react'
import TopResults from '../components/TopResults'
import Artists from '../components/Artists'
import Albums from '../components/Albums'
import Tracks from '../components/Tracks'


/*
 * Wrapps the found results. Depending on the tab selected, renders the corresponding
 * component.
 * @page: currently selected page (navigation)
 * @itemData: fetched item data to be displayed.
 */
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