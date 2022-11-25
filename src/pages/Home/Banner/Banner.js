import React from 'react';
import banner from '../../../images/headphones-1.png';
import bannerbg from '../../../images/banner-1.svg';
const Banner = () => {
    return (
        <div className="hero  bg-bottom bg-cover py-8" style={{ backgroundImage: `url(${bannerbg})` }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} className="lg:w-2/5 w-5/6" alt='' />
                <div className='text-white'>
                    <h1 className="text-5xl font-bold">Best Headephone For this website</h1>
                    <p className="py-6">Headphones are a pair of small loudspeaker drivers worn on or around the head over a user's ears.They are electroacoustic transducers, which convert an electrical signal to a corresponding sound</p>
                    <button className="btn outline-2 btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;