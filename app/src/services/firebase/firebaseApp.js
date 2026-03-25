import { initializeApp, getApps } from 'firebase/app'
import { firebaseConfig } from './config'

// Avoid re-initializing Firebase during development reloads.
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig)

export const firebaseApp = app

