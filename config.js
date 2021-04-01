import firebase from 'firebase';
require("@firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyBLMGb-t9Ow3rJoQLYyW8TPC3sdUab8IWM",
    authDomain: "willy-818bb.firebaseapp.com",
    projectId: "willy-818bb",
    storageBucket: "willy-818bb.appspot.com",
    messagingSenderId: "183196848221",
    appId: "1:183196848221:web:f1c5f454620e324f13bdb4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();