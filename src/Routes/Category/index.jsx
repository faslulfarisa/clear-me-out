import CategoryImage from "../../assets/icons/CategoryImage.png"
import PencilImage from "../../assets/icons/Vector.png"
import StarImage from "../../assets/icons/Group 1.png"
import "./style.css"
import { useParams } from "react-router-dom"

const Category = () => {
    const params = useParams();
    return (
        <div className="category-page-container">
            <div className="category-sub-container">
                <div className="image-section">
                    <img src={CategoryImage} alt="electronics-image"/>
                </div>
                <div className="content-section">
                    <h1>{params.title}</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, nostrum a! Fugit, eveniet! Obcaecati iure distinctio voluptas sed cupiditate officia, magni voluptatibus nesciunt, velit maiores earum, consequatur libero laborum harum.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, nostrum a! Fugit, eveniet! Obcaecati iure distinctio voluptas sed cupiditate officia, magni voluptatibus nesciunt.</p>
                    <h3>Keys</h3>
                    <div className="button-section">
                    <button>Circuits</button>
                    <button>Circuits</button>
                    <button>Circuits</button>
                    <button>Circuits</button>
                    <button>Circuits</button>
                    <button>Circuits</button>
                    </div>
                </div>
            </div>
            <div className="question-section">
                <div className="question-section1">
                    <p>1.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti quidem tempora cum corporis quasi commodi asperiores voluptatem ex excepturi, optio totam magnam placeat vel porro culpa dolorem voluptate ratione maxime?</p>
                    <div className="comment-section">
                        <div className="comment-subsection">
                            <img src={PencilImage}/> 
                            <div className="number">3</div>
                            <div className="comment-text">Answers</div>
                        </div>
                        <div className="comment-subsection">
                            <img src={StarImage} alt=""/>
                            <div className="number">315</div>
                            <div className="comment-text">Views</div>
                        </div>  
                    </div>      
                </div>
                <div className="question-section2">
                    <p>1.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti quidem tempora cum corporis quasi commodi asperiores voluptatem ex excepturi, optio totam magnam placeat vel porro culpa dolorem voluptate ratione maxime?</p>
                    <div className="comment-section">
                        <div className="comment-subsection">
                            <img src={PencilImage}/> 
                            <div className="number">3</div>
                            <div className="comment-text">Answers</div>
                        </div>
                        <div className="comment-subsection">
                            <img src={StarImage} alt="" />
                            <div className="number">315</div>
                            <div className="comment-text">Views</div>
                        </div>  
                    </div>      
                </div>
                <div className="question-section3">
                    <p>1.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti quidem tempora cum corporis quasi commodi asperiores voluptatem ex excepturi, optio totam magnam placeat vel porro culpa dolorem voluptate ratione maxime?</p>
                    <div className="comment-section">
                        <div className="comment-subsection">
                            <img src={PencilImage}/> 
                            <div className="number">3</div>
                            <div className="comment-text">Answers</div>
                        </div>
                        <div className="comment-subsection">
                            <img src={StarImage} alt="" />
                            <div className="number">315</div>
                            <div className="comment-text">Views</div>
                        </div>  
                    </div>      
                </div>
            </div>  
        </div>       
    )
}

export default Category
