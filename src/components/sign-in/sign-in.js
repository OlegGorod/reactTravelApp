import './sign-in.css'
import { Link } from 'react-router-dom'

const SignIn = () => {
    return (
        <main className="sign-in-page">
            <h1 className="visually-hidden">Travel App</h1>
            <form className="sign-in-form" autoComplete="off">
                <h2 className="sign-in-form__title">Sign In</h2>
                <label className="input">
                    <span className="input__heading">Email</span>
                    <input data-test-id="auth-email" name="email" type="email" required />
                </label>
                <label className="input">
                    <span className="input__heading">Password</span>
                    <input
                        data-test-id="auth-password"
                        name="password"
                        type="password"
                        autoComplete="new-password"
                        required
                    />
                </label>
                <Link to={'/'} data-test-id="auth-submit" className="button" type="submit">
                    Sign In
                </Link>
            </form>
            <span>
                Don't have an account?
                <Link
                    to='/sign-up'
                    data-test-id="auth-sign-up-link"
                    href="./sign-up.html"
                    className="sign-in-form__link"
                >
                    Sign Up
                </Link>
            </span>
        </main>
    )
}

export default SignIn