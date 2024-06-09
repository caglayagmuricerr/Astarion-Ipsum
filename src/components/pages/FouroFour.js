import React from 'react';
import astarionDisapproves from '../../assets/images/astarion-disapproves.png';

const FouroFour = () => {
    return (
        <>
            <img className = "astarion-disapproves" src={astarionDisapproves} alt='Astarion disapproves'/>
            <div className='center'>
                <h1 className='txt-xl'>404</h1>
                <p className='txt-m'>How did you get here darling?</p>
                <button className='button-style' onClick={() => window.history.back()}>Go Back</button>
            </div>
        </>
    );
};

export default FouroFour;