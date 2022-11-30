import React from 'react';

const Blog = () => {
    return (
        <div >
            <div className='text-center mt-12'>
                <h3 className="text-3xl text-[#65258A]">FAQ</h3>
                <h2 className="text-4xl font-semibold">Frequently asked questions</h2>
            </div>
            <div className='mt-10 ms-5 mb-16 '>
                <div className='mx-8 p-4  border rounded border-b-0'>
                    <h2 className='text-2xl font-semibold my-2 text-[#7611b1]'>What are the different ways to manage a state in a React application?</h2>
                    <p >It is recommended to avoid storing such information in the app’s state to avoid the URL in our app getting out of sync. The URL should be used as the system of record, Read from it as needed for information related to sorting, pagination, etc. Update the URL as required when the settings change</p>
                </div>
                <div className='mx-8 p-4  border rounded border-b-0'>
                    <h2 className='text-2xl font-semibold my-2 text-[#7611b1]'>How does prototypical inheritance work?</h2>
                    <p >The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Objec</p>
                </div>
                <div className='mx-8 p-4  border rounded border-b-0'>
                    <h2 className='text-2xl font-semibold my-2 text-[#7611b1]'>What is a unit test? Why should we write unit tests?</h2>
                    <p >A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property</p>
                    <p >Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.</p>
                </div>
                <div className='mx-8 p-4  border rounded border-b-0'>
                    <h2 className='text-2xl font-semibold my-2 text-[#7611b1]'>React vs. Angular vs. Vue?</h2>
                    <p >Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.</p>
                </div>
            </div>

        </div>
    );
};

export default Blog;