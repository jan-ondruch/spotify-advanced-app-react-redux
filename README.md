# Spotify based app with React, Redux, and Surge

A simplified Spotify-based app for technology and demonstration purposes - build with React, Redux, and deployed on Surge.<br><br>
Try the demo at http://advanced-spotify.surge.sh/<br><br>
This project template was built with [Create React App](https://github.com/facebookincubator/create-react-app), which provides a simple way to start React projects with no build configuration needed.

## Possible future improvements

### SSR
I didn't manage to work out the initial server render yet, therefore directly entered urls like `http://advanced-spotify.surge.sh/artists/50cent` will not work and app won't resolve it. This feature works only locally on localhost - download the project and run it with `npm start`.

### Full Artist/Albums/Tracks implementation
Adding links even to found results and get further data from there - this would require rewriting fetch functions and improving current routing solution.

### Delay on fetch (debounce)
So far I haven't managed to figure out how to use debounce with redux and thunk. Simply solution with undescore.js doesn't work properly. Solving this problem would probably require writing my own middleware.

### Hide navbar item with no results
If data is fetched and e.g. no artist is found, but albums and tracks are, the artist tab would disappear - requires advanced workaround.

### Pagination
Possible to add pagination, but since the Spotify API server maximum up to 20 items, it's not really useful here.


