  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBuvVRa17Yt-qxRDlO41rSr3netE5sECOU",
    authDomain: "react-todo-13046.firebaseapp.com",
    projectId: "react-todo-13046",
    storageBucket: "react-todo-13046.appspot.com",
    messagingSenderId: "1015247711639",
    appId: "1:1015247711639:web:b56410f6baf4ab2c1528d2"
  };

  const app = initializeApp(firebaseConfig);


  export const db = getFirestore();