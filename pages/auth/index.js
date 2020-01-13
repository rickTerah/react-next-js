import React from 'react';
import User from '../../components/User';

const authIndexPage = (props) => (
    <div>
        <h1 className="title">This is authentication index page.</h1>
        <User name={'Patrick'} age={23}/>
        <style jsx>{`
        .title{
            color: orangered;
        }
        `}</style>
    </div>
)
 
export default authIndexPage;