import "./style.css"
const Login = () => {
    return (
        <div>
            <div className="container">
                <div className="sub-container">
                    <h1>Log In</h1>
                    <form>
                        <div className="input-field">
                            <div className="form-label">Email</div>
                            <input type="text"/>
                        </div>
                        <div className="input-field">
                            <div className="form-label">Password</div>
                            <input type="text"/>
                        </div>
                        <button>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
