import React from 'react';

const ErrorTitle = () => {
    return (
            <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100 my-5">
                <h1 className='responsive-title'>404</h1>
                <hr className="bg-primary"/>
                <h1 className='responsive-title'>page introuvable</h1>
            </div>
    );
}

export default ErrorTitle;
