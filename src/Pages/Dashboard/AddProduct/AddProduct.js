import React from 'react';
import toast from 'react-hot-toast';
import { Navigate, useLoaderData, useLocation, useNavigate } from 'react-router-dom';

const AddProduct = () => {

    const {categoryName,categoryImg, categoryItem, name, sellerName, image, locationn, resalePrice, original, yearUsed, posted} = useLoaderData()

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleAddProduct = event => {
        event.preventDefault();
        
        const form = event.target;
        const categoryName = form.categoryName.value;
        const categoryImg = form.categoryImg.value;
        const categoryItem = form.categoryItem.value;
        const name = form.name.value;
        const sellerName = form.sellerName.value;
        const image = form.image.value;
        const locationn = form.location.value;
        const resalePrice = form.resalePrice.value;
        const original = form.original.value;
        const yearUsed = form.yearUsed.value;
        const posted = form.posted.value;


        const addProduct = 
            {categoryName,
            categoryImg,
            categoryItem:[name,sellerName,image,locationn,resalePrice,original,yearUsed,posted]
        
        }
        

        // console.log(addProduct);

        fetch('https://buy-and-sell-bd-server.vercel.app/categories', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {

                    // setPurchase(null);
                    navigate('/dashboard/myProducts');
                    toast.success('Order Confirmed');
                }
            })

    }

    return (
        <div>
            <h1>Add Product</h1>

            <form onSubmit={handleAddProduct}>
                        <input type="text" name='categoryName' placeholder='categoryName' className="input input-bordered input-accent w-full mb-5" />
                        <input type="text" name='categoryImg' placeholder='categoryImg' className="input input-bordered input-accent w-full mb-5" />
                        <input type="text" name='categoryItem' defaultValue='categoryItem' placeholder='categoryItem' className="hidden input input-bordered input-accent w-full mb-5" />
                        <input type="text" name='name' placeholder='name' className="input input-bordered input-accent w-full mb-5" />
                        <input type="text" name='sellerName' placeholder='sellerName' className="input input-bordered input-accent w-full  mb-5" />
                        <input type="text" name='image' placeholder='image' className="input input-bordered input-accent w-full mb-5" />
                        <input type="text" name='location' placeholder='location' className="input input-bordered input-accent w-full mb-5" />
                        <input type="text" name='resalePrice' placeholder='resalePrice' className="input input-bordered input-accent w-full mb-5" />
                        <input type="text" name='original' placeholder='original' className="input input-bordered input-accent w-full mb-5" />
                        <input type="text" name='yearUsed' placeholder='yearUsed' className="input input-bordered input-accent w-full mb-5" />
                        <input type="text" name='posted' placeholder='posted' className="input input-bordered input-accent w-full mb-5" />
                        <br />
                        <input className='btn bg-emerald-700 border-none w-full' type="submit" value='Submit' />
                    </form>
        </div>
    );
};

export default AddProduct;