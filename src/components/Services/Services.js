import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('./serviceData.JSON')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className="container">
            <div className="row">
            <div className="section-title text-center">
                <p className="text-primary mt-5">Popular Online Courses</p>
                <h1 className="">Lets Brows All Category</h1>
            </div>
                {
                    services.map(service => <Service
                        key={service.key}
                        services={service}
                    ></Service>)
                }
            </div>
            

        </div>
    );
};

export default Services;