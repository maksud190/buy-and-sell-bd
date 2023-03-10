import React, { useEffect, useState } from 'react';
import CategoryNameCrd from './CategoryNameCrd';

const CategoryName = () => {

    const [categoryNames, setCategoryNames] = useState([]);

    useEffect(() => {
        fetch('https://buy-and-sell-bd-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => {
                setCategoryNames(data)
                
            })
    }, [])

    return (
        <div className='lg:flex my-16'>
            {
                categoryNames?.map(categoryNam => <CategoryNameCrd
                    key={categoryNam._id}
                    categoryNam={categoryNam}
                    
                ></CategoryNameCrd>)

                
            }
        </div>
    );
};

export default CategoryName;