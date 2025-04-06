import React from 'react';
import {Link, Outlet} from "react-router";

const Laoyout = () => {
    return (

            <div>

                <Link to="">home</Link> ||{' '}
                <Link to="first">first</Link> || {' '}

                <div style={{ border : '1px solid black' , width : '1800px' , height: '100vh'}}>
                    <Outlet/>

                </div>

            </div>
    )
}

export default Laoyout;
