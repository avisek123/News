import firebase from "firebase";
// REVIEW Import Firebase Auth Module
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAs51sr8-5z_quVkfFCqgxcEpjb6xGdZEM",
  authDomain: "fir-crud-f5ca7.firebaseapp.com",
  databaseURL: "https://fir-crud-f5ca7.firebaseio.com",
  projectId: "fir-crud-f5ca7",
  storageBucket: "fir-crud-f5ca7.appspot.com",
  messagingSenderId: "655257358975",
  appId: "1:655257358975:web:d9c13d6076663a6de9654a",
};
const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();

export const database = app.database();
export default app;
