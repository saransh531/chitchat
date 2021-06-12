import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyChKOp0oZ6NzXy2FjNcG_mkEZqwlqm4s3s",
    authDomain: "unichat-f9f65.firebaseapp.com",
    projectId: "unichat-f9f65",
    storageBucket: "unichat-f9f65.appspot.com",
    messagingSenderId: "940103472736",
    appId: "1:940103472736:web:8e8ad87b36e5925923d505"
  }).auth();