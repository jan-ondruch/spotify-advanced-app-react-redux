# Spotify based app with React, Redux, and Surge

A simplified Spotify-based app for technology and demonstration purposes - build with React, Redux, and deployed on Surge.<br><br>
Try the demo at http://advanced-spotify.surge.sh/<br><br>
This project template was built with [Create React App](https://github.com/facebookincubator/create-react-app), which provides a simple way to start React projects with no build configuration needed.

## Possible future improvements

### SSR
I didn't manage to work out the initial server render yet, therefore directly entered urls like `http://advanced-spotify.surge.sh/artists/50cent` will not work and app won't resolve it. This feature works only locally on localhost - download the project and run it with `npm start`.

### Full Artist/Albums/Tracks implementation
Adding links even to found results and get further data from there - this would require rewriting fetch functions and improving current routing solution.

### Delay on fetch
When typing into a searchbar, on every change, new data is fetched immediatelly, which slows down the app and stores unnecessary data into store. One solution would be to add a delay between entered characters, so it would only fetch when the user would stop typing (e.g. 200ms). Using this simulation would avoid fetching ~85%+ of the data.

### Hide navbar item with no results
If data is fetched and e.g. no artist is found, but albums and tracks are, the artist tab would disappear - requires advanced workaround.

### Pagination
Possible to add pagination, but since the Spotify API server maximum up to 20 items, it's not really useful here.


