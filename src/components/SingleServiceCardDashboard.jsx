/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const SingleServiceCardDashboard = ({ service, handleDeletes }) => {
    const token = localStorage.getItem("token");
    const { _id, title, img, price, description, } = service;
    const handleDelete = (e) => {
        e.preventDefault();
        fetch(`https://vehicle-repair-server.onrender.com/services/${_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                handleDeletes(_id)
                Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
                }).then((data) => {
                    if (data.isConfirmed) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    }
                });
            })
    }
    return (
        <div className="mt-10 ">
            <div className="card ">
                <img className="h-[220px]" src={img} />
                <div className="card-body items-center text-center bg-base-200 text-black">
                    <h2 className="card-title">{title}</h2>
                    <h2 className="card-title">Price: {price}</h2>


                    <div className='flex gap-2 justify-center'>
                        <button style={{ borderBottom: '3px solid yellow' }} className="btn uppercase text-yellow-400 border-0 ">
                            <Link to={`/service/${_id}`} >Details</Link>
                        </button>
                        <button style={{ borderBottom: '3px solid yellow' }} className="btn uppercase text-yellow-400 border-0 ">
                            <Link to={`edit/${_id}`} >Edit</Link>
                        </button>
                        <button onClick={handleDelete} style={{ borderBottom: '3px solid yellow' }} className="btn uppercase text-yellow-400 border-0 ">
                            Delete
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SingleServiceCardDashboard;