# Demo App

This is a demo React app using Vite as a bundler and react-query to for managing, caching and syncing asynchronous and remote data in React.

There is no state manager needed for caching and syncing server with client code.

It uses json-server as a development server.

## What's in
* Vite
* React
* typescript
* react-query
* react-hook-forms
* tailwindcss


# Installation

Clone the repo and install the dependencies with yarn.

# Run the app

Start the server
```
yarn server
```

This will start the json-server on http://localhost:3000/.
The server has a delay of 2000ms so that the difference between fetching data from server and from cache is clearly visible.
The data is stored in ./db.json. Feel free to play around.
There is also a ./db-backup.json to restore the data (copy & paste) if needed.

Start the client
```
yarn dev
```
This will start the client on http://localhost:5174/