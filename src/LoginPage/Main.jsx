import mainStyle from './main.module.css'

function Main() {
    return(
        <main>
            <div className={mainStyle.paragraph}>
                <h1>
                    Welcome to Login Page
                </h1>
            </div>
            <div className={mainStyle.loginContainer}>
                <div className={mainStyle.loginHeader}>
                    <h2>Login</h2>
                </div>
                <div className={mainStyle.loginInput}>
                    <div>
                        <label htmlFor="">Username</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Password</label>
                        <input type="password" />
                    </div>
                </div>
                <button>
                    Login
                </button>
            </div>
        </main>
    );
}

export default Main