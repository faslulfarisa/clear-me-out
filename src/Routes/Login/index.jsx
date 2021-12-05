import "./style.css"
const Login = () => {
    return (
        <div className="login-container">
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
                        <button className="login-page-login-button">Login</button>
                    </form>
        </div>
    )
}

export default Login
