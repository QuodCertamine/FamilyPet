# Project-Icarus - Alexa App
Home Defense System

# Installation
Install node dependencies
```bash
npm install
```

Get config data from firebase and save it as config.json
```bash 
config = {
    apiKey: "{api-key}",
    authDomain: "{app-id}.firebaseapp.com",
    databaseURL: "https://{app-id}.firebaseio.com",
    projectId: "{app-id}",
    storageBucket: "{app-id}.appspot.com",
    messagingSenderId: ""
  }
```

Package everything as a .zip file and store it in your Amazon Lambda service