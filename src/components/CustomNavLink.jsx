import { NavLink, useLocation } from 'react-router-dom';

const CustomNavLink = ({ to, children, setIsMenuOpen }) => {

    const location = useLocation();
    const scrollToTop = () => {
        if (location.pathname === to) {
            window.scrollTo(0, 0);
        }
    };

    return (
        <NavLink
            to={to}
            className={({ isActive }) => `hover:border-b-2 ${isActive ? 'text-orange-500 font-bold hover:border-orange-500' : 'text-blue-900 border-blue-900'}`}
            onClick={() => { setIsMenuOpen(false); scrollToTop(); }}
        >
            {children}
        </NavLink>
    );
}


export default CustomNavLink;