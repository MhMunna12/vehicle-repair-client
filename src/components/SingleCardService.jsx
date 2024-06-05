/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const SingleCardService = ({ service }) => {
    const { _id, title, img, price } = service;
    return (
        <div className="card  bg-base-100 shadow-xl  ">
            <figure className="">
                <img className="rounded-xl " style={{ height: '208px' }} src={img} />
            </figure>
            <div className="card-body  ">
                <h2 className="card-title">{title}</h2>

                <div className="card-actions text-orange-500">

                </div>
                <h6 className="card-actions text-orange-500">Price: ${price}</h6>
                <div className='text-right'>
                    <Link to={`service/${_id}`}>
                        <button className="btn btn-primary ">See Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleCardService;