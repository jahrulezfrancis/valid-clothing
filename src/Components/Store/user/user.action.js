import { createAction } from "@reduxjs/toolkit"
import { UserActionTypes } from "./user.type"


export const setCurrentUser = createAction(UserActionTypes.setCurrentUser);