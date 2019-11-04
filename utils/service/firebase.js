import firebase from 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyAeeyB5T59msazWyUb_yFssRwZlbJiOvEg',
  authDomain: 'thecapital-1522232322924.firebaseapp.com',
  databaseURL: 'https://thecapital-1522232322924.firebaseio.com',
  projectId: 'thecapital-1522232322924',
  storageBucket: 'thecapital-1522232322924.appspot.com',
  messagingSenderId: '634645152018',
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const db = firebase.database();
