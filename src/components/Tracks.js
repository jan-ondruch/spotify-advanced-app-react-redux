import React from 'react'

const Tracks = ({ itemData }) => (
	<div>
		<h1>Tracks</h1>

		{itemData.tracks.map(track => (
			<div key={track.id}>
				<h5>{track.name}</h5>
				{track.artists.map((artist, i) => (
					<li key={i}>{artist.name}</li>
				))}
			</div>
		))}
	</div>
)

export default Tracks