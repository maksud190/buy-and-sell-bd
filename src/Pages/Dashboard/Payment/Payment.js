import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutForm from './CheckOutForm';


const stripePromise = loadStripe('pk_test_51M8zu6F2PTrGIgP2ftYqPgYwvW9pqmyl7N3Dt5edJcfN0hnCVdKDxNn3aCkb2Ms9QhW1evDX0bW6WFVkUFK934Ps00ceOhItLM');

const Payment = () => {

    const data = useLoaderData();
    // console.log(data);

    return (
        <div>
            <h3 className="text-3xl">Payment for <span className='text-emerald-800'>{data.itemName}</span></h3>
            <h3 className="text-2xl mt-2">The price is <span className='text-emerald-800'>{data.price}</span></h3>

            <div className='w-96 my-10'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;