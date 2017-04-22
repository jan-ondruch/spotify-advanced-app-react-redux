import React from 'react'

import '../styles/albums.css'
import artistImg from '../images/artist-music.jpg'


/*
 * Renders searched albums.
 * @itemData: searched item (album).
 * @maxItem: maximum number of items to be displayed.
 *					 when top-results calls Albums, maxItem of 8 is passed.
 */
const Albums = ({ itemData, maxItem = 20 }) => (
	<div className='albums-wrapper'>
		{itemData.albums.map((album, i) => (
			i >= maxItem ? '' :
			<div key={album.id} className='album'>
				<img
					alt={album.name}
					src={album.image === undefined ? artistImg : album.image.url}>
				</img>
				<h5>{album.name}</h5>
				<p>By {album.artist}</p>
			</div>
		))}
	</div>
)

export default Albums