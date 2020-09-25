import * as firebase from "firebase/app";
import "firebase/auth";

export const createUserWithEmailAndPassword = (name, email, pass) => {
    return firebase.auth().createUserWithEmailAndPassword(email, pass)
      .then(res => {
        const newUserInfo = res.user;
        newUserInfo.error = '';
        newUserInfo.success = true;
        updateUserInfo(name);
        return newUserInfo;
      })
      .catch(err => {
        const newUserInfo = {};
        newUserInfo.error = err.message;
        newUserInfo.success = false;
        return newUserInfo;
      })
}

const updateUserInfo = name => {
    const user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name,
    }).then(
      console.log('user updated successfully!!!')
    ).catch(err => {
      console.log('not updated');
    });
}