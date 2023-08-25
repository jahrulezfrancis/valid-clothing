import { UserActionTypes } from "./user.type";

const InitialState = {
    currentUser: null
}

export const UserReducer = (state = InitialState, action = {}) => {
    switch (action.type) {
        case UserActionTypes.setCurrentUser:
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }

}


