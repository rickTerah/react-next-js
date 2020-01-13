import React from 'react';

const error = (props) => (
    <React.Fragment>
        <div className="error"> 404 This page is not found </div>
        <style jsx>{`
        .error{
            text-align: center;
            margin: auto;
        }
        `}</style>
    </React.Fragment>
);
 
export default error;