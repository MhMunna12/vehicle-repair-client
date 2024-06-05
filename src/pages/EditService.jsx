/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const EditService = () => {

    const data = useLoaderData();
    // const navigate = useNavigate()
    const token = localStorage.getItem("token");
    const [title, setTitle] = useState(data.title)
    const [price, setPrice] = useState(data.price)
    const [description, setDescription] = useState(data.description)
    const [img, setImg] = useState(data.img)
    const handleSubmit = async e => {

        e.preventDefault();
        const form = e.target;
        const price = form.price.value;
        const description = form.description.value;
        const img = form.img.value;
        const title = form.title.value;
        // console.log(id,brand,price,description,image_url);
        const formData = { price, description, img, title }
        await fetch(`https://vehicle-repair-server.onrender.com/services/${data._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(formData)
        }).then(res => res.json())
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

    }
    return (
        <div className='p-7'>
            <h1 className='text-5xl font-bold text-center'>Edit a Service</h1>
            <div className='mt-4'>
                <form action="" onSubmit={handleSubmit}>
                    <div>
                        <input value={title} onChange={(e) => setTitle(e.target.value)} className='bg-gray-300 p-4 w-full my-2 rounded' type='text' name='title' placeholder='Title' />
                    </div>
                    <div>
                        <input value={price} onChange={(e) => setPrice(e.target.value)} className='bg-gray-300 p-4 w-full my-2 rounded' type='text' name='price' placeholder='Price' />
                    </div>
                    <div>
                        <input value={description} onChange={(e) => setDescription(e.target.value)} className='bg-gray-300 p-4 w-full my-2 rounded' type='text' name='description' placeholder='Description' />
                    </div>
                    <div>
                        <input value={img} onChange={(e) => setImg(e.target.value)} className='bg-gray-300 p-4 w-full my-2 rounded' type='text' name='img' placeholder='Image_url' />
                    </div>

                    <div className='flex justify-center items-center'>
                        <input className='btn mt-4 w-full p-3 text-white font-bold bg-red-400' type="submit" value="Edit Service" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditService;