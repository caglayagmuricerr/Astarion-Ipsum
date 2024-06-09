import React from 'react';
import githubImg from '../../assets/images/github.png';

const Footer = () => {
    return (
        <div>
            <a href='https://github.com/caglayagmuricerr/Astarion-Ipsum'><img className='github' src={githubImg} alt="Github"/></a>
        </div>
    );
};

export default Footer;