import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDTOBnAnlqLWKLxJSRGtNmBkjt3OsuBZKs",
  authDomain: "bharathanmudaliar.firebaseapp.com",
  databaseURL: "https://bharathanmudaliar.firebaseio.com",
  projectId: "bharathanmudaliar",
  storageBucket: "bharathanmudaliar.appspot.com",
  messagingSenderId: "1002883495387",
  appId: "1:1002883495387:web:ad01b0ab3198e709"
}

firebase.initializeApp(firebaseConfig)
// firebase.firestore().enablePersistence()
//   .then(() => console.log('FireStore offilne persistance enabled'))
const storage = firebase.storage()

export {
    storage, firebase as default 
}
