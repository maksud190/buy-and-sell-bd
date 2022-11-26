import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyOrders = () => {

    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/myOrders?email=${user.email}`;

    const { data: myOrders = [] } = useQuery({
        queryKey: ['myOrders', user.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })


    return (
        <div>
            <h1 className="text-3xl my-8">My Orders</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Product Name</th>
                            <th>price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myOrders?.map((myOrder, i) => <tr className="hover"
                                key={i}
                            >
                                <th>{i + 1}</th>
                                <td><img className='w-16' src={myOrder.image} alt="" /></td>
                                <td>{myOrder.itemName}</td>
                                <td>{myOrder.price}</td>
                                <td><button className='btn btn-xs'>Pay</button></td>
                            </tr>)

                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;