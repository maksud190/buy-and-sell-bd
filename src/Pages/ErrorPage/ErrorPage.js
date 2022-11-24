import React from 'react';
import errorImg from '../../Assets/images/404-page.jpg';

const ErrorPage = () => {
    return (
        <div className='flex justify-center mt-20'>
            <img src={errorImg} alt="" />
        </div>
    );
};

export default ErrorPage;