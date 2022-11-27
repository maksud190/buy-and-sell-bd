import React from 'react';

const AboutShop = () => {
    return (
        <div className='my-24'>
            <h1 className="text-4xl font-bold text-center my-10 text-emerald-800">Up Coming Hot Phones</h1>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F07%2Fapple-iphone-14-pro-max-price-increase-100-usd-rumors-000.jpg?w=960&cbr=1&q=90&fit=max" alt='' className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Iphone 14</h1>
                        <p className="py-6 font-bold">Key Features -</p>
                        <li className='text-lg mt-2'>- Super Retina XDR OLED, HDR10, Dolby Vision, 800 nits (HBM), 1200 nits (peak)</li>
                        <li className='text-lg mt-2'>Apple A15 Bionic (5 nm)</li>
                        <li className='text-lg mt-2'>12 MP, f/1.5, 26mm (wide), 1/1.7", 1.9µm, dual pixel PDAF, sensor-shift OIS 12 MP, f/2.4, 13mm, 120˚ (ultrawide)</li>
                        <li className='text-lg mt-2'>4K@24/25/30/60fps, 1080p@25/30/60/120/240fps, HDR, Dolby Vision HDR (up to 60fps), Cinematic mode (4K@30fps), stereo sound</li>
                        <li className='text-lg mt-2'>Li-Ion 3279 mAh, non-removable (12.68 Wh)</li>
                        <button className="btn mt-10 bg-emerald-700 border-none">Pre-Order</button>
                    </div>
                </div>
            </div>
            <div className="hero mt-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://images.hothardware.com/contentimages/article/3244/content/small_Pixel-7-Pixel-7-Pro-1.jpg" alt='' className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Google Pixel 7 pro</h1>
                        <p className="py-6 font-bold">Key Features -</p>
                        <li className='text-lg mt-2'>- Super Retina XDR OLED, HDR10, Dolby Vision, 800 nits (HBM), 1200 nits (peak)</li>
                        <li className='text-lg mt-2'>Apple A15 Bionic (5 nm)</li>
                        <li className='text-lg mt-2'>12 MP, f/1.5, 26mm (wide), 1/1.7", 1.9µm, dual pixel PDAF, sensor-shift OIS 12 MP, f/2.4, 13mm, 120˚ (ultrawide)</li>
                        <li className='text-lg mt-2'>4K@24/25/30/60fps, 1080p@25/30/60/120/240fps, HDR, Dolby Vision HDR (up to 60fps), Cinematic mode (4K@30fps), stereo sound</li>
                        <li className='text-lg mt-2'>Li-Ion 3279 mAh, non-removable (12.68 Wh)</li>
                        <button className="btn mt-10 bg-emerald-700 border-none">Pre-Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutShop;