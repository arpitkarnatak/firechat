import firebase from 'firebase'

const firebaseAp = {
  /* Your firebase project creations */
  };
  
const firebaseApp = firebase.initializeApp(firebaseAp);
const db = firebaseApp.firestore();
export default db
