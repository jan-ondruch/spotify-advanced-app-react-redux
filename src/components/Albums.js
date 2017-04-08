import React from 'react'

const Albums = ({ itemData }) => (
	<div>
		<h1>Albums</h1>

		{itemData.albums.map(album => (
			<li key={album.id}>{album.name}</li>
		))}
	</div>
)

export default Albums