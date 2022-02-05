import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

  const firebaseConfig = {
    apiKey: "AIzaSyAC_YUz-SBlkipYoYOOWo5S7qyfEX2b4yo",
    authDomain: "sistema-de-chamados-7d6b6.firebaseapp.com",
    projectId: "sistema-de-chamados-7d6b6",
    storageBucket: "sistema-de-chamados-7d6b6.appspot.com",
    messagingSenderId: "1027596549001",
    appId: "1:1027596549001:web:c8644bcbdf3b8f46b23f58",
    measurementId: "G-C8Z3HZQ9QP"
  };

  // Initialize Firebase

  if(!firebase.apps.length) { 

      firebase.initializeApp(firebaseConfig);
  
    }

    export default firebase;