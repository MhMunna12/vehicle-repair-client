/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import SingleCardService from '../SingleCardService';

const Services = () => {
    const [search, setSearch] = useState('');
    const [services, setServices] = useState([]);
    const searchRef = useRef(null);
    useEffect(() => {
        fetch(`https://vehicle-repair-server.onrender.com/services?search=${search}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [search])
    const handleSearch = () => {
        setSearch(searchRef.current.value)
    }
    console.log(services);
    return (
        <div className='my-16'>
            <div className='mb-5  p-2 text-center '>
                <h1 className='text-3xl font-bold'>Our Services</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which dont look even slightly believable. </p>
                <div className="join mt-5">
                    <div>
                        <div>
                            <input ref={searchRef} className="input input-bordered join-item" placeholder="Search" />
                        </div>
                    </div>

                    <div className="indicator">
                        <button onClick={handleSearch} className="btn join-item">Search</button>
                    </div>
                </div>
            </div>

            <div className="grid gap-x-8 gap-y-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    services.slice(0, 6).map(service => <SingleCardService
                        key={service._id}
                        service={service}
                    ></SingleCardService>)
                }

            </div>
        </div>
    );
};

export default Services;