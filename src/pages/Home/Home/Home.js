import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Catagory from '../Catagory/Catagory.js/Catagory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Catagory></Catagory>
            <About></About>
        </div>
    );
};

export default Home;