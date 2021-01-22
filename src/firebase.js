import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDCM5qZAjCiLaDNgDMv5SLkD70Ny4MYLzc",
    authDomain: "clone-c9211.firebaseapp.com",
    projectId: "clone-c9211",
    storageBucket: "clone-c9211.appspot.com",
    messagingSenderId: "235929814962",
    appId: "1:235929814962:web:63467b2e8bb25fd7b906ab",
    measurementId: "G-67QX7MBF5G"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db,auth,provider};