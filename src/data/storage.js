import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
import { FIREBASE_CONFIG } from '../config'

const firebase = initializeApp(FIREBASE_CONFIG)
const storage = getStorage(firebase, `gs://${FIREBASE_CONFIG.storageBucket}`)

export default storage
