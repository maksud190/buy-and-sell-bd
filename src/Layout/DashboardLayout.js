import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import hi from '../../src/Assets/images/dashboardImage.png'
import useAdmin from '../hooks/useAdmin';
import { AuthContext } from '../contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Pages/Shared/Loading/Loading';
import useBuyer from '../hooks/useBuyer';

const DashboardLayout = () => {

    const { user, loading } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    const [isUser] = useBuyer(user?.email)

    // const [buyers, setBuyers] = useState([]);

    // useEffect(() => {
    //     fetch('https://buy-and-sell-bd-server.vercel.app/users')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             setBuyers(data);
    //         })
    // }, [])

    const { data: buyers = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://buy-and-sell-bd-server.vercel.app/users')
            const data = await res.json();
            return data;
        }
    })

    if (loading) {
        return <Loading></Loading>
    }
    // console.log(buyers);

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <div className='flex justify-center'>
                        <img className='w-32' src={hi} alt="" />
                    </div>
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {isAdmin &&
                            <>
                                <li><Link to='/dashboard/allUsers'>All Buyers</Link></li>
                                <li><Link to='/dashboard/allSellers'>All Sellers</Link></li>
                            </>
                        }

                        {isUser && !isAdmin &&
                            <li><Link to='/dashboard/myOrder'>My Orders</Link></li>

                        }
                        { !isUser &&
                            <>
                                <li><Link to='/dashboard/addProduct'>Add Product</Link></li>
                                <li><Link to='/dashboard/myProducts'>My Products</Link></li>
                            </>
                        }




                        {/* {user.uid &&
                            
                        }
                        {

                        } */}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;