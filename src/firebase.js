import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import 'firebase/compat/database'

// const firebaseConfig = {
//     apiKey: "AIzaSyB_GjmYED5xqGdqPm8gvkaSg3ntFJdnTPw",
//     authDomain: "react-contactsss.firebaseapp.com",
//     projectId: "react-contactsss",
//     storageBucket: "react-contactsss.appspot.com",
//     messagingSenderId: "466214171728",
//     appId: "1:466214171728:web:f14ec54ffbd788d0d38d55",
//     measurementId: "G-Q2QF2M4QH6"
//   };
  
  const firebaseConfig = {
  apiKey: "AIzaSyD-sIcdGoX4y8UuU8z4L6g524lESVHpI3c",
  authDomain: "test-ivy-tools.firebaseapp.com",
  databaseURL: "https://test-ivy-tools-default-rtdb.firebaseio.com",
  projectId: "test-ivy-tools",
  storageBucket: "test-ivy-tools.appspot.com",
  messagingSenderId: "995311459518",
  appId: "1:995311459518:web:17f41dc217a1783d30d2ef",
  measurementId: "G-M6GFDTPYKS"
};
  const fireDb = firebase.initializeApp(firebaseConfig)
  export default fireDb.database().ref();