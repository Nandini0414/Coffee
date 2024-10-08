import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './navigation.css';

const Layout = () => {
    return (
        <>
            <nav>
                <ul className='header_main'>
                    <li className='header_navigation'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='header_navigation'>
                        <Link to="/about">About</Link>
                    </li>
                    <li className='header_navigation'>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className='header_navigation'>
                        <Link to="/product">Product List</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}

export default Layout;