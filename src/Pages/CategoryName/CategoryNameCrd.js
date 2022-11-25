import React from 'react';
import { Link } from 'react-router-dom';

const CategoryNameCrd = ({categoryNam}) => {

    const {categoryName, categoryImg, _id} = categoryNam;


    return (
        <Link to={`/categoryItems/${_id}`} className="card w-96 bg-base-100 shadow-xl image-full mx-auto"
            >
            <figure><img src={categoryImg} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-center text-2xl font-bold my-auto">{categoryName}</h2>
                {/* <button onClick={handleCategoryItem} className='btn'>Click</button> */}
            </div>
        </Link>
    );
};

export default CategoryNameCrd;