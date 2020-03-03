import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDWhP1gnVx7KXilgNLu5zwNEiZuxccfZPQ",
    authDomain: "fungi-funguy.firebaseapp.com",
    databaseURL: "https://fungi-funguy.firebaseio.com",
    projectId: "fungi-funguy",
    storageBucket: "fungi-funguy.appspot.com",
    messagingSenderId: "44305783892",
    appId: "1:44305783892:web:580bdf51257d791dbaa1c1"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
