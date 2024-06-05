/* eslint-disable no-unused-vars */
import React from 'react';
import toast from 'react-hot-toast';

const AddServices = () => {
    const handleSubmit = async e => {
        const token = localStorage.getItem("token");
        e.preventDefault();
        const form = e.target;
        const price = form.price.value;
        const description = form.description.value;
        const img = form.img.value;
        const title = form.title.value;
        // console.log(id,brand,price,description,image_url);
        const data = { price, description, img, title }
        console.log(data);
        await fetch('https://vehicle-repair-server.onrender.com/services', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                authorization: `Bearer ${token}`
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(data => {
                toast.success('Product Added')
            })
        form.reset()
    }
    return (
        <div className='max-w-3xl mx-auto'>
            <h1 className='text-5xl font-bold text-center mt-10'>Add a Products</h1>
            <div className=' p-6'>
                <form action="" onSubmit={handleSubmit}>
                    <div>
                        <input className='bg-gray-300 p-4 w-full my-2 rounded' type='text' name='title' placeholder='Title' />
                    </div>
                    <div>
                        <input className='bg-gray-300 p-4 w-full my-2 rounded' type='text' name='price' placeholder='Price' />
                    </div>
                    <div>
                        <input className='bg-gray-300 p-4 w-full my-2 rounded' type='text' name='description' placeholder='Description' />
                    </div>
                    <div>
                        <input className='bg-gray-300 p-4 w-full my-2 rounded' type='text' name='img' placeholder='Image_url' />
                    </div>

                    <div className='flex justify-center items-center'>
                        <input className='btn mt-4 w-full p-3 text-white font-bold bg-red-400' type="submit" value="Add Service" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddServices;