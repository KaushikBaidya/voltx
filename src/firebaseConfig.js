// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyC53pB_mfIAV6xuhd-4LA5XeNalfBDf-7g',
  authDomain: 'boltx-96716.firebaseapp.com',
  projectId: 'boltx-96716',
  storageBucket: 'boltx-96716.appspot.com',
  messagingSenderId: '401605386178',
  appId: '1:401605386178:web:7f7b49ce7e234bfc93805b',
  measurementId: 'G-2EV3VS5RWW',
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore()
