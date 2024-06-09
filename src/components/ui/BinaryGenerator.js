import React, { useState } from 'react';
import GeneratedTextDisplay from './GeneratedTextDisplay';

function BinaryGenerator() {
    const [digits, setDigits] = useState(4);
    const [results, setResults] = useState(4);
    const [binaries, setBinaries] = useState();

    const handleGenerate = () => {
        let newBinaries = [];
    
        for (let i = 0; i < results; i++) {
            let binary = '';
            for (let j = 0; j < digits; j++) {
                binary += Math.random() < 0.5 ? '0' : '1';
            }
            newBinaries.push(binary);
        }
    
        setBinaries(newBinaries.join(' '));
    };

    const handleNegativeInput = (e) => {
        const { id, value } = e.target;
        if (value < 0) {
            if (id === "digits") {
                setDigits(0);
            } else if (id === "results") {
                setResults(0);
            }
        } else {
            if (id === "digits") {
                setDigits(parseInt(value));
            } else if (id === "results") {
                setResults(parseInt(value));
            }
        }
    };

    return (
        <div className='txt-center txt-m fade-in'>
            <label>
                Number of digits:
                <input 
                    type="number" 
                    id="digits" 
                    value={digits}
                    onChange={handleNegativeInput}
                />
            </label>
            <br />
            <label>
                Number of results:
                <input 
                    type="number" 
                    id="results" 
                    value={results}
                    onChange={handleNegativeInput}
                />
            </label>
            <br />
            <button className='button-style' onClick={handleGenerate}>Generate</button>
            {binaries && <GeneratedTextDisplay generatedText={binaries} />}
        </div>
    );
}

export default BinaryGenerator;
