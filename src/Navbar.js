import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="links">
                <Link to="/" className="link">Home</Link>
                <Link to="/about" className="link">About</Link>
                <Link to="/projects" className="link">Projects</Link>
                <Link to="/contact" className="link">Contact</Link>
            </div>
        </nav>
    );
}

export default Navbar;