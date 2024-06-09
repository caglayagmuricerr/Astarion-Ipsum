import { NavLink } from 'react-router-dom';
import '../../styles/Navbar.css';

const NavItem = ({ to, children }) => (
    <NavLink to={to} className={({ isActive }) => isActive ? 'active txt-m' : 'passive txt-m'}>
        <p>{children}</p>
    </NavLink>
);

const Navbar = () => {
    return (
        <header className="header">
            <nav className='navbar'>
                <NavItem to="/">Ipsum</NavItem>
                <NavItem to="/binary">Binary</NavItem>
                <NavItem to="/credits">Credits</NavItem>
            </nav>
        </header>
    );
};

export default Navbar;
