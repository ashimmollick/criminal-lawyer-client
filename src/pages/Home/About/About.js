import React from 'react';
import about from '../../../images/headphones-img.jpg';
const About = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse ">
                <div className="card flex-shrink-0 lg:w-1/2  ">
                    <div className="card-body w-full">
                        <img src={about} alt="" />
                    </div>
                </div>
                <div className="text-center  lg:text-left">
                    <h3 className="text-2xl text-[#f472b6]">About Headphones</h3>
                    <h2 className="text-5xl font-semibold leading-tight">Awesome digital headphones can make your life easier</h2>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <ul className="steps steps-vertical ">
                        <li className="step step-primary ">High Quality Product</li>
                        <li className="step step-primary">Modern And New Design</li>
                        <li className="step step-primary">Multiple Color Available</li>

                    </ul>
                </div>

            </div>
        </div>
    );
};

export default About;