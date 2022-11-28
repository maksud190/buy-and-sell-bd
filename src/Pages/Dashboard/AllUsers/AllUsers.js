import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const AllUsers = () => {

    const { user } = useContext(AuthContext);
    const [deletingUser, setDeletingUser] = useState(null);
    
    const closeModal = ()=> {
        
        setDeletingUser(null);

    }
    
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://buy-and-sell-bd-server.vercel.app/users')
            const data = await res.json();
            return data;
        }
    })

    // const handleMakeAdmin = (id) => {
    //     fetch(`https://buy-and-sell-bd-server.vercel.app/users/admin/${id}`, {
    //         method: 'PUT',
    //         headers: {
    //             authorization: `bearer ${localStorage.getItem('accessToken')}`
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.modifiedCount > 0) {
    //                 toast.success('successfully admin made');
    //                 refetch();
    //             }
    //         })

    // }

    const handleDeleteBuyer = (buyer) => {
        fetch(`https://buy-and-sell-bd-server.vercel.app/users/${buyer._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
                toast.success(`${buyer.name || buyer.displayName} has deleted successfully`)
            }
        })
    }

    return (
        <div>
            <h1 className="text-3xl my-8">All Buyers</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>User Name</th>
                            <th>Email</th>
                            {/* <th>admin</th> */}
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users?.map((user, i) => <tr className="hover"
                                key={i}
                            >
                                <th>{i + 1}</th>
                                <td>{user.name || user.displayName}</td>
                                <td>{user.email}</td>
                                {/* <td>{user?.role !== 'admin' &&
                                    <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Admin</button>
                                }</td> */}
                                <td><button className='btn btn-xs'>Pay</button></td>
                                <td>
                                    <label onClick={()=> setDeletingUser(user)} htmlFor="confirmation-modal" className="btn btn-xs btn-error">Delete</label>
                                    {/* <button onClick={handleDeleteBuyer} className='btn btn-xs btn-error'>Delete</button> */}
                                </td>
                            </tr>)

                        }

                    </tbody>
                </table>
            </div>
            {
                deletingUser && <ConfirmationModal
                    title={`Are you sure?`}
                    message={`${deletingUser.name || deletingUser.displayName} will delete forever!`}
                    closeModal={closeModal}
                    successAction={handleDeleteBuyer}
                    successButtonName="Delete"
                    modalData={deletingUser}
                >

                </ConfirmationModal>
            }
        </div>
    );
};

export default AllUsers;