import DirectoryItem from "../Directory-item/directory-item.component";
import { CategoryInfo } from "../Directory-item/category-info";

const DirectoryComponent = () => {
    return (
        <DirectoryItem categoryList={CategoryInfo} />

    )
}

export default DirectoryComponent;