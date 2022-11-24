import React from 'react';
import banner from '../../../Assets/images/banner.png';
import CategoryName from '../../CategoryName/CategoryName';

const Home = () => {
    return (
        <div>
            <img className='rounded-lg' src={banner} alt="" />
            <CategoryName></CategoryName>
        </div>
    );
};

export default Home;