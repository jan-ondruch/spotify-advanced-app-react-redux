import React from 'react'

const Tracks = ({ itemData }) => (
	<div>
		<h1>Tracks</h1>

		{itemData.tracks.map(track => (
			<li key={track.id}>{track.name}</li>
		))}
	</div>
)

export default Tracks