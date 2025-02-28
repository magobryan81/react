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
                        <input type="text" placeholder='Username' />
                    </div>
                    <div>
                        <input type="password" placeholder='Password' />
                    </div>
                </div>
                <button className={mainStyle.button}>
                    Login
                </button>
            </div>
        </main>
    );
}

export default Main