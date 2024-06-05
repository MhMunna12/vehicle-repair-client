/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from '../components/Home/Banner';
import { useLoaderData } from 'react-router-dom';
import Services from '../components/Home/Services';
import ServiceArea from '../components/ServiceArea';
import Expert from '../pages/Expert'

const Home = () => {
    // const services = useLoaderData();
    // console.log(services);
    return (
        <div>
            <Banner />
            <Services />
            <ServiceArea />
            <Expert />

        </div>
    );
};

export default Home;