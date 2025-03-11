import React, {useEffect, useState} from 'react';

const Home = () => {

    useEffect(() => {
        const token = localStorage.getItem('token');
        !!token ? window.location.href = '/noteList' : window.location.href = '/';
    }, []);

    return (
        <div>Loading...</div>
    )
};

export default Home;