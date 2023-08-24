import { createContext, useEffect, useState } from "react";
import { onAuthStateChangedListener } from "../Utils/Firebase/firebase-.utils";


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

export const UserProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null)
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