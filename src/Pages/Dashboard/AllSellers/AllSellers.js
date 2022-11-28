import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const AllSellers = () => {

    const {user} = useContext(AuthContext);
    const [deletingSeller, setDeletingSeller] = useState(null);
    const closeModal = ()=> {
        
        setDeletingSeller(null);

    }

    const { data: sellers = [], refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('https://buy-and-sell-bd-server.vercel.app/sellers')
            const data = await res.json();
            return data;
        }
    })

    const handleDeleteSeller = (seller) => {
        fetch(`https://buy-and-sell-bd-server.vercel.app/sellers/${seller._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
                toast.success(`${seller.name} has deleted successfully`)
            }
        })
    }

    return (
        <div>
            <h1 className="text-3xl my-8">All Sellers</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Verify</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            sellers?.map((seller, i) => <tr className="hover"
                                key={i}
                            >
                                <th>{i + 1}</th>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td><button className='btn btn-xs btn-error'>Verify</button></td>
                                <td><label onClick={()=> setDeletingSeller(seller)} htmlFor="confirmation-modal" className="btn btn-xs btn-error">Delete</label></td>                                
                            </tr>)

                        }

                    </tbody>
                </table>
            </div>
            {
                deletingSeller && <ConfirmationModal
                    title={`Are you sure?`}
                    message={`${deletingSeller.name} will delete forever!`}
                    closeModal={closeModal}
                    successAction={handleDeleteSeller}
                    successButtonName="Delete"
                    modalData={deletingSeller}
                >

                </ConfirmationModal>
            }
        </div>
    );
};

export default AllSellers;