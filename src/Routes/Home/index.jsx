import CategoryCard from "../../Components/CategoryCard"
import CategoryImage from "../../assets/icons/CategoryImage.png"


const categoryList = [
    {
        image:CategoryImage,
        title:"Electronics",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ipsum est exercitationem assumenda, nulla beatae. Officia tenetur, eius incidunt consectetur mollitia exercitationem! Aliquid unde animi ducimus doloremque necessitatibus, beatae corporis."
    },
    {
        image:CategoryImage,
        title:"Electrical",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ipsum est exercitationem assumenda, nulla beatae. Officia tenetur, eius incidunt consectetur mollitia exercitationem! Aliquid unde animi ducimus doloremque necessitatibus, beatae corporis."
    },
    {
        image:CategoryImage,
        title:"ECE",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ipsum est exercitationem assumenda, nulla beatae. Officia tenetur, eius incidunt consectetur mollitia exercitationem! Aliquid unde animi ducimus doloremque necessitatibus, beatae corporis."
    },
    {
        image:CategoryImage,
        title:"ECE",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ipsum est exercitationem assumenda, nulla beatae. Officia tenetur, eius incidunt consectetur mollitia exercitationem! Aliquid unde animi ducimus doloremque necessitatibus, beatae corporis."
    },
    {
        image:CategoryImage,
        title:"ECE",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ipsum est exercitationem assumenda, nulla beatae. Officia tenetur, eius incidunt consectetur mollitia exercitationem! Aliquid unde animi ducimus doloremque necessitatibus, beatae corporis."
    },
    {
        image:CategoryImage,
        title:"ECE",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ipsum est exercitationem assumenda, nulla beatae. Officia tenetur, eius incidunt consectetur mollitia exercitationem! Aliquid unde animi ducimus doloremque necessitatibus, beatae corporis."
    }
]
const Home = () => {
    return (
        <div className="container">
            <div className="category-container">
                {categoryList.map((data,i)=><CategoryCard {...data} key ={i}/>)}
            </div> 
        </div>
    )
}

export default Home
