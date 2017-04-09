import React from 'react'

const Artists = ({ itemData }) => (
	<div>
		<h1>Artists</h1>

		{itemData.artists.map(artist => (
			<div key={artist.id}>
				<h5>{artist.name}</h5>
				<img 
					alt={artist.name}
					src={artist.image === undefined ? '' : artist.image.url}>
				</img>
			</div>
		))}
	</div>
)

export default Artists