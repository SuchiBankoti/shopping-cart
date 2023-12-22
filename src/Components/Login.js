import "./Login.css"

export default function LoginPage() {
    const url="https://images.unsplash.com/photo-1633886036602-d05f76097e67?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
    return (
            <div className="login-main-page">
                <div className="login-main-page-background">
                    <img
                    src={url} alt="ii"></img>
                </div>
                <div className="login-main-page-content">
                    <div className="login-main-page-content-title">
                        Log In
                    </div>
                    <div className="login-main-page-content-sub-title">
                        Login to your account
                    </div>
                    <div className="login-main-page-content-box">
                        <label className="login-label">Username</label>
                        <input className="login-input"></input>
                        <br/>
                        <label className="login-label">Password</label>
                        <input className="login-input"></input>
                        <button className="login-btn">Log In</button>
                    </div>
                
                </div>
            </div>
    )
}