import React from 'react';





const Orders = ({ order, setOrderConfirm }) => {
    const { description, title, price, img } = order;



    return (

        <div className="card   shadow-xl">

            <figure><img className='w-auto h-[300px]' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-[#65258A] text-4xl font-bold">
                    {title}
                </h2>
                <h3 className="text-3xl font-semibold text-red-500">Price: $ {price}</h3>
                <p>{description}</p>
                <div className='mx-auto '>
                    <label onClick={() => setOrderConfirm(order)} htmlFor="order-modal" className="btn mt-3 text-xl font-semibold btn-wide bg-[#65258A] hover:bg-[#65258A]">Order</label>
                </div>


            </div>


        </div>
    );
};

export default Orders;