import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="auth">
           <h1>Sign Up</h1> 
           <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Sign Up</button>
            <p>Error occured</p>
            <span>Have an account? <Link to="/login">Log in</Link></span>
           </form>
        </div>
    );
};

export default Register;