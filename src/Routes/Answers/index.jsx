import PencilImage from "../../assets/icons/Vector.png"
import StarImage from "../../assets/icons/Group 1.png"
import "./style.css"
const index = () => {
    return (
        <div className="answer-page-container">
            <div className="question-section-container">
                    <h3>1.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti quidem tempora cum corporis quasi commodi asperiores voluptatem ex excepturi, optio totam magnam placeat vel porro culpa dolorem voluptate ratione maxime?</h3>
                    <div className="button-section">
                    <button>Circuits</button>
                    <button>Circuits</button>
                    <button>Circuits</button>
                    </div>
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
                        <div className="comment-subsection">
                            <div>Date: 11/12/2021</div>
                        </div>
                    </div>      
            </div>          
            <div className="answer-section1">
                 <div className="name-section">
                     <h4>Faslu</h4>
                 </div>
                 <div className="date-section">
                    Date: 11/12/2021
                 </div>
                 <p>1.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti quidem tempora cum corporis quasi commodi asperiores voluptatem ex excepturi, optio totam magnam placeat vel porro culpa dolorem voluptate ratione maxime?</p>   
            </div>   
            <div className="answer-section2">
                 <div className="name-section">
                    <h4>Faslu</h4>
                 </div>
                 <div className="date-section">
                    Date: 11/12/2021
                 </div>
                 <p>1.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti quidem tempora cum corporis quasi commodi asperiores voluptatem ex excepturi, optio totam magnam placeat vel porro culpa dolorem voluptate ratione maxime?</p>   
            </div> 
            <div className="answer-section3">
                 <div className="name-section">
                    <h4>Faslu</h4>
                 </div>
                 <div className="date-section">
                    Date: 11/12/2021
                 </div>
                 <p>1.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti quidem tempora cum corporis quasi commodi asperiores voluptatem ex excepturi, optio totam magnam placeat vel porro culpa dolorem voluptate ratione maxime?</p>   
            </div>  
         </div>
    )
}

export default index
