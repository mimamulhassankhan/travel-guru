import * as firebase from "firebase/app";
import "firebase/auth";

export const handleSignOut = () => {
    return firebase.auth().signOut()
    .then(res => {
      const signedOutUser = {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
      return signedOutUser;
    })
    .catch(err => {
      prompt(err.message);
    })
  }