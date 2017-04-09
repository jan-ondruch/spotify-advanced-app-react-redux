import React from 'react'

const Albums = ({ itemData }) => (
	<div>
		<h1>Albums</h1>

		{itemData.albums.map(album => (
			<div key={album.id}>
				<h5>{album.name}</h5>
				<img 
					alt={album.name}
					src={album.image === undefined ? '' : album.image.url}>
				</img>
			</div>
		))}
	</div>
)

export default Albums