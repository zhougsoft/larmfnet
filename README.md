# LARMFNET

> an unnofficial derivative frontend for the [Larva Mfers NFT](https://etherscan.io/address/0xafe2c381c385cbbcbb570d8b39b36449be6b35c4) project

### official links
- [twitter](https://twitter.com/LarvaMfers)
- [opensea](https://opensea.io/collection/larvamfers)
- [looksrare](https://looksrare.org/collections/0xafe2C381C385cBBCBb570D8b39b36449BE6B35c4)

this app is setup to pull images from firebase storage, so running it on yr local is kinda fucky.  
BUT - the images are setup to pull from IPFS as a fallback if cloud storage fails, so give it a shot!

it's messy, good luck and have fun!

### RUN LOCALLY:
- make a copy of `env.example` named `.env` then fill in yr Firebase creds! (or leave empty if u are relying on IPFS to kick in)
- install dependencies -> `npm install`
- run development server -> `npm start`
- open browser, go to `localhost:3000`
