import React, { useState, useEffect } from 'react';

import '../../styles/Banner.css';

const Banner = ({ currentPage }) => {
    const [animationKey, setAnimationKey] = useState(0);

    useEffect(() => {
        setAnimationKey(prevKey => prevKey + 1);
    }, [currentPage]);

    let message;
    switch (currentPage) {
        case 'home':
            message = 'Looking for some placeholder text, darling?';
            break;
        case 'binary':
            message = 'You need binaries for testing? How cute.';
            break;
        default:
            message = 'Welcome, darling!';
    }

    return (
        <div>
            <div className='header-container'>
                <h1 className='txt-center txt-l padding-top-50'>Astarion Ipsum</h1>
            </div>
            <div className='message-container' key={animationKey}>
                <h3 className='txt-center txt-m fade-in'>{message}</h3>
            </div>
        </div>
    );
}

export default Banner;