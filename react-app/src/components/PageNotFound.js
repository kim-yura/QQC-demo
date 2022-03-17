import React, { useEffect } from "react";
import { Link } from 'react-router-dom';

function PageNotFound() {
    return (
        <div className='site-body'>
            <div className='home-section'>
                <h1>Page Not Found</h1>
                <h3>The resource you are trying to access does not exist.</h3>
                <Link to='/'><h4 id='back-to-home'>Back To Home</h4></Link>
            </div>
        </div>
    )
};

export default PageNotFound;
