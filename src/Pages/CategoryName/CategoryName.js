import React, { useEffect, useState } from 'react';
import CategoryNameCrd from './CategoryNameCrd';

const CategoryName = () => {

    const [categoryNames, setCategoryNames] = useState([]);

    useEffect(() => {
        fetch('mobile.json')
            .then(res => res.json())
            .then(data => {
                setCategoryNames(data)
                console.log(data);
            })
    }, [])

    return (
        <div className='lg:flex my-16'>
            {
                categoryNames?.map(categoryNam => <CategoryNameCrd
                    key={categoryNam.id}
                    categoryNam={categoryNam}
                    
                ></CategoryNameCrd>)

                
            }
        </div>
    );
};

export default CategoryName;