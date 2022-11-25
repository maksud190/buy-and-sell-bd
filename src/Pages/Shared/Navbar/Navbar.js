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
            <div className="flex justify-center">
                <Link to='/' className="btn btn-ghost normal-case text-xl">Buy & Sell</Link>
            </div>


            <div className="navbar">
                <div className="dropdown ">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
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



            <div className="flex-none">
                <ul className="menu menu-horizontal p-0 hidden lg:flex">
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
            <label htmlFor="dashboard-drawer" tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Navbar;