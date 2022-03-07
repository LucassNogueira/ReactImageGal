// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_6z-N_8DHX_QnxiGk1mrLBBYZrDi0j4c",
  authDomain: "firegramln.firebaseapp.com",
  projectId: "firegramln",
  storageBucket: "firegramln.appspot.com",
  messagingSenderId: "291713509460",
  appId: "1:291713509460:web:8a00403c98d3bffe58a5c1",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };
