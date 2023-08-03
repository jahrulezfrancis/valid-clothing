import "./categories.styles.scss"


const CategoryItem = ({ categoryList }) => {
    return (
        <div className="categories-container">
            {categoryList.map(({ title, id, imageUrl }) => {
                return (
                    <div key={id} className="category-container">
                        <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
                        <div className="category-body-container">
                            <h2>{title}</h2>
                            <p>Shop Now</p>
                        </div>
                    </div>)
            })}


        </div>
    )
}

export default CategoryItem;