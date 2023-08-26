import { createAction } from "../../Utils/Reducer/Reducer.utils"
import { CategoriesActionTypes } from "./categories.type"


export const SetCategories = (categories) => createAction(CategoriesActionTypes.SetCategories, categories)