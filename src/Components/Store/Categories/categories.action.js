import { createAction } from "../../Utils/Reducer/Reducer.utils"
import { CategoriesActionTypes } from "./categories.type"


export const SetCategoriesMap = (categoriesMap) => createAction(CategoriesActionTypes.SetCategoriesMap, categoriesMap)