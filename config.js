import firebase from 'firebase';

require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAovcARUeXVEUHYsLBQBckXV0NjAUyxh6c",
  authDomain: "myapp-f587c.firebaseapp.com",
  projectId: "myapp-f587c",
  storageBucket: "myapp-f587c.appspot.com",
  messagingSenderId: "1029717602012",
  appId: "1:1029717602012:web:37da09d5b9c3a174f84e19"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();