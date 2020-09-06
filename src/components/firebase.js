import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDAjAaA7udvspC_BlkVC1pqrwW1ZMg2Ck4",
  authDomain: "todo-firebase-cc6fd.firebaseapp.com",
  databaseURL: "https://todo-firebase-cc6fd.firebaseio.com",
  projectId: "todo-firebase-cc6fd",
  storageBucket: "todo-firebase-cc6fd.appspot.com",
  messagingSenderId: "398201592962",
  appId: "1:398201592962:web:c309272bdfd5cada65289b",
});

const db = firebaseApp.firestore();

export { firebaseApp, db };
