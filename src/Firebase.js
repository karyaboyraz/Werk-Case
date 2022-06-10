import * as firebase from "firebase";
export const config = {
  apiKey: "AIzaSyCVrTRPZwowo9-Fc7Zah5m8v_CxcubfDCo",
  authDomain: "werk-todo-117d8.firebaseapp.com",
  projectId: "werk-todo-117d8",
  storageBucket: "werk-todo-117d8.appspot.com",
  messagingSenderId: "908144913473",
  appId: "1:908144913473:web:27ea7587b1b048138ceac0",
  measurementId: "G-KCKVYX4DS3",
};
firebase.initializeApp(config);
const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("todos");
