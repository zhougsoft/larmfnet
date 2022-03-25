# LARMFNET

this app is setup to pull images from firebase storage, so running it on yr local is kinda fucky.  
BUT - the images are setup to pull from IPFS as a fallback if cloud storage fails, so give it a shot!

it's messy but good luck, have fun!

### RUN LOCALLY:
- make a copy of `env.example` named `.env` then fill in yr secrets! (or leave empty if u are relying on IPFS to kick in)
- install dependencies -> `npm install`
- run development server -> `npm run dev`
- open browser, go to `localhost:3000`
