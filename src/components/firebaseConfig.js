  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCndtZQjyofWfTUliCMv1UOlCPChRvL_pk",
    authDomain: "todo-3cbc0.firebaseapp.com",
    projectId: "todo-3cbc0",
    storageBucket: "todo-3cbc0.appspot.com",
    messagingSenderId: "699760091192",
    appId: "1:699760091192:web:b3e31857ce52621479c6cd"
  };

  const app = initializeApp(firebaseConfig);


  export const db = getFirestore();




  
  // const firebaseConfig = {
  //   apiKey: "AIzaSyBuvVRa17Yt-qxRDlO41rSr3netE5sECOU",
  //   authDomain: "react-todo-13046.firebaseapp.com",
  //   projectId: "react-todo-13046",
  //   storageBucket: "react-todo-13046.appspot.com",
  //   messagingSenderId: "1015247711639",
  //   appId: "1:1015247711639:web:b56410f6baf4ab2c1528d2"
  // };