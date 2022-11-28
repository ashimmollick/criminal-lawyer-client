import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { } from 'react-router-dom';

import { AuthContext } from '../../../contexts/AuthProvider';



const OrderConfirm = ({ orderConfirm, setOrderConfirm }) => {



    const { img, title, price, description } = orderConfirm;

    console.log(orderConfirm)
    const { user } = useContext(AuthContext)

    const handleBooking = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const booking = {
            productName: title,
            name,

            email,
            phone,
            price: price

        }
        fetch('http://localhost:5000/orders', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setOrderConfirm('');
                    toast.success('Booking Confirm')

                }
                else {
                    toast.error(data.message)
                }
            })
        console.log(booking)
    }
    return (
        <div>
            <input type="checkbox" id="order-modal" className="modal-toggle" />
            <form onSubmit={handleBooking} className="modal">
                <div className="modal-box relative">
                    <figure className='flex justify-center'><img className='w-auto h-[250px]' src={img} alt="" /></figure>

                    <label htmlFor="order-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h2 className="text-lg font-bold">Product Name:{title}</h2>
                    <h3 className="text-3xl font-semibold text-red-500">Price: $ {price}</h3>
                    <p className="py-4">{description}</p>
                    <input name='name' type="text" value={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                    <input name='email' type="email" value={user?.email} disabled placeholder="Your Email" className="input w-full input-bordered my-4" />
                    <input name='phone' type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                    <div className='mx-auto '>
                        <input htmlFor="order-modal" className="btn mt-3 text-xl  font-semibold btn-wide bg-[#65258A] hover:bg-[#65258A]" type="submit" value="Order Confirm" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default OrderConfirm;