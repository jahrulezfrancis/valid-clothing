import "./directory-item.styles.scss"
import { Link } from "react-router-dom"


const DirectoryItem = ({ categoryList }) => {
    return (
        <div className="directories-container">
            {categoryList.map(({ title, id, imageUrl }) => {
                return (
                    <div key={id} className="directory-item-container">
                        <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
                        <div className="directory-item-body">
                            <Link to={`/shop/${title}`}>
                                <h2>{title}</h2>
                                <p>Shop Now</p>
                            </Link>
                        </div>
                    </div>)
            })}


        </div>
    )
}

export default DirectoryItem;