import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
    <div className="navbar">
        <div className="container">
            <div className="logo">Diet&Nutrition</div>
            <div className="links">
                <Link className='link' to="/?cat=diet"><h6>Diet</h6></Link>
                <Link className='link' to="/?cat=science"><h6>Science</h6></Link>
                <Link className='link' to="/?cat=exercise"><h6>Exercise</h6></Link>
                <Link className='link' to="/?cat=health"><h6>Health</h6></Link>
                <Link className='link' to="/?cat=nutrition"><h6>Nutrition</h6></Link>
                <span>Diud</span>
                <span>Logout</span>
                <span className='write'>
                    <Link className='link' to="/write">Write</Link>
                </span>
            </div>
        </div>
    </div>
    );
};


export default Navbar;