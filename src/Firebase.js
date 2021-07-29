import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDcvntap5crmJ5ZnMFNbCb2lTQYeo5kef0",
    authDomain: "disney-clone-basic.firebaseapp.com",
    projectId: "disney-clone-basic",
    storageBucket: "disney-clone-basic.appspot.com",
    messagingSenderId: "151403614778",
    appId: "1:151403614778:web:eb8f35d1ccc3d9654e5b03",
    measurementId: "G-HNQ89ECR59"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth;
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;