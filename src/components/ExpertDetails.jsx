/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const ExpertDetails = ({ engineer }) => {
    const { imgs, name, expert } = engineer;
    console.log(engineer);
    return (
        <div className="card py-4 bg-base-100  shadow-xl mt-5">
            <figure className="px-5 ">
                <img className="" src={imgs} style={{ height: '190px', width: '260px' }} />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p className='text-pink-400'>{expert}</p>

            </div>
        </div>
    );
};

export default ExpertDetails;