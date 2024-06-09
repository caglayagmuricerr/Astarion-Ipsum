import React, { useState } from 'react';
import astarionApproves from '../../assets/images/astarion-approves.png';

const GeneratedTextDisplay = ({ generatedText }) => {
    const [isCopied, setIsCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(generatedText);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 3000); // Hide the image after 2 seconds
    };

    return (
        <div>
            {isCopied && (
                <img className="astarion-approves slide-in" src={astarionApproves} alt="astarion approves" />
            )}
            <div className='box'>
                <p>{generatedText}</p>
            </div>
            <button 
                className='button-style' 
                onClick={copyToClipboard}
            >
                copy to clipboard
            </button>
        </div>
    );
};

export default GeneratedTextDisplay;
