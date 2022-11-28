import React from 'react';

const OrderConfirm = ({ orderConfirm }) => {

    const { img, title, price, description } = orderConfirm;

    return (
        <div>
            <input type="checkbox" id="order-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <figure className='flex justify-center'><img className='w-auto h-[250px]' src={img} alt="Shoes" /></figure>

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
    );
};

export default OrderConfirm;