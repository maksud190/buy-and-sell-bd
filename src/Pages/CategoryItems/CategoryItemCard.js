import React from 'react';

const CategoryItemCard = ({ item, setPurchase }) => {

    const { name, sellerName, image, location, resalePrice, original, yearUsed, posted } = item;

    return (
        <div className="card lg:w-2/3 lg:card-side bg-base-100 shadow-xl mx-auto my-16 border">
            <figure><img className='h-56' src={image} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div>
                    <p>Seller Name: {sellerName}</p>
                    <p>Location: {location}</p>
                    <p>Original Price: {original} Taka</p>
                    <p>Resell Price: {resalePrice}</p>
                    <p>Used: {yearUsed} year</p>
                    <p>Post date: {posted}</p>
                </div>
                <div className="card-actions justify-end">
                    {/* <button className="btn btn-primary">Purchase</button> */}
                    <label onClick={()=> setPurchase(item)} htmlFor="buying-modal" className="btn bg-emerald-700 border-0 ">Purchase</label>
                </div>
            </div>
        </div>
    );
};

export default CategoryItemCard;