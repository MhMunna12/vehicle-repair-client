/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetail = () => {
    const services = useLoaderData();

    console.log(services);
    const { img, title, price, description } = services;
    return (
        <div className=" w-[650px] mx-auto mt-8">
            <figure><img className='w-[650px] h-[700px]' src={img} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <h2 className="text-3xl">Price: {price}</h2>

                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">
                        <Link to={'/'}>Home</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;