export const LOGIN_NEW_USER = 'LOGIN_NEW_USER';

export const addLoggedinUser = user => {
    return {type: LOGIN_NEW_USER, user}
}