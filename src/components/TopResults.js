import React from 'react'

const TopResults = ({ itemData }) => (
	<div>
		<h1>Top Results</h1>

		<h3>Artists</h3>
		{itemData.artists.map(artist => (
			<li key={artist.id}>{artist.name}</li>
		))}

		<h3>Albums</h3>
		{itemData.albums.map(album => (
			<li key={album.id}>{album.name}</li>
		))}

		<h3>Tracks</h3>
		{itemData.tracks.map(track => (
			<li key={track.id}>{track.name}</li>
		))}
	</div>
)

export default TopResults