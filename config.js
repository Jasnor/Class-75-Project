import firebase from "firebase";
require("@firebase/firestore");

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAab3_-qkKFS2n4_XZnz_31FtrtmcyBTqc",
  authDomain: "project-71-6c304.firebaseapp.com",
  projectId: "project-71-6c304",
  storageBucket: "project-71-6c304.appspot.com",
  messagingSenderId: "661442480833",
  appId: "1:661442480833:web:b020a69d9f3f8abef42240",
  measurementId: "G-98JBFL93XT"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
