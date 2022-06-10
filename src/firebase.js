import firebase from 'firebase/compat/app';
import 'firebase/compat/database'

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
  databaseURL: "https://react-contactsss-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-contactsss",
  storageBucket: "react-contactsss.appspot.com",
  messagingSenderId: "466214171728",
  appId: "1:466214171728:web:f14ec54ffbd788d0d38d55",
  measurementId: "G-Q2QF2M4QH6"
};

  const fireDb = firebase.initializeApp(firebaseConfig)
  export default fireDb.database().ref();