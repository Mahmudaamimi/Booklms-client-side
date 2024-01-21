import React from 'react';
import banner from '../assets/library.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-lg">
                    <h1 className="mb-5 text-4xl font-bold">Learning management system</h1>
                    <p className="mb-5">Learning management systems were designed to identify training and learning gaps, using analytical data and reporting.</p>
                    <button className="btn bg-green-700">Let's Explore</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;