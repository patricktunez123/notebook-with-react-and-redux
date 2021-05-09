import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAdgkPE7scqtfat2itnKrYCg53i7cZgKLw",
  authDomain: "notebook-c2d56.firebaseapp.com",
  projectId: "notebook-c2d56",
  storageBucket: "notebook-c2d56.appspot.com",
  messagingSenderId: "510298344834",
  appId: "1:510298344834:web:bfb8013dcf1b34e582d39b",
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
