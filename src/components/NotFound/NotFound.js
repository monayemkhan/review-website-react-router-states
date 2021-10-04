import React from 'react';
import notFound from '../../images/404.jpg';

const NotFound = () => {
    return (
        <div className="container">
            <img className="img-fluid" src={notFound} alt="" />
        </div>
    );
};

export default NotFound;