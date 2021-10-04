import React from 'react';
import notFound from '../../images/404.jpg';

const NotFound = () => {
    return (
        // 404 not found Section
        <div className="container w-75">
            <img className="img-fluid" src={notFound} alt="" />
        </div>
    );
};

export default NotFound;