import * as firebase from "firebase/app";
import "firebase/auth";

export const handleGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider)
    .then( res => {
      const newUserInfo = res.user;
      newUserInfo.name = newUserInfo.displayName;
      return newUserInfo;
    })
    .catch(err => {
      return err.message;
    });
}

export const handleFbSignIn = () => {
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(fbProvider)
    .then(res => {
        const newUserInfo = res.user;
        newUserInfo.name = newUserInfo.displayName;
        return newUserInfo;
    })
    .catch(err => {
      return err.message;
    })
}