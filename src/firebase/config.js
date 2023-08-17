import firebase from 'firebase/app';

import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDF2BZIpEFfHNEChHGsJ70Uv4jREZ4i9rE",
    authDomain: "halal-gluten-free-recipes.firebaseapp.com",
    projectId: "halal-gluten-free-recipes",
    storageBucket: "halal-gluten-free-recipes.appspot.com",
    messagingSenderId: "885621490481",
    appId: "1:885621490481:web:fc3480533917cecaff2610"
  };

  //init firebase

  firebase.initializeApp(firebaseConfig);

  //init services

  const projectFirestore = firebase.firestore();

  export {projectFirestore}
