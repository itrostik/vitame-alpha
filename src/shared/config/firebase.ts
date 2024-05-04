import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyAMMgQNys-yqCW1eHiKOfnDoUt5ZM700Kg',
    authDomain: 'vitame-c789f.firebaseapp.com',
    projectId: 'vitame-c789f',
    storageBucket: 'vitame-c789f.appspot.com',
    messagingSenderId: '243105703505',
    appId: '1:243105703505:web:6fe27cb6b37cda486dba70'
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore()
