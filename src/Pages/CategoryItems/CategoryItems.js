import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BuyingModal from './BuyingModal';
import CategoryItemCard from './CategoryItemCard';

const CategoryItems = () => {

    const items = useLoaderData();

    const { categoryName, categoryItem } = items;

    const [purchase, setPurchase] = useState(null);

    return (
        <div>
            <h3 className='text-4xl font-bold my-14 text-center'>{categoryName}</h3>
            <div className=''>
                {
                    categoryItem?.map((item, i) => <CategoryItemCard
                        key={i}
                        item={item}
                        setPurchase={setPurchase}
                    ></CategoryItemCard>)
                }
            </div>
            {   purchase &&
                <BuyingModal
                    purchase={purchase}
                    setPurchase={setPurchase}
                ></BuyingModal>
            }
        </div>
    );
};

export default CategoryItems;