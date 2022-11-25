import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';

const BuyingModal = ({ purchase, setPurchase }) => {

    const { user } = useContext(AuthContext);

    const { name, resalePrice } = purchase;

    const handlePurchase = (event) => {
        event.preventDefault();
        const form = event.target;
        const userName = form.userName.value;
        const email = form.email.value;
        const itemName = form.itemName.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const location = form.location.value;

        const purchased = {
            userName, email, itemName, price, phone, location
        }

        // console.log(purchased);

        fetch('http://localhost:5000/myOrders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchased)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {

                    setPurchase(null);
                    toast.success('Order Confirmed');
                }
            })

    }

    return (
        <>
            <input type="checkbox" id="buying-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="buying-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-xl font-bold my-5">{name}</h3>
                    <form onSubmit={handlePurchase}>
                        <input type="text" name='userName' defaultValue={user?.displayName} className="input input-bordered input-accent w-full mb-5" disabled />
                        <input type="text" name='email' defaultValue={user?.email} className="input input-bordered input-accent w-full mb-5" disabled />
                        <input type="text" name='itemName' defaultValue={name} className="input input-bordered input-accent w-full mb-5" disabled />
                        <input type="text" name='price' defaultValue={resalePrice} className="input input-bordered input-accent w-full mb-5" disabled />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered input-accent w-full  mb-5" />
                        <input type="text" name='location' placeholder="Meeting Location" className="input input-bordered input-accent w-full mb-5" />
                        <br />
                        <input className='btn bg-emerald-700 border-none w-full' type="submit" value='Submit' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BuyingModal;