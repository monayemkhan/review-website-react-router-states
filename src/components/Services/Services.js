import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    // useEffect for load data
    useEffect(()=>{
        fetch('./serviceData.JSON')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        // Service Section
        <div className="container">
            <div className="row">
            <div className="section-title text-center">
                <h1 className="text-primary mt-5">Popular Online Courses</h1>
                <h3 className="mb-5">Lets Brows All Category</h3>
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