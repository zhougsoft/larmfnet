# LARMFNET 🐛⚡

> a cc0 [zhoug](https://twitter.com/zhoug0x) & [imp0ster](https://twitter.com/the_imp0ster) joint

check it out at [LARMF.NET](https://larmf.net)


### wtf is this
this is an unofficial frontend for the [larva mfers](https://etherscan.io/address/0xafe2c381c385cbbcbb570d8b39b36449be6b35c4) NFT project, created to showcase some of the larva mfers features.

_* note: u must have some larva mfers in yr wallet to get the full experience! *_

### notable links
- [etherscan](https://etherscan.io/address/0xafe2c381c385cbbcbb570d8b39b36449be6b35c4)
- [twitter](https://twitter.com/LarvaMfers)
- [opensea](https://opensea.io/collection/larvamfers)
- [looksrare](https://looksrare.org/collections/0xafe2C381C385cBBCBb570D8b39b36449BE6B35c4)
- [larva mfers art & contract repo](https://github.com/zhoug0x/larva-mfers)

this app is setup to pull images from firebase storage, so running it on yr local is kinda fucky.  
BUT - the images are setup to pull from IPFS as a fallback if cloud storage fails, so give it a shot!

it's messy, good luck and have fun!

### RUN LOCALLY:
- make a copy of `env.example` named `.env` then fill in yr Firebase creds! (or leave empty if u are relying on IPFS to kick in)
- install dependencies -> `npm install`
- run development server -> `npm start`
- open browser, go to `localhost:3000`
