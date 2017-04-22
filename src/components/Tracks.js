import React from 'react'

import '../styles/tracks.css'


/*
 * Renders searched tracks.
 * @itemData: searched item (track).
 * @maxItem: maximum number of items to be displayed.
 *					 when top-results calls Tracks, maxItem of 5 is passed.
 */
const Tracks = ({ itemData, maxItem = 20 }) => (
	<div className='tracks-wrapper'>
		{itemData.tracks.map((track, i) => (
			i >= maxItem ? '' :
			<div key={track.id} className='track'>
				<div className='counter'>
					<p>{++i}.</p>
				</div>
				<div className='track-artists'>
				<h5>{track.name}</h5>
					{track.artists.map((artist, j) => (
						<li key={j}>{artist.name}</li>
					))}
				</div>
			</div>
		))}
	</div>
)

export default Tracks