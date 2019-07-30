import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAsrrxKaECF7neggUG5O2ILHyulB9GqBtQ",
  authDomain: "marioplan-62288.firebaseapp.com",
  databaseURL: "https://marioplan-62288.firebaseio.com",
  projectId: "marioplan-62288",
  storageBucket: "marioplan-62288.appspot.com",
  messagingSenderId: "474504849006"
};
firebase.initializeApp(config);
export default firebase;

/*
// firebase.firestore().collection('projects').add({
//   ...project,
//   authorFirstName: 'HOHO',
//   authorLastName: 'Ninja',
//   authorId: 12345,
//   createAt: new Date()
// }).then(() => {
//   //dispatch({ type: 'CREATE_PROJECT', project })
// }).catch((err) => {
//   //dispatch({ type: 'CREATE_PROJECT_ERROR', err })
// })

class Firebase {
  constructor() {
    firebase.initializeApp(config);
    this.auth = firebase.auth();
    this.db = firebase.firestore();
  }
  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password).catch(err => {
      // do something to surface the error
    })

    // this.auth.onAuthStateChanged(user => {
    //   if (user) {
    //     // do something to set the current user in the app's state
    //   } else {
    //     // do something to clear current user info/redirect to login page
    //   }
    // })
  }
  logout() {
    return this.auth.signOut();
  }
  async register(name, email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password)
    return this.auth.currentUser.updateProfile({
      displayName: name
    });
  }
}

export default Firebase();
*/