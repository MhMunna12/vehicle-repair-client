/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const EditProfile = () => {
    const data = useLoaderData();
    const token = localStorage.getItem("token");
    console.log(data);
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const age = form.age.value;
        const userData = {
            name, age, phone, email: data?.email
        }
        fetch(`https://vehicle-repair-server.onrender.com/user/${data.email}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, Update it!"
                }).then((data) => {
                    if (data.success) {
                        Swal.fire({
                            title: "Updated!",
                            text: "Your file has been Updated.",
                            icon: "success"
                        });
                    }
                });
            })
        console.log(userData);
    }
    return (
        <div className="p-4 px-10">
            <h1 className='text-4xl mb-3 text-center'>Edit Profile</h1>
            <form onSubmit={handleSubmit} action="" className='flex flex-col gap-y-5'>
                <div className='flex flex-col'>
                    <label htmlFor="">User Name</label>
                    <input type="text" defaultValue={data?.name} name="name" placeholder="Email" className="py-2 px-1 bg-slate-50" id="" />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="">User Email</label>
                    <input type="text" disabled defaultValue={data?.email} name="email" placeholder="Email" className="py-2 px-1 bg-slate-50" id="" />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="">User Age</label>
                    <input type="text" name="age" placeholder="Age" className="py-2 px-1 bg-slate-50" id="" />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="">Phone Number</label>
                    <input type="text" name="phone" placeholder="Phone Number" className="py-2 px-1 bg-slate-50" id="" />
                </div>
                <div className='flex flex-col'>
                    <input
                        className="btn bg-black text-white"
                        type="submit"
                        value="Profile Update"
                    />
                </div>
            </form>
        </div>
    );
};

export default EditProfile;