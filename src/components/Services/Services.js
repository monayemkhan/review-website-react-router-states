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
                <span>Popular Online Courses</span>
                <h2>Lets Brows All Category</h2>
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