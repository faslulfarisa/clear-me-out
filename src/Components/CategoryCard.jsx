import CategoryImage from "../assets/icons/CategoryImage.png"

const CategoryCard = () => {
    return (
        <div className="category-card">
            <img src={CategoryImage} alt=""/>
            <div className="details-section">
                <h1>Electronics</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid nobis consequuntur eum? Repellendus dicta vel laudantium sapiente, numquam officiis repudiandae omnis quidem at, consequatur voluptatibus, sed quaerat nobis assumenda. Dolore?</p>
            </div>
        </div>
    )
}

export default CategoryCard
