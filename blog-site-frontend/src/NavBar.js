import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        // Navigation container
        <nav>
            <ul>
                {/* Home link */}
                <li>
                    <Link to="/">Home</Link>
                </li>
                {/* About link */}
                <li>
                    <Link to="/about">About</Link>
                </li>
                {/* Articles link */}
                <li>
                    <Link to="/articles">Articles</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;