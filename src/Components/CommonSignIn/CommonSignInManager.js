import * as firebase from "firebase/app";
import "firebase/auth";

export const handleGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider)
    .then( res => {
      const {email, photoURL, displayName} = res.user;
      const signedInUser = {
        isSignedIn : true,
        name : displayName,
        email: email,
        photo : photoURL
      }
      return signedInUser;
    })
    .catch(err => {
      console.log(err);
      console.log(err.message);
    });
}

export const handleFbSignIn = () => {
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(fbProvider)
    .then(res => {
        return console.log(res);
    })
    .catch(err => {
      console.log(err.message);
    })
}