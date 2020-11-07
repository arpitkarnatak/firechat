import firebase from 'firebase'

const firebaseAp = {
  /* Your firebase */
  };
  
const firebaseApp = firebase.initializeApp(firebaseAp);
const db = firebaseApp.firestore();
export default db