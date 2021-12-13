import "./style.css"
const Ask = () => {
    return (
        <div className="ask-container">
            <div className="ask-container-box">
                <h2>Ask A Question</h2>
                <div className="category-input">Category
                <select>
                    <option>Electrical</option>
                    <option>Electrical</option>
                </select>
                </div>
                <div className="question-area">
                <div className="question-field">Question</div>
                <textarea rows="7" cols="50"></textarea>
                </div>
                <button className="ask-button">Submit</button>  
            </div>
        </div>
         
    )
}

export default Ask
