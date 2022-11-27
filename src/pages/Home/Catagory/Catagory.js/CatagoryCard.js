import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Orders from '../Orders';

const CatagoryCard = () => {
    const orders = useLoaderData();

    return (
        <div className=''>
            <h2 className="text-4xl text-center pt-8">My Products</h2>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 mx-8'>
                {
                    orders.map(order => <Orders
                        key={order._id}
                        order={order}
                    ></Orders>)
                }
            </div>
        </div>
    );
};

export default CatagoryCard;