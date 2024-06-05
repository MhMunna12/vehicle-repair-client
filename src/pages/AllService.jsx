/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import SingleServiceCardDashboard from '../components/SingleServiceCardDashboard';

const AllService = () => {
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
    const handleDeletes = (id) => {
        setServices(services.filter(service => service._id !== id))
    }
    return (
        <div>

            <div className='text-center'>
                <h1 className='text-3xl text-center font-semibold mt-3'>All Products</h1>
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
            <div className='grid gap-x-8 gap-y-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto p-5'>
                {
                    services.map((service) =>
                        <SingleServiceCardDashboard
                            key={service._id}
                            service={service}
                            handleDeletes={handleDeletes}
                        ></SingleServiceCardDashboard>
                    )
                }
            </div>
        </div>
    );
};

export default AllService;