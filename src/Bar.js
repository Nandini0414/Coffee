import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './navigation.css';


const Layout= () => {
    return (
        <>

            <div className='navbar'>
                <div>

                </div>
            <div>
                <img src="https://corretto.qodeinteractive.com/wp-content/themes/corretto/assets/img/logo-light.png" width={100} ></img>
            </div>
            <div>

            </div>
            <div>

            </div>
                <div>

                </div>
                <div id='nav'>
                    <ul className="unorder">
                        <li>
                            <Link to="/" className="list">Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className="list">About</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="list">Contact</Link>
                        </li>
                        <li>
                            <Link to="/Product" className="list">Product</Link>
                        </li>
                    </ul>
                </div>


            </div>
            <Outlet />
        </>

    );

}

export default Layout;