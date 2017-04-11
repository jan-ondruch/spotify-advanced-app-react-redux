import React from 'react'
import Tracks from './Tracks'
import Artists from './Artists'
import Albums from './Albums'

import '../styles/tracks.css'
import '../styles/artists.css'
import '../styles/albums.css'
import '../styles/top-results.css'


const TopResults = ({ itemData }) => (
	<div>
		{itemData.tracks.length === 0 ? '' :
			<Tracks itemData={itemData} maxItem={5} />
		}
		{itemData.artists.length === 0 ? '' :
			<div className='headers'>
				<h2>Artists</h2>
				<Artists itemData={itemData} maxItem={8} />
			</div>
		}
		{itemData.albums.length === 0 ? '' :
			<div className='headers'>
				<h2>Albums</h2>
				<Albums itemData={itemData} maxItem={8} />
			</div>
		}
	</div>
)

export default TopResults