import * as firebase from "firebase/app";
import "firebase/auth";

export const createUserWithEmailAndPassword = (name, email, pass) => {
    return firebase.auth().createUserWithEmailAndPassword(email, pass)
      .then(res => {
        updateUserInfo(name);
        return res.user;
      })
      .catch(err => {
        console.log(err.message);
        return err.message;
      })
}

const updateUserInfo = (name) => {
    const user = firebase.auth().currentUser;
    user.updateProfile({
      displayName: name
    })
    .then()
    .catch();
}