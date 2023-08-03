import CategoryItem from "../Category-item/category-item.component";
import { CategoryInfo } from "../Category-item/category-info";

const DirectoryComponent = () => {
    return (
        <CategoryItem categoryList={CategoryInfo} />

    )
}

export default DirectoryComponent;