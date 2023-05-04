// firebaseConfig.js
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCEOGXo70NNQHu9HHM7k18F9Xe-eUc1aSo",
  authDomain: "storyapp-2adc5.firebaseapp.com",
  databaseURL: "https://storyapp-2adc5-default-rtdb.firebaseio.com",
  projectId: "storyapp-2adc5",
  storageBucket: "storyapp-2adc5.appspot.com",
  messagingSenderId: "1005189386253",
  appId: "1:1005189386253:web:42d294f3ee79908959c544"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
