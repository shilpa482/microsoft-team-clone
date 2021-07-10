import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCV19zCFRRK9TBOhrn61zTDzziCamqIAL0",
  authDomain: "teams-16.firebaseapp.com",
  databaseURL: "https://teams-16-default-rtdb.firebaseio.com/",
  projectId: "teams-16",
  storageBucket: "teams-16.appspot.com",
  messagingSenderId: "786304123285",
  appId: "1:786304123285:web:1588597dedb3872dabf69c",
  measurementId: "G-CR5XXNVBX7",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
//6:55
