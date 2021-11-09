import { initializeApp } from 'firebase/app'
import firebaseConfig from './firebaseConfig'

const firebaseInitializeApp = () => {
    initializeApp(firebaseConfig)
}
export default firebaseInitializeApp;