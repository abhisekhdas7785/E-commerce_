import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBIx8wyP7BAJqLUJzON0ag8rB-_VyrzMcg",
    authDomain: "clone-d4a33.firebaseapp.com",
    databaseURL: "https://clone-d4a33.firebaseio.com",
    projectId: "clone-d4a33",
    storageBucket: "clone-d4a33.appspot.com",
    messagingSenderId: "423826236727",
    appId: "1:423826236727:web:017075408a2e48280326b2",
    measurementId: "G-EK561HKQ87"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };