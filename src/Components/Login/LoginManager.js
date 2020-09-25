import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

export const defaulftLoggingFramework = () => {
    if(firebase.apps.length === 0)
        firebase.initializeApp(firebaseConfig);
}

export const signInWithEmailAndPassword = (email, pass) => {
    return firebase.auth().signInWithEmailAndPassword(email, pass)
      .then(res => {
        const newUserInfo = res.user;
        newUserInfo.name = newUserInfo.displayName;
        return newUserInfo
      }).catch(err => {
        const newUserInfo = {};
        newUserInfo.error = err.message;
        newUserInfo.success = false;
        return newUserInfo;
      })
}