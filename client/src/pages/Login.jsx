import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="auth">
           <h1>Login</h1> 
           <form>
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Password" />
            <button type="submit">Log in</button>
            <p>Error occured</p>
            <span>Don't have an account? <Link to="/register">Register</Link></span>
           </form>
        </div>
    );
};

export default Login;