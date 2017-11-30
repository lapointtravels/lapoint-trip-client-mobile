import firebase from 'react-native-firebase';

const config = {
  apiKey: 'AIzaSyB1ErMUuIqSCYpeKplYR-yvHhQqiINsG-w',
  authDomain: 'hackweek-lapoint.firebaseapp.com',
  projectId: 'hackweek-lapoint'
}

firebase.initializeApp(config)

export const db = firebase.firestore()
