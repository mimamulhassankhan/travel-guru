import { LOGIN_NEW_USER } from "../Actions/appActions"

const initialState = {
    user : []
}


export const appReducer = (state = initialState, actions) => {
    switch (actions.type){
        case LOGIN_NEW_USER :
            const newUser = actions.user;
            return {
                ...state,
                user : newUser
            }
        default:
            return state;
    }
}