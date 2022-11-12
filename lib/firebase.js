import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

//this is from firebase website after creating a web app project
const firebaseConfig = {
    apiKey: "AIzaSyCrBbcJN7LQ_JOKI2Jd5OkT3zeS_S0FTck",
    authDomain: "fireblog-8097e.firebaseapp.com",
    projectId: "fireblog-8097e",
    storageBucket: "fireblog-8097e.appspot.com",
    messagingSenderId: "67248972698",
    appId: "1:67248972698:web:b010a238f956e97aefd023",
    measurementId: "G-SBP1KCK72N"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
};

//exporting all of firebase functionality
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const firestore = firebase.firestore();
export const storage = firebase.storage();