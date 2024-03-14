import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDIKzKg7Zf2E733XNnnVwH2smjLrXMDLZY",
    authDomain: "transfer-2838d.firebaseapp.com",
    databaseURL: "https://transfer-2838d-default-rtdb.firebaseio.com",
    projectId: "transfer-2838d",
    storageBucket: "transfer-2838d.appspot.com",
    messagingSenderId: "258493728549",
    appId: "1:258493728549:web:9cec19764b620f03defccc"
  };

  initializeApp(firebaseConfig);

  export const authService = getAuth();