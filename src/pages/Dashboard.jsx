/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useState } from 'react';
import useAuth from './../hooks/useAuth';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const { user } = useAuth();
    const [userInfo, setUserInfo] = useState([]);
    useEffect(() => {
        fetch(`https://vehicle-repair-server.onrender.com/user/${user.email}`)
            .then(res => res.json())
            .then(data => setUserInfo(data))
    }, [user])
    console.log(userInfo);
    return (
        <div className='p-5'>
            <h1 className="text-3xl font-bold text-center">Profile Information</h1>
            <div className="mx-auto mt-5 w-[300px] lg:w-[500px] bg-[#FFEDD5]">
                <div className='p-24 '>
                    <h2 className='flex items-center justify-center '>
                        {
                            <img src={user?.photoURL || "/public/placeholder.jpg"} />

                        }
                    </h2>
                    <div className='text-center mt-5 p-2 '>
                        <h2>
                            <h1 >{userInfo?.name}</h1>
                            <h1>{userInfo?.email}</h1>
                        </h2>
                        <Link to={`profile/edit/${userInfo?._id}`} className="mt-10 btn bg-secondary btn-md">Edit Profile</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;