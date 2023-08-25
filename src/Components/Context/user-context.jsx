import { createContext, useEffect, useReducer } from "react";
import { onAuthStateChangedListener } from "../Utils/Firebase/firebase-.utils";
import { createAction } from "../Utils/Reducer/Reducer.utils";


export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
})

const UserActionTypes = {

    setCurrentUser: 'SetCurrentUser'
}

const UserReducer = (state, action) => {
    const { payload, type } = action;
    switch (type) {
        case UserActionTypes.setCurrentUser:
            return {
                ...state,
                currentUser: payload
            }
        default:
            throw new Error(`Unhandled type ${type} in userReducer`)
    }

}


const InitialState = {
    currentUser: null
}

export const UserProvider = ({ children }) => {
    const [{ currentUser }, dispatch] = useReducer(UserReducer, InitialState)
    console.log(currentUser)

    const setCurrentUser = (user) => {
        dispatch(createAction(UserActionTypes.setCurrentUser, user))
    }
    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        const unSubscribe = onAuthStateChangedListener((user) => {
            setCurrentUser(user)
        })
        return unSubscribe;
    }, [])

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}