import React from 'react'

const Artists = ({ itemData }) => (
	<div>
		<h1>Artists</h1>

		{itemData.artists.map(artist => (
			<div key={artist.id}>
				<p>{artist.name}</p>
				<img 
					alt={artist.name}
					src={artist.image === undefined ? '' : artist.image.url}>
				</img>
			</div>
		))}
	</div>
)

export default Artists