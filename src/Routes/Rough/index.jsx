import "./style.css"
const Rough = () => {
    return (
        <div className="main-ask-container">
            <div className="ask-container">
                <div className="box">
                    <button onClick={
                        ()=>{
                            alert("faslu")
                        }}>1</button>
                </div>
                <div className="box">
                    <button onClick="">2</button>
                </div>
                <div className="box">
                    <button onClick="">3</button>
                </div>
                <div className="box">
                    <button onClick="">4</button>
                </div>
                <div className="box">
                    <button onClick="">5</button>
                </div>
                <div className="box">
                    <button onClick="">6</button>
                </div>
            </div>
        </div>
    )
}

export default Rough
