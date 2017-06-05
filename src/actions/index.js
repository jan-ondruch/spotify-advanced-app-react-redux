export const SEARCH_ITEM = 'SEARCH_ITEM'
export const REQUEST_ITEM = 'REQUEST_ITEM'
export const RECEIVE_ITEM = 'RECEIVE_ITEM'
export const SELECT_PAGE = 'SELECT_PAGE'
export const SAVE_TOKEN = 'SAVE_TOKEN'


export const selectPage = page => ({
	type: SELECT_PAGE,
	page
})

export const searchItem = item => ({
	type: SEARCH_ITEM,
	item
})

export const requestItem = item => ({
  type: REQUEST_ITEM,
  item
})

export const receiveItem = (item, json) => ({
  type: RECEIVE_ITEM,
  item,
  itemData: json
})

export const saveToken = token => ({
	type: SAVE_TOKEN,
	token
})


const mergeFetchedData = (artists, albums, tracks) => ({
	artists: artists,
	albums: albums,
	tracks: tracks
})

const fetchTracks = (item, token) => dispatch => {
	dispatch(requestItem(item))
	return fetch(`https://api.spotify.com/v1/search?q=${item}&type=track`, { 
      method: 'get', 
      headers: {
        'Authorization': 'Bearer ' + token,
      }
    }) 
		.then(response => response.json())
		.then(json => json.tracks.items.map(item => ({
			id: item.id,
			name: item.name,
			artists: item.artists.reduce((artists, artist) => {
				artists.push({
					name: artist.name
				})
				return artists
			}, [])
		})))
}

const fetchAlbums = (item, token) => dispatch => {
	dispatch(requestItem(item))
	return fetch(`https://api.spotify.com/v1/search?q=${item}&type=album`, { 
      method: 'get', 
      headers: {
        'Authorization': 'Bearer ' + token,
      }
    })
		.then(response => response.json())
		.then(json => json.albums.items.map(item => ({
			id: item.id,
			name: item.name,
			artist: item.artists[0].name,
			image: item.images[1]
 		})))
}

const fetchArtists = (item, token) => dispatch => {
	dispatch(requestItem(item))
	return fetch(`https://api.spotify.com/v1/search?q=${item}&type=artist`, { 
      method: 'get', 
      headers: {
        'Authorization': 'Bearer ' + token,
      }
    })
		.then(response => response.json())
		.then(json => json.artists.items.map(item => ({
			id: item.id,
			name: item.name,
			image: item.images[1]
		})))
}

// Get all data for the searched item and return them only when all of them were fetched.
export const fetchData = (searchedItem, token) => dispatch => {
	let setArtists = dispatch(fetchArtists(searchedItem, token))
	let setAlbums = dispatch(fetchAlbums(searchedItem, token))
	let setTracks = dispatch(fetchTracks(searchedItem, token))

	Promise.all([setArtists, setAlbums, setTracks])
		.then(values => mergeFetchedData(...values))
		.then(parsedItems => dispatch(receiveItem(searchedItem, parsedItems)))
}