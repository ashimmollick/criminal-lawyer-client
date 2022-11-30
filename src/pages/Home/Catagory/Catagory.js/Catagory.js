import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../../../shared/Loading/Loading';

const Catagory = () => {
    const { data: catagorys = [], isLoading } = useQuery({
        queryKey: ['appointmentOptions'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/catagory`);
            const data = await res.json();
            return data
        }
    });
    console.log(catagorys)
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='mx-16'>
            <div className='text-center my-8'>
                <h3 className='text-3xl text-[#65258A] mt-16'>Our Product</h3>
                <h2 className='text-4xl font-semibold leading-tight'>Our product has lots of excellent  core features <br /> for smart people.</h2>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    catagorys.map(catagory =>
                        <div className="card  shadow-xl" >

                            <figure><img className='w-96 h-80' src={catagory.img} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{catagory.catagory_name}</h2>

                                <div className="card-actions justify-end">
                                    <Link to={`/catagories/${catagory.catagory_id}`}><button className="btn btn-primary">Go Product</button></Link>
                                </div>
                            </div>
                        </div>

                    )
                }

            </div>
        </div>
    );
};

export default Catagory;