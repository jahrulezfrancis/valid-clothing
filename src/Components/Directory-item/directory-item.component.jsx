import { DirectoriesContainer, Body, DirectoryItemContainer, BackgroundImageContainer } from "./directory-item.styles"
import { Link } from "react-router-dom"


const DirectoryItem = ({ categoryList }) => {
    return (
        <DirectoriesContainer>
            {categoryList.map(({ title, id, imageUrl }) => {
                return (
                    <DirectoryItemContainer key={id}>
                        <BackgroundImageContainer imageUrl={imageUrl} />
                        <Body>
                            <Link to={`/shop/${title}`}>
                                <h2>{title}</h2>
                                <p>Shop Now</p>
                            </Link>
                        </Body>
                    </DirectoryItemContainer>)
            })}


        </DirectoriesContainer>
    )
}

export default DirectoryItem;