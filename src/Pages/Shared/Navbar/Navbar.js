import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Navbar = () => {

    const { user, logOutUser } = useContext(AuthContext);

    const handleLogOut = () => {
        logOutUser()
            .then(() => { })
            .catch(error => console.log(error))
    }

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost normal-case text-xl">Buy & Sell</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/blogs'>Blogs</Link></li>

                    {
                        user?.uid ?
                            <>
                                <li><Link to='/dashboard'>Dashboard</Link></li>
                                <li><button onClick={handleLogOut}>Log Out</button></li>
                            </>
                            :
                            <><li><Link to='/login'>Login</Link></li></>
                    }

                </ul>
            </div>
        </div>
    );
};

export default Navbar;