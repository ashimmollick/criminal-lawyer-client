import React from 'react';

const Orders = ({ order }) => {
    const { description, title, price, img, _id } = order;
    const handleOrder = id => {

    }
    return (

        <div className="card   shadow-xl">

            <figure><img className='w-auto h-[300px]' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-[#65258A] text-4xl font-bold">
                    {title}
                </h2>
                <h3 className="text-3xl font-semibold text-red-500"> $ {price}</h3>
                <p>{description}</p>
                <div className='mx-auto '>
                    <label onClick={() => handleOrder(_id)} htmlFor="order-modal" className="btn mt-3 text-xl font-semibold btn-wide bg-[#65258A] hover:bg-[#65258A]">Order</label>
                </div>

                <input type="checkbox" id="order-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <img className='w-auto h-[250px]' src={img} alt="Shoes" />
                        <label htmlFor="order-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="text-lg font-bold">{title}</h3>
                        <h3 className="text-3xl font-semibold text-red-500"> $ {price}</h3>
                        <p className="py-4">{description}</p>
                        <div className='mx-auto '>
                            <label htmlFor="order-modal" className="btn mt-3 text-xl font-semibold btn-wide bg-[#65258A] hover:bg-[#65258A]">Order Confirm</label>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Orders;