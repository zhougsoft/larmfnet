import { ethers } from 'ethers'
import { ref, getDownloadURL } from 'firebase/storage'
import storage from '../data/storage'

import {
	LARVA_MFERS_CONTRACT_ADDRESS,
	IPFS_GATEWAY_PREFIX,
	IMG_IPFS_CID,
	IMG_CUTOUT_IPFS_CID,
	IMG_CUTOUT_WEB_IPFS_CID,
	FIREBASE_CUTOUTS_DIR,
} from '../config'
import larmfAbi from '../config/larmf-abi.json'
import larmfFileData from '../data/larmf-data.json'

/**
 * instantiates larmf contract interface with given web3 provider
 * @param provider: Provider
 * @returns Contract
 */
const getLarmfContract = provider => {
	return new ethers.Contract(LARVA_MFERS_CONTRACT_ADDRESS, larmfAbi, provider)
}

/**
 * returns src URL for larmf img
 * @param id: number
 * @returns string
 */
export const getLarmfImgIPFS = _id =>
	`${IPFS_GATEWAY_PREFIX}${IMG_IPFS_CID}/${_id}.png`

/**
 * returns src URL for larmf img cutout
 * @param id: number
 * @returns string
 */
export const getLarmfCutoutIPFS = _id =>
	`${IPFS_GATEWAY_PREFIX}${IMG_CUTOUT_IPFS_CID}/${_id}.png`

/**
 * returns src URL for larmf img cutout
 * @param id: number
 * @returns string
 */
export const getLarmfCutoutMinifiedIPFS = _id =>
	`${IPFS_GATEWAY_PREFIX}${IMG_CUTOUT_WEB_IPFS_CID}/${_id}.png`

/**
 * returns Firebase src URL for larmf img cutout
 * @param id: number
 * @returns string
 */
export const getLarmfSpriteUrl = async _id => {
	const fileRef = ref(storage, `${FIREBASE_CUTOUTS_DIR}/${_id}.png`)
	const downloadUrl = await getDownloadURL(fileRef)
	return downloadUrl
}

/**
 * returns larmf data from local json file
 * @param id: number
 * @returns Larmf
 */
export const getLarmf = _id => {
	return {
		...larmfFileData[_id - 1],
		img: getLarmfImgIPFS(_id),
		img_cutout: getLarmfCutoutIPFS(_id),
		img_cutout_web: getLarmfCutoutMinifiedIPFS(_id),
	}
}

/**
 * gets array of owned larmf ids by address
 * @param _address: string
 * @returns number[]
 */
export const getLarmfsInWallet = async (_provider, _address) => {
	try {
		const larmfContract = getLarmfContract(_provider)
		const tokensOwned = await larmfContract.getTokensOwnedByAddress(_address)
		return tokensOwned.map(token =>
			parseInt(ethers.utils.formatUnits(token.toString(), 0))
		)
	} catch (error) {
		console.error(error)
		alert('Error fetching LARMFs - check console...')
	}
}
