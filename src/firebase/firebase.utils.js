import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyC8SolQWhxKxEVrtQm5lykCjVuvkrgAKUc",
    authDomain: "crwn-db-6e2d9.firebaseapp.com",
    projectId: "crwn-db-6e2d9",
    storageBucket: "crwn-db-6e2d9.appspot.com",
    messagingSenderId: "961111421844",
    appId: "1:961111421844:web:3933fa62b8d17b16c11581",
    measurementId: "G-ZCEVPXMSHC"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  //Gives access to the new GoogleAuthProvider() class from the authentication library.
  const provider = new firebase.auth.GoogleAuthProvider();

  //Takes a couple custom parameters using the setCustomParameters method
  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;