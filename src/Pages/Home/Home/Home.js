import React from 'react';
import banner from '../../../Assets/images/banner.png';
import CategoryName from '../../CategoryName/CategoryName';
import AboutShop from './AboutShop/AboutShop';

const Home = () => {
    return (
        <div>
            <img className='rounded-lg' src={banner} alt="" />
            <CategoryName></CategoryName>
            <AboutShop></AboutShop>
        </div>
    );
};

export default Home;